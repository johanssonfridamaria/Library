# Library

Assignment for a company

## About the project

To task was to build a page and a related API+database where the user can manage Library Items and Categories. Main focus was on the backend that was built with Node.js and the items and categories is stored in a MongoDB database. The challenge in making a document database was to connect the collections with each others.

Functionality:
- It is possible to add, edit and delete categories. Although it is not possible to remove a category that contains Library Items.
- It is possible to add, edit and delete Library Items. The library items has different types with different requirements.
- It is also possible to lend out and check in library items to the customers. It is not possible to lend out Reference books. It is also not pissible to lend out a book that is already lent out. This will show in clear error messages for the user. 

## Thoughts 

I made this assignment in the begining of my Vue course, it was a challenge where I learned a lot. If I would rebuilt it I would use a vuex store to manage all my data and actions. I would also make sure not to repeat to much code, now I have some components that looks quiet similar.

## Tech used: 
VUE, HTML, CSS, JAVASCRIPT, BOOTSTRAP, NODE.JS, MONGODB
