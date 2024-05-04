import app from "./app.js";
import chalk from "chalk";
import {
  notFoundResponse,
  sendSuccessResponse,
} from "./src/utils/utility.helper.js";
import { errorLogger } from "./src/utils/logs.helper.js";

const port = process.env.PORT || 9090;

app.get("/", (req, res) => {
  sendSuccessResponse(res, true, `Now server is online.`);
});

app.use("/*", (req, res) => {
  notFoundResponse(
    res,
    false,
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
