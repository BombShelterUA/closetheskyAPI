import express from "express";
import mongoose from "mongoose";

const PORT = 4001;
const DB_URL =
  "mongodb+srv://admin:example123@testcloud.rltcz.mongodb.net/CloseTheSky?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

async function connectToDB() {
  try {
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error);
  }
}

connectToDB();

app.get("/", (req, res) => {
  res.send("<h1>This is closetheshy API</h1>");
});

app.listen(PORT, (e) => {
  e ? console.log(e) : console.log(`Server started at port ${PORT}`);
});
