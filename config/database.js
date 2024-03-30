import mongoose from "mongoose";
import chalk from "chalk";

const database = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then((connection) => {
      console.log(
        `Database connection host: ${chalk.bgBlueBright.underline(
          connection.connection.host
        )}\nDatabase connection: ${chalk.green.underline("CONNECTED")}`
      );
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default database;
