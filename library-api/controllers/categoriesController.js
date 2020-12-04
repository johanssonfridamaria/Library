const router = require('express').Router();
const categoryModel = require('../models/categories/categoryModel');
const LibraryItemModel = require('../models/libraryItems/libraryItemModel');

//get categories
router.get('/', categoryModel.getCategories);
//get one category
router.get('/:id', categoryModel.getOneCategory);
//create a new category
router.post('/new', categoryModel.createCategory);
//update specific category
router.patch('/:id', categoryModel.updateCategory);
//delete specific category
router.delete('/:id', categoryModel.deleteCategory);
// get libraryItems with specifik CategoryID
router.get('/:id/libraryItems', LibraryItemModel.getLibraryItemsByCatId );

//export router
module.exports = router;

