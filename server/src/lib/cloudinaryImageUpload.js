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
        resolve({
          imagePublicId: result.public_id,
          imageURL: result.secure_url,
        });
        reject(error);
      }
    );
  });
};
