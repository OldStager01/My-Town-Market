const express = require("express");
const app = express();
const PORT = 8082;
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//Importing Routers
const homeRouter = require("./routes/homeRouter");

const mongoDBString =
  "mongodb+srv://tanmaytambat01:ZVcHrWO3g1KSN22e@practicedb.varipgo.mongodb.net/?retryWrites=true&w=majority&appName=PracticeDB";
//Importing Controllers
const { cloudinary, handleFileUploads } = require("./utils/upload2");

//!Configure ejs
app.set("view engine", "ejs");
//!Connect to Database
mongoose
  .connect(mongoDBString)
  .then(() => console.log("DB Connected Successfully"))
  .catch((e) => console.log("Error Connecting DB" + e));

//!Middlewares
//*To serve static files (css, js)
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

//!Routes
//*Home Route
app.use("/", homeRouter);

//*NOT USED
// app.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/register.html"));
// });

// // app.post("/register", handleFileUploads, (req, res) => {
// //   // Here, you can handle cloudinary upload for images and local storage for CSV
// //   // For example:
// //   // Access form data including uploaded files
// //   const businessName = req.body["businessName"];
// //   const businessCategory = req.body["business-category"];
// //   const businessAddress = req.body["business-address"];
// //   const businessDescription = req.body["business-description"];
// //   console.log(businessName);
// //   console.log(req.body);
// //   console.log(req.files);
// //   const logoFile = req.files["logo"][0];
// //   const bannerFile = req.files["banner"][0];
// //   const csvFile = req.files["csv"];

// //   // Here, you can handle cloudinar y upload for logo and banner images
// //   // and local storage for the CSV file
// //   // Example code to upload logo and banner to Cloudinary:
// //   cloudinary.uploader.upload(logoFile.path, (error, logoResult) => {
// //     if (error) {
// //       return res.status(500).json(error);
// //     }

// //     cloudinary.uploader.upload(bannerFile.path, (error, bannerResult) => {
// //       if (error) {
// //         return res.status(500).json(error);
// //       }

// //       // Handle logoResult and bannerResult for cloudinary images

// //       // Handle csvFile for local CSV
// //       // Process CSV file
// //       res.status(200).send("Files uploaded successfully.");
// //     });
// //   });
// // });
// //!Start the server
// Catch-all route for undefined routes
app.use((req, res, next) => {
  // Set status to 404 (Not Found)
  res.status(404).send("Not Found");
});
app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
