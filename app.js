var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var engineerRouter = require("./routes/engineers");
require("dotenv/config");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/engineers", engineerRouter);

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { newUrlParser: true }, () =>
  console.log("connected test")
);

var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
