require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// -------- instantiate server & DB connection -----------------------
const app = express();
mongoose.connect(process.env.DB_URL, () => {
  console.log("DB connected");
  app.listen(process.env.PORT, () =>
    console.log(`server is running on port:${process.env.PORT}`)
  );
});

// -------- middelWares -----------------------------
app.use(morgan("dev"));
app.use(cors("*"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// -------- Routers ----------------------------------

// Not Found route
app.use((req, res) => {
  res.status(404).json({ error: "NOT FOUND!!" });
});

// ------- ErrorMiddelWare ----------------------------
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({ mesg: error.message });
});
