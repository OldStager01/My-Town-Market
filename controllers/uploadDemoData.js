const businessList = require("./DemoData");
const businessModel = require("../models/businessModel");

const uploadDemoData = (req, res) => {
  businessModel
    .insertMany(businessList)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

module.exports = uploadDemoData;
