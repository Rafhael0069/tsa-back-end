import express from "express";
import routers from "./routes/index.routes";
import config from "./config/production"

const app = express();

app.get(config.API_BASE, (req, res) => {
  res.status(200).send('<h1 style="text-align: center">Api TSA Online, 2022!</h1>');
});

app.use(config.API_BASE, routers);

export default app;
