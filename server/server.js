const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const database = require("./src/config/database");
const userRoute = require('./src/routes/userRoute')

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database.connect();

app.use("/api/user",userRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running at port:${process.env.PORT}!`)
);