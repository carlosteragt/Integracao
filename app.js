const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Olá Mundo DevOps!")
})

module.exports = app 
 


