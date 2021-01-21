const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const Author = require("./author");
const Review = require("./review");
const Category = require("./Category");
const Article = require("./article");
// console.log(process.env.PGDATABASE,
//     process.env.PGUSER,
//     process.env.PGPASSWORD,
//     process.env.PGHOST)
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    port: process.env.PGPORT
  }
);

const models = {
  Author: Author(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Review: Review(sequelize, DataTypes),
  Article: Article(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
