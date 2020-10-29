const express = require("express");
const app = express();
const routeur = express.Router();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

routeur.get("/", (res) => {
  res.render("index.ejs");
});

app.listen(4444);