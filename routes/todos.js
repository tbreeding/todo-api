let express = require("express");
let router = express.Router();
let db = require("../models");

router.get("/", function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    res.send(req.body);
    res.send("This is the post route");
});
module.exports = router;