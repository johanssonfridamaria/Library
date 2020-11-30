//imports mongoose from node modules
const mongodb = require('mongoose');

const LibraryItem = require('./libraryItemSchema');

//get all libraryItems
exports.getLibraryItems = (req, res) => {
  LibraryItem.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get library items',
      error: err
    }));
};

//get one libraryItem
exports.getOneLibraryItem = (req, res) => {
  LibraryItem.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get library item',
      error: err
    }));
};

//create a new LibraryItem
exports.createLibraryItem = (req, res) => {

  const LibraryItem = new LibraryItem({
    _id: mongodb.Schema.Types.ObjectId,
    categoryId: req.body.categoryId,
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    runTimeMinutes: req.body.runTimeMinutes,
    isBorrowable: true,
    type: req.body.type,

  });

  LibraryItem.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'LibraryItem created'
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create LibraryItem'
      });
    });
};

//update libraryItem
exports.updateLibraryItem = (req, res) => {
  LibraryItem.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
      LibraryItem.updateOne({ _id: req.params.id }, { $set: {modified: Date.now()}})
      .then(() => {
          res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'LibraryItem updated'
          });
      });
  })
  .catch(() => {
      res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update library item'
      });
  });
};

//Check out Library Item
exports.checkOutLibraryItem = (req, res) => {
  LibraryItem.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
      LibraryItem.updateOne({ _id: req.params.id }, { $set: {borrower:req.params.borrower, borrowDate: Date.now(), isBorrowable:false,}})
      .then(() => {
          res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'LibraryItem checked out'
          });
      });
  })
  .catch(() => {
      res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to check out library item'
      });
  });
};

//Check in Library Item
exports.checkInLibraryItem = (req, res) => {
  LibraryItem.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
      LibraryItem.updateOne({ _id: req.params.id }, { $set: {borrower:'', borrowDate: '', isBorrowable:true,}})
      .then(() => {
          res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'LibraryItem checked in'
          });
      });
  })
  .catch(() => {
      res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to check in library item'
      });
  });
};

//delete libraryItem
exports.deleteLibraryItem= (req, res) => {
  LibraryItem.deleteOne({ _id: req.params.id })
  .then(() => {
      res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Library item deleted!'
      });
  })
  .catch(() => {
      res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to delete library item'
      });
  });
};