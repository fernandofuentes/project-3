const express = require("express");
const router = express.Router();
const chalkAnimation = require('chalk-animation');

//import models

var db = require("../models");

//html routes=================================================

//home page
router.get("/", function (req, res) {
res.sendFile('index.html', { root: 'views' });
});

module.exports = router;
