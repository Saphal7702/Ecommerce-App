const express = require("express");
require("dotenv").config();

const app = express();


app.get("/", function(req, res){
    res.send("Hello, we're up and running...")
});

const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Server running on port 8000...")
});