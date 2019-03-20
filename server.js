var express = require("express");
var hb = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;
app.engine("handlebars", hb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function() {
    console.log("LCARS listening activated at node: http://localhost:" + PORT);
});