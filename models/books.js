// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var BookSchema = new Schema({
//      title: String,
//      author: String,
//      image: String,
//      releaseDate: String,
//     // you should fill the rest of this in

// });

var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
});

var Books = mongoose.model('Book', BookSchema);
module.exports = Books;