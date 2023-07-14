'use strict';


/**
 * adds a book recommendation
 * Adds a book to the system
 *
 * body BookItem Book to add (optional)
 * no response value expected for this operation
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * removes books that have been recommended
 * By passing in the appropriate options, you can remove recommended books in the system 
 *
 * searchString String pass an optional search string for looking up a book
 * returns List
 **/
exports.deleteBook = function(searchString) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : {
    "name" : "James Clear"
  },
  "title" : "Atomic Habits"
}, {
  "author" : {
    "name" : "James Clear"
  },
  "title" : "Atomic Habits"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * updates a mislabeled book
 * Updates a mislabeled book in the system
 *
 * body BookItem Updated book information (optional)
 * bookId String ID of the book to update
 * returns List
 **/
exports.updateBook = function(body,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : {
    "name" : "James Clear"
  },
  "title" : "Atomic Habits"
}, {
  "author" : {
    "name" : "James Clear"
  },
  "title" : "Atomic Habits"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

