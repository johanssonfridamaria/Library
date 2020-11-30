//importing express from node modules
const express = require('express');
//syncronizing express with our app
const app = express();
//import controllers
const categoryController = require('./controllers/categoryController');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  }
  next()
})

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//controllers
app.use('/api/categories', categoryController);

//export file
module.exports = app;