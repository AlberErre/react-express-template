const express = require("express");
const path = require("path");
const open = require("open");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  return res.send("Hey!");
});

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/hello", function(req, res) {
  return res.send({ what: "hello" });
});

app.get("/build", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function() {
  console.log("Ready!", "Server is running at port : " + port);
  open(`http://localhost:${port}`);
});
