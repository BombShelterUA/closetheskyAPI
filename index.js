const express = require("express");

const app = express();

const PORT = 4001;

app.get("/", (req, res) => {
  res.send("<h1>This is closetheshy API</h1>");
});

app.listen(PORT, (e) => {
  e ? console.log(e) : console.log(`Server started at port ${PORT}`);
});
