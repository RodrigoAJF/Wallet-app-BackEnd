const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Olá, chefe!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
