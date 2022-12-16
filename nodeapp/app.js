const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First end to end devops project)");
});

app.listen(8080, () => {
  console.log("Server is up");
});
