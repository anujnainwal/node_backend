import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { db } from "./db"; // Ensure you're importing the db from the correct path

const basename = path.basename(__filename);
const models = {};

/**
 * Dynamically load all model files in the models folder
 *
 * @param {import('sequelize').Sequelize} sequelize - The Sequelize instance
 */
const initializeModels = (sequelize) => {
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach((file) => {
      /**
       * Import each model dynamically
       * @type {import('sequelize').ModelCtor<import('sequelize').Model>}
       */
      const model = require(path.join(__dirname, file))(
        sequelize,
        Sequelize.DataTypes
      );
      models[model.name] = model;
    });

  // Set up associations for each model
  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
};

/**
 * Initialize models with the Sequelize instance
 */
initializeModels(db.sequelize);

/**
 * @typedef { { [key: string]: import('sequelize').ModelCtor<import('sequelize').Model> } } Models
 *
 * @type {Models & { sequelize: import('sequelize').Sequelize, Sequelize: typeof Sequelize }}
 */
models.sequelize = db.sequelize;
models.Sequelize = Sequelize;

export default models;
