const { connection } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Course = connection.define(
  "Course",
  {
    course_name: DataTypes.STRING,
  },
  {
    indexes: [{ unique: true, fields: ["course_name"] }],
  }
);

module.exports = Course;
