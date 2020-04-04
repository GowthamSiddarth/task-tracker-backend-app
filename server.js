const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Server Up and Running on PORT ${PORT}`));