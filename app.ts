import express from 'express';
const PORT = process.env.PORT || 2030;
const app = express();
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import conexaoBancoDeDados from "./conexaoComBanco";
import rotaTeste from "./routes/rotaTeste";

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(conexaoBancoDeDados);

// Rotas
app.use("/", rotaTeste);

export default app;

// Server
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => console.log(`#Running on port => ${PORT}!`));
}