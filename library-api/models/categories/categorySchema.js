//imports mongoose from node modules
const mongodb = require('mongoose');

//creating mongodb Schema
const categorySchema = mongodb.Schema({

  _id: mongodb.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },

  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() },

});

//export file
module.exports = mongodb.model('Category', categorySchema);