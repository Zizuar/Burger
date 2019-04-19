var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
      res.redirect("/burgers");    
    });

router.get("/burgers", function(req, res) {   
    burgers.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/burgers", function (req, res) {
    burgers.create(["name", "eaten"], [req.body.name, req.body.eaten], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burgers.update({
            eaten: req.body.eaten
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;