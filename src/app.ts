import express from "express";
import routers from "./routes/index.routes";
import config from "./config/production"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(config.API_BASE, routers);

app.get("/api", (req, res) => {
  res.status(200).send('<h1 style="text-align: center">Api TSA Online, 2022!</h1>');
});

export default app;
