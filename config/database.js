import mongoose from "mongoose";
import chalk from "chalk";
import Sequelize from "sequelize";

//node - mysql connection
/**
 * @typedef {import('mongoose').Connection} MongooseConnection
 * @typedef {import('sequelize').Sequelize} SequelizeInstance
 */

/**
 * Sequelize connection instance for MySQL
 * @type {SequelizeInstance}
 */
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

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

/**
 * Database object containing Sequelize instance
 * @type {{ sequelize: SequelizeInstance, Sequelize: typeof Sequelize }}
 */

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, database };
