require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addData", db.addData);
app.get(`/getData`, db.getData);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
