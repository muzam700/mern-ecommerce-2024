const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: '	
ecommerce',
  api_key: '451391391323816',
  api_secret: 'rNiesD5Sw2WvIKzPJ_xpH-8sUe8',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
