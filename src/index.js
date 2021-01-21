const authorRouter = require("./services/articles");
const categoryRouter = require("./services/categories");
const articleRouter = require("./services/articles");
const reviewRouter = require("./services/reviews");
const express = require("express");
require("dotenv").config();
const db = require("./db"); //this is running squealise, and it is here that is using the .env
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const {
  notFoundHandler,
  badRequestHandler,
  genericErrorHandler,
} = require("./errorHandlers");

// initial set-up

const server = express();
const port = process.env.PORT || 3007;

//middlewares
server.use(cors());
server.use(express.json());

//route

server.use("/authors", authorRouter);
server.use("/categories", categoryRouter);
server.use("/articles", articleRouter);
server.use("/reviews", reviewRouter);

// error handlers
server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);
console.log(listEndpoints(server));

db.sequelize.sync({ force: true }).then(result => {
  server.listen(port, () => {
    if (server.get("env") === "production")
      console.log("Server is running on CLOUD on PORT:", port);
    console.log("Server is running LOCALLY on PORT:", port);
  });
});
