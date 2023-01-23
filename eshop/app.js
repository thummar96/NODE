const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

app.use(express.json());

mongoose.set("strictQuery", true);
app.use()

const usersData = require("./DataInsert/users");
const productsData = require("./DataInsert/products");
const ordersData = require("./DataInsert/orders");
const orderItemsData = require("./DataInsert/orederItems");
const categoryData = require("./DataInsert/categorys");

const Users = require("./models/user");
const Products = require("./models/product");
const OrderItems = require("./models/orderItem");
const Orders = require("./models/order");
const Category = require("./models/category");


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected!"))
    .catch((err) => {
        console.log(err);
    });

app.post("/Users", (req, res) => {
    console.log(usersData.Users);
    const result = Users.insertMany(usersData.Users);
    res.send(result);
});

app.post("/Orders", (req, res) => {
    console.log(ordersData.Order);
    const result = Orders.insertMany(ordersData.Order);
    res.send(result);
});

app.post("/Category", (req, res) => {
    console.log(categoryData.category);
    const result = Category.insertMany(categoryData.category);
    res.send(result);
});

app.post("/Products", (req, res) => {
    console.log(productsData.Products);
    const result = Products.insertMany(productsData.Products);
    res.send(result);
});

app.post("/orderItems", (req, res) => {
    console.log(orderItemsData.orderItems);
    const result = OrderItems.insertMany(orderItemsData.orderItems);
    res.send(result);
});

const getUsersData = require("./get/getUsersData");
app.get("/getUser", getUsersData);

const getCategoryData = require("./get/getCategoryData");
app.get("/getCategory", getCategoryData);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Listening PORT ${PORT}`);
});


