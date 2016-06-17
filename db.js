var mongoose = require('mongoose');

exports.init = function(callback){
  //mongoose.connect('mongodb://petitpapa:dracons86@ds015774.mlab.com:15774/book-trading', callback);
  mongoose.connect('mongodb://localhost:27017/book-trading');
}
