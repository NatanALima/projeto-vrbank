import express from "express";
import conn from "./src/database/connect.js";
import Routes from "./src/routes/mainRouter.js";
const app = express();
const port = 8080;


conn();

app.use(express.json());
app.use(Routes);
app.listen(port, () => console.log("rodando"));