import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.get("/submit", (req, res) => {
  console.log('Your Band Name Is:')
  console.log(req.street + req.pet);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
