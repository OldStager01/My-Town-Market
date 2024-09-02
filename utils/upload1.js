const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
//!Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//!Configure Multer Storage Cloudinary
//*For Images
// const imageStorage = new CloudinaryStorage({
//   cloudinary,
//   // params: (req, file) => {
//   //   console.log(file.originalname);
//   //   const unwantedCharsRegex = /[!@#$%^&*(),.?":{}|<>]/g;
//   //   const folderName = req.body.businessName.replace(unwantedCharsRegex, "");
//   //   console.log(folderName);
//   //   return {
//   //     folder: folderName,
//   //     public_id: `file-${Date.now().toLocaleString}`,
//   //     allowed_formats: ["jpg", "png"],
//   //   };
//   // },
//   params: {
//     folder: "folderSome",
//     public_id: (req, file) => file.fieldname + "-" + Date.now(),
//     allowed_formats: ["jpg", "png"],
//     transformation: {
//       crop: "fill",
//       type: "authenticated",
//     },
//   },
// });
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "images-MyTownMarket",
    format: async (req, file) => "png",
    public_id: (req, file) => file.fieldname + "-" + Date.now(),
    transformation: {
      width: 900,
      height: 900,
      crop: "fill",
      type: "authenticated",
    },
  },
});
//*Image upload handler
const imageUpload = multer({ storage: imageStorage }).fields([
  { name: "logo", maxCount: 1 },
  { name: "banner", maxCount: 1 },
]);
// const uploadImage = multer({ storage: imageStorage }).single("logo");

//*For CSV
const csvStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    const fileExtension = file.originalname.split(".").pop().toLowerCase();
    cb(null, `items.${fileExtension}`);
  },
});
const csvStorageFilter = (req, file, cb) => {
  // Check file types for different fields
  if (file.fieldname === "csvFile" && file.mimetype === "text/csv") {
    cb(null, true);
  } else {
    cb(new Error("Only CSV files are allowed"));
  }
};
//*CSV Upload Handler
const csvUpload = multer({
  storage: csvStorage,
  fileFilter: csvStorageFilter,
}).single("csv");

module.exports = { imageUpload, csvUpload };
