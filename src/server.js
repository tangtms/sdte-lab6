const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hey dude!");
});

module.exports = app;
