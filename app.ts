import express from "express";
const PORT = process.env.PORT || 2030;
const app = express();
import logger from "morgan";
import cookieParser from "cookie-parser";
import conexaoBancoDeDados from "./conexaoComBanco";
import * as swaggerDocument from "./swagger.json";
import swaggerUi = require("swagger-ui-express");

import rotaSample from "./routes/rotaSample";

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(conexaoBancoDeDados);
app.use("/template/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use("/", rotaSample);

export default app;

// Server
if (process.env.JEST_WORKER_ID === undefined) {
   app.listen(PORT, () => console.log(`#Running on port => ${PORT}!`));
}
