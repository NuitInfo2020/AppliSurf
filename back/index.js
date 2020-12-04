const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

app.use(bodyparser.json()).use(bodyparser.urlencoded({ extended: false }));

// Nosql connection
const uri = `mongodb+srv://root:PLBS98IXUueEWKen@cluster0.w3fwx.mongodb.net/surf?retryWrites=true&w=majority`;

const Router = require("./routes/ApiRoute");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000, () => console.log(`noSQL server ready`));
    app.use("/api", Router);
  })
  .catch((err) => {
    console.log(err);
  });
