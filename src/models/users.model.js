/**
 * User model definition
 * @param {import('sequelize').Sequelize} sequelize - Sequelize instance
 * @param {import('sequelize').DataTypes} DataTypes - Sequelize data types
 * @returns {import('sequelize').Model} User model
 */

export default (sequelize, DataTypes) => {
  const UsersModel = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid email format",
          },
          isLowercase: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          minLength: 8,
        },
      },
    },
    {
      timestamps: true,
      tableName: "users",
    }
  );
  return UsersModel;
};
