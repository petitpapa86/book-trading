var express = require('express');
var api = express.Router();
var status = require('http-status');
var async = require('async');
var _ = require('underscore');

module.exports = function(wagner) {
    var name;
    api.get('/', wagner.invoke(function(Category) {
        return function(req, res) {
            Category.find({}, function(err, results) {
                if (err)
                    return res.status(status.INTERNAL_SERVER_ERROR).json({
                        err: err.toString()
                    });
                return res.status(status.OK).json({
                    data: results
                });
            });
        }
    }));

    api.post('/', wagner.invoke(function(Category) {
        return function(req, res) {

            async.waterfall([
                    function(cb) {
                        try {
                            name = req.body.name;
                        } catch (e) {
                            return res.status(status.BAD_REQUEST).json({
                                MISSING_DATA: 'no name field is specified! '
                            })
                        };
                        cb(null, req.body);
                    },
                    function(data, cb) {
                        console.log(data.name);
                        var cat = {
                            _id: data.name,
                            parent: data.parent,
                            ancestors: data.ancestors
                        };
                        Category.create(cat, cb);
                    }
                ],
                function(err, result) {
                    if (err) {
                        if (err.code == '11000')
                            return res.status(status.FOUND).json({
                                DUPLICATE_DATA: 'the category ' + name + ' already exists'
                            })
                        else
                            return res.status(status.INTERNAL_SERVER_ERROR).json({
                                err: err.toString()
                            });
                    }

                    return res.status(status.OK).json({
                        category: _.pick(result, '_id', 'parent', 'ancestors')
                    });
                })
        }
    }));

    return api;
}
