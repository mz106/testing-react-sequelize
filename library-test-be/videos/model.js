const { connection } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Video = connection.define(
  "Video",
  {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    cat: DataTypes.STRING,
    series_list_num: DataTypes.INTEGER,
  },
  {
    indexes: [{ unique: true, fields: ["name"] }],
  }
);

module.exports = Video;
