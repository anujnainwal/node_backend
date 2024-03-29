import app from "./app.js";
import chalk from "chalk";
const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(
    `Server running on port: ${chalk.cyan.underline(
      port
    )}\nServer url: ${chalk.yellow.underline(`http://localhost:${port}`)}`
  );
});
