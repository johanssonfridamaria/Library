//imports mongoose from node modules
const mongodb = require('mongoose');
const LibraryItem = require('../libraryItems/libraryItemSchema');
const ObjectId = mongodb.Schema.Types.ObjectId

//creating mongodb Schema
const categorySchema = mongodb.Schema({

  _id: ObjectId,
  name: { type: String, required: true, unique: true, },

  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },

});

//export file
module.exports = mongodb.model('Category', categorySchema);