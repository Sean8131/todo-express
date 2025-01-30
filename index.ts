import express from "express";
import mongoose from "mongoose";


const app = express();
const port = 8080;

const dbName = process.env.NODE_ENV == "test" ? "todos_test" : "todos_dev";

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});