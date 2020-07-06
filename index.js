const express = require("express");
const app = express();

console.log("Start docker-excercise");

app.get("/ping", (request, response) => {
  response.send("pong ping pong");  
});

app.listen(process.env.PORT ? process.env.PORT : 8000);