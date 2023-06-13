const Sequelize = require("sequelize");
const DB_NAME = "database";

const sequelize = new Sequelize(DB_NAME, "root", "dev@555mysqlpass!", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({ alter: true });

// regis model
db.admin = require("./models/Admin")(sequelize, Sequelize);

// set relation


module.exports = db;