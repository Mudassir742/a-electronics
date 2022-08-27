const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
  secure: true,
});

exports.uploadImage = async (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      image,
      {
        folder: "products",
      },
      (error, result) => {
        resolve({ imageURL: result.secure_url, publicId: result.public_id });
        reject(error);
      }
    );
  });
};

exports.isURL = (string) => {
  const reg_EX = new RegExp(
    "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
  );

  if (!string || !reg_EX.test(string)) {
    return false;
  }
  return true;
};
