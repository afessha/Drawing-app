var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(PORT, function() {
  console.log(`server is running on port ${PORT}`);
});
