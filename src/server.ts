import config from "../src/config/production";
import app from "./app";

app.listen(config.PORT, () => {
  console.log("Servidor rodando na porta: 3000");
});
