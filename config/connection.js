var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{ connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sfc77802",
  database: "burgers_db"
});
};

connection.connect(function(err) {
    if (err) {
      console.error("Unable To Comply: " + err.stack);
      return;
    }
    console.log("LCARS Database Connected " + connection.threadId);
  });

  module.exports = connection;