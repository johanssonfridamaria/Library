//imports mongoose from node modules
const mongodb = require('mongoose');
const ObjectId = mongodb.Schema.Types.ObjectId

//creating mongodb Schema
const libraryItemSchema = mongodb.Schema({

  _id: ObjectId,
  // categoryId: ObjectId,
  category: { type: ObjectId, ref: 'Category' },
  title: { type: String, required: true},
  author: { type: String,},
  pages: { type: Number,},
  runTimeMinutes: { type: Number,},
  isBorrowable: { type: Boolean, required: true},
  borrower: { type: String },
  borrowDate: { type: Date, },
  type: { type: String, required: true },
  
  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },

});

//export file
module.exports = mongodb.model('LibraryItem', libraryItemSchema);