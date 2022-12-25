const mongoose = require("mongoose");

const app = require("./app");

const { connectAPI, PORT = 3000 } = process.env;

mongoose
  .connect(connectAPI)
  .then(() => {
    console.log("Database connection successful");
    return app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
