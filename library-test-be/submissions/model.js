const { connection } = require("../db/connection");
const { DataTypes } = require("sequelize");

const ActivitySubmission = connection.define(
  "ActivitySubmission",
  {
    activity_name: {
      type: DataTypes.STRING,
    },
    is_reviewed: DataTypes.BOOLEAN,
    gh_link: DataTypes.STRING,
  },
  {
    indexes: [{ unique: true, fields: ["gh_link"] }],
  }
);

module.exports = ActivitySubmission;
