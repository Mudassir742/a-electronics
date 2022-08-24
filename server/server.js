const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv");

const database = require("./src/config/database");
const userRoute = require("./src/routes/userRoute");
const categoryRoute = require("./src/routes/categoryRoute");
const productRoute = require("./src/routes/productRoute");
const orderRoute = require("./src/routes/orderRoute");

const app = express();

dotenv.config();
app.use(fileUpload())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database.connect();

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running at port:${process.env.PORT}!`)
);
