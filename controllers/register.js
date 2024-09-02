// register.js
const { cloudinary, handleFileUploads } = require("../utils/upload2");

// POST endpoint for file upload
const register = (req, res) => {
  // Here, you can handle cloudinary upload for images and local storage for CSV
  // For example:
  // Access form data including uploaded files
  const businessName = req.body["businessName"];
  const businessCategory = req.body["business-category"];
  const businessAddress = req.body["business-address"];
  const businessDescription = req.body["business-description"];
  const logoFile = req.files["logo"][0];
  const bannerFile = req.files["banner"][0];
  const csvFile = req.files["csv"];

  // Here, you can handle cloudinar y upload for logo and banner images
  // and local storage for the CSV file
  // Example code to upload logo and banner to Cloudinary:
  cloudinary.uploader.upload(logoFile.path, (error, logoResult) => {
    if (error) {
      return res.status(500).json(error);
    }

    cloudinary.uploader.upload(bannerFile.path, (error, bannerResult) => {
      if (error) {
        return res.status(500).json(error);
      }

      // Handle logoResult and bannerResult for cloudinary images

      // Handle csvFile for local CSV
      // Process CSV file
      res.status(200).send("Files uploaded successfully.");
    });
  });
};
module.exports = { register };
