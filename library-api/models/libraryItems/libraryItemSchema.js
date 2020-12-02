//imports mongoose from node modules
const mongodb = require('mongoose');
const Category = require('../categories/categorySchema');
const ObjectId = mongodb.Schema.Types.ObjectId

//creating mongodb Schema
const libraryItemSchema = mongodb.Schema({

  _id: mongodb.Schema.Types.ObjectId,
  categoryId: { type: ObjectId, ref: 'Category'},
  title: { type: String, required: true},
  author: { type: String,},
  pages: { type: Number,},
  runTimeMinutes: { type: String,},
  isBorrowable: { type: Boolean, required: true},
  borrower: { type: String },
  borrowDate: { type: Date, },
  type: { type: String, required: true },
  
  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },

});

//export file
module.exports = mongodb.model('LibraryItem', libraryItemSchema);