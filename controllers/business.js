const businessModel = require("../models/businessModel");
const business = async (req, res) => {
  const query = req.query && req.query.category ? req.query.category : null;
  const validCategories = ["Food", "Skincare", "TBD"];
  const validCategory =
    query &&
    validCategories.find((element) => query == element.toLocaleLowerCase());
  let businesses;
  if (query && validCategory) {
    businesses = await businessModel.find().where("category").eq(validCategory);
  } else {
    businesses = await businessModel.find();
  }
  // console.log(business);
  res.render("business", {
    category: "all",
    businessList: businesses,
  });
};

const businessPage = async (req, res) => {
  const businessID = req.params.businessID;
  if (businessID == "favicon.ico") {
    res.send("");
    return;
  }
  try {
    const businessData = await businessModel.findById(businessID);
    res.render("businessPage", businessData);
  } catch (e) {
    res.status(404).send("Not Found");
  }
  // console.log(businessData);
};

module.exports = { business, businessPage };
