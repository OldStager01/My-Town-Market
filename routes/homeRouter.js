const express = require("express");
const path = require("path");
const { business, businessPage } = require("../controllers/business");
const uploadDemoData = require("../controllers/uploadDemoData");

//Creating Router
const homeRouter = express.Router();

//!Handling Routes
homeRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

homeRouter.get("/business", business);

// homeRouter.get("/uploadDemoData", uploadDemoData);

homeRouter.get("/business/:businessID", businessPage);
homeRouter.use((req, res, next) => {
  // Set status to 404 (Not Found)
  res.status(404).send("Not Found");
});
module.exports = homeRouter;
