const router = require('express').Router();
const LibraryItemModel = require('../models/libraryItems/libraryItemModel');

//get library items
router.get('/', LibraryItemModel.getLibraryItems);

//get one library item
router.get('/:id', LibraryItemModel.getOneLibraryItem);

//create a new libraryitem
router.post('/new', LibraryItemModel.createLibraryItem);

//update specific library item
router.patch('/:id', LibraryItemModel.updateLibraryItem);

//delete specific library item
router.delete('/:id', LibraryItemModel.deleteLibraryItem);

//export router
module.exports = router;
