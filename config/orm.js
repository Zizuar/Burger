var connection = require("../config/connection.js");
// borrowed this piece from a friend just for protecting the db with the ORM from SQL Injection. Will use it in my own code later on in the app construction.
function printQuestionMarks(num) {
    var arr = [];  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }  
    return arr.toString();
  };






  module.exports = orm;