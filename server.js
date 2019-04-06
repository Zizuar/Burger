var express = require("express");
var hb = require("express-handlebars");
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = process.env.PORT || 8080;
app.engine("handlebars", hb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("LCARS listening activated at node: http://localhost:" + PORT);
});