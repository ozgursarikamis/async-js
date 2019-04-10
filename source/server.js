"use strict";
exports.__esModule = true;
var express = require("express");
function loggerMiddleware(request, response, next) {
    console.log(request.method + " " + request.path);
    next();
}
var app = express();
app.use(loggerMiddleware);
app.get("/", function (request, response) {
    response.send("Hello from express.js with Typescript");
});
app.listen(5000);
