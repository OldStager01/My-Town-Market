const { imageUpload, csvUpload } = require("../utils/upload1");
const register = (req, res) => {
  console.log(req.body);
  imageUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    console.log("Uploaded images:", req.files);
    // Files have been uploaded successfully
    const logoUrl = req.files["logo"] ? req.files["logo"][0].path : null;
    const bannerUrl = req.files["banner"] ? req.files["banner"][0].path : null;

    csvUpload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      // CSV file uploaded successfully
      const csvFilePath = req.file ? req.file.path : null;

      // Respond with image URLs and CSV file path
      res.json({ logoUrl, bannerUrl, csvFilePath });
    });
  });
};

module.exports = register;
