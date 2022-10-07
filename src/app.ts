import express from "express";
import routers from "./routes/index.routes";

const app = express();

app.use("/", routers);

export default app;