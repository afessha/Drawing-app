var express = require("express");
var app = express();
var path = require("path");
app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(8080, function() {
  console.log("server is running on port 8080");
});
