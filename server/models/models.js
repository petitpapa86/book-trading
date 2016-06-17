var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(wagner){

  var Category = mongoose.model('Category', require('./category'), 'categories');

  var models = {
    Category :  Category
  };

  _.each(models, function(value, key){
    wagner.factory(key, function(){
      return value;
    });
  });

}
