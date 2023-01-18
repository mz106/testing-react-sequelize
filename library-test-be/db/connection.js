const { Sequelize } = require("sequelize");

exports.connection = new Sequelize(process.env.MYSQL_URI);
