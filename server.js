// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require('cors');

// Require schemas
//var Click = require("./models/click");
var Article = require("./models/Article");

var app = express();
app.options('*', cors());

var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect("mongodb://localhost/nyt")
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application


app.get("/api/saved", function(req, res) {

  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

app.post("/api/saved", function(req, res) {

  let {title, url, date} = req.body;

  Article.create({
    title: title,
    url: url,
    date: date
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Saved Search");
    }
  });
});

app.delete("/api/saved", function(req, res){

});

app.get("*", function(req, res) {
  res.sendFile("/public/index.html");
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
