import express, { json } from "express";

import conn from './src/database/connect';
const app = express();
const port = 8080;


conn();

app.use(json());
app.listen(port, () => console.log("rodando"));