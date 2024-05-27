const express = require("express");

const conn = require('./src/database/connect')
const app = express();
const port = 8080;


conn();

app.use(express.json());
app.listen(port, () => console.log("rodando"));