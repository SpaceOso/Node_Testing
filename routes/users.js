var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource this is a user");
});

router.get("/rico", function(req, res, next) {
  res.send("obvsiously the coolest");
});

module.exports = router;
