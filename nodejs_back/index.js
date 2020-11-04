const express = require("express");

var cor = require("cors");

var app = express();

var corsOptions = {
    origin:'http://localhost:8080'
}

app.use(cor(corsOptions));
require("./controller")(app);


app.listen(3000,()=>{console.log("listening on port 3000...")});