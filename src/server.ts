import config from "./config/production";
import app from "./app";

app.listen(config.PORT, () => {
  console.log("Servidor rodando na porta: " + config.PORT);
});
