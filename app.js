const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require('express-validator');
const cors = require("cors");
const path = require("path");

require("dotenv").config();

//Configuring user routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");


const app = express();

// mongoose.connect("mongodb://localhost:27017/Ecommercedb", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://saphal7702:"+process.env.DBPASS+"@cluster0.ngbyi.mongodb.net/Bookbrewerydb?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./react-front/build")));


//Using routes middleware
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",braintreeRoutes);
app.use("/api",orderRoutes);


const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Server running on port " + port)
});