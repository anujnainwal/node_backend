import app from "./app.js";
import chalk from "chalk";
import {
  notFoundResponse,
  sendSuccessResponse,
} from "./src/utils/utility.helper.js";
import { errorLogger } from "./src/utils/logs.helper.js";
import { db } from "./config/database.js";
const port = process.env.PORT || 9090;

db.sequelize
  .sync()
  .then(() => {
    console.log("Database Status", chalk.green.bold("connected."));
  })
  .catch((err) => {
    console.log(
      chalk.red.bold("Error connecting to the database"),
      err.message
    );
    process.exit(1);
  });

app.get("/", (req, res) => {
  sendSuccessResponse(res, "Server Online.");
});

app.use("/*", (req, res) => {
  notFoundResponse(
    res,
    "The route you are attempting to access does not exist.",
    null,
    "You are in route, but the route you are looking for does not exist."
  );
});

app.use(errorLogger);

app.listen(port, () => {
  console.log(
    `Server running on port: ${chalk.cyan.underline(
      port
    )}\nServer url: ${chalk.yellow.underline(`http://localhost:${port}`)}`
  );
});
