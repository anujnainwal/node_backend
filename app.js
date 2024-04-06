import express from "express";
import helmet from "helmet";
import cors from "cors";
import { corsOptions } from "./config/corsOption.js";
import database from "./config/database.js";
import { requestLogger } from "./src/utils/logs.helper.js";
import logger from "morgan";
const app = express();

database();

//setup basic
app.use(requestLogger);
app.use(logger("short"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//settings up response headers

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By", false);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

export default app;
