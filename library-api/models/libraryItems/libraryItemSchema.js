//imports mongoose from node modules
const mongodb = require('mongoose');
const Category = require('../categories/categorySchema');

//creating mongodb Schema
const libraryItemSchema = mongodb.Schema({

  _id: mongodb.Schema.Types.ObjectId,
  categoryId: { type: mongodb.Schema.Types.ObjectId, ref: Category, required:true },
  title: { type: String, required: true},
  author: { type: String, required: true},
  pages: { type: Number, required: true},
  runTimeMinutes: { type: String, required: true},
  isBorrowable: { type: Boolean, required: true},
  borrower: { type: String },
  borrowDate: { type: Date, default: Date.now() },
  type: { type: String },
  
  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },

});

//export file
module.exports = mongodb.model('LibraryItem', libraryItemSchema);