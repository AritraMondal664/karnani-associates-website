const multer = require("multer");
const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Cloudinary Configuration
cloudinary.config({
  cloud_name:
    process.env.CLOUDINARY_CLOUD_NAME,
  api_key:
    process.env.CLOUDINARY_API_KEY,
  api_secret:
    process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "karnani-team",

    allowed_formats: [
      "jpg",
      "jpeg",
      "png",
      "webp",
    ],
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  const allowedTypes =
    /jpeg|jpg|png|webp/i;

  const mimetype = allowedTypes.test(
    file.mimetype
  );

  if (mimetype) {
    return cb(null, true);
  }

  cb(
    new Error(
      "Only JPG, JPEG, PNG and WEBP files are allowed"
    )
  );
};

// Multer Upload Configuration
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;