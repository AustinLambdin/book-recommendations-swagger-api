'use strict';


/**
 * searches books that have been recommended
 * By passing in the appropriate options, you can search for available books in the system 
 *
 * searchString String pass an optional search string for looking up a book
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchBook = function(searchString,skip,limit) {
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

