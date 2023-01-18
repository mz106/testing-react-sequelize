const { connection } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Activity = connection.define(
  "Activity",
  {
    cat: DataTypes.STRING,
    name: DataTypes.STRING,
    lvl: DataTypes.STRING,
    introduction: DataTypes.STRING,
    part_one: DataTypes.STRING,
    part_two: DataTypes.STRING,
    part_one_answer: DataTypes.STRING,
    part_two_answer: DataTypes.STRING,
  },
  {
    indexes: [{ unique: true, fields: ["name"] }],
  }
);

module.exports = Activity;
