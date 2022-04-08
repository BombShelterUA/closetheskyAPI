const express = require("express");

const app = express();

const PORT = 4001;

app.listen(PORT, (e) => {
  e ? console.log(e) : console.log(`Server started at port ${PORT}`);
});
