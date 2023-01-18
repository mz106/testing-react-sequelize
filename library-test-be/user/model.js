const { connection } = require("../db/connection");
const { DataTypes } = require("sequelize");

const User = connection.define(
  "User",
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    indexes: [{ unique: true, fields: ["username"] }],
  }
);

module.exports = User;
