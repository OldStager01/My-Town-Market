// upload.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create a Cloudinary storage instance
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "png", // Change this as per your file format
    public_id: (req, file) => file.originalname,
  },
});

// Multer upload for cloudinary
const cloudinaryUpload = multer({ storage: storage }).fields([
  { name: "logo", maxCount: 1 },
  { name: "banner", maxCount: 1 },
]);

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Multer upload for CSV to disk
const csvUpload = multer({ storage: diskStorage }).single("csv");

// Middleware to handle file uploads
const handleFileUploads = (req, res, next) => {
  // Handle image upload to cloudinary
  cloudinaryUpload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    // If image upload successful, upload CSV to disk
    csvUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }

      next();
    });
  });
};

module.exports = {
  cloudinary,
  handleFileUploads,
};
