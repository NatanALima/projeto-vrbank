import express from "express";
import conn from "./src/database/connect.js";
import Routes from "./src/routes/mainRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 8080;


conn();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(port, () => console.log("rodando"));