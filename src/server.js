import "express-async-errors";
import app from "./loaders/express.loader.js";
import config from "./config/config.js";
import cors from "cors";

app.use(cors);
app.listen(config.PORT, () => {
  console.log(
    config.APPLICATION_NAME +
    " se esta ejecutando en el puerto " +
    config.PORT
  );
});