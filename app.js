const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Olá Mundo DevSecOps");
});

module.exports = app;

