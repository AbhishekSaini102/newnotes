import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// import path from "path";
import util from "util";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const unlinkAsync = util.promisify(fs.unlink);

// const uploadOnCloudinary = async (localFilePath) =>{
//     try {
//         if (!localFilePath){
//             return null;
//         }
//         //upload File On Cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto",
//         });

//         //File has been uploaded
//         //console.log("File has been uploaded cloudinary", reponse.url);
//         fs.unlinkSync(localFilePath); //remove the locale save temp file as the upload operation got successful
//         return response;

//     } catch (error) {

//         fs.unlinkSync(localFilePath); //remove the locale save temp file as the upload operation got failed
//         return null;
//     }
// }

// const deleteFromCloudinary = async (publicId) => {
//     try {
//         const result = await cloudinary.uploader.destroy(publicId);
//         if (result.result !== 'ok') {
//             throw new Error('Failed to delete image from Cloudinary');
//         }
//         return result;
//     } catch (error) {
//         console.error("Error deleting image from Cloudinary:", error);
//         throw error; // Re-throw the error to handle it in the calling function
//     }
// };

// Function to upload a file to Cloudinary

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // Upload file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File has been uploaded
    // console.log("File has been uploaded to Cloudinary", response.url);

    // Remove the local saved temp file as the upload operation got successful
    await unlinkAsync(localFilePath);

    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);

    // Attempt to remove the local saved temp file as the upload operation failed
    try {
      await unlinkAsync(localFilePath);
    } catch (unlinkError) {
      console.error("Error removing local file:", unlinkError);
    }

    // Re-throw the error to handle it in the calling function
    throw error;
  }
};

// Function to delete a file from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== "ok") {
      console.error("Failed to delete image from Cloudinary");
      return {
        success: false,
        message: "Failed to delete image from Cloudinary",
      };
    }
    return { success: true, result };
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    return {
      success: false,
      message: "Error deleting image from Cloudinary",
      error,
    };
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };

// export const upload = async (file) => {
//     try {
//         const {createReadStream, filename} = await file;
//         const stream = createReadStream();
//         const result = await new Promise((resolve, reject) => {
//             const cloudStream = cloudinary.uploader.upload_stream({
//                 folder: "media",
//                 public_id: filename
//             }, (error, result) => {
//                 if (result) {
//                     resolve(result);
//                 } else {
//                     reject(error);
//                 }
//             });
//             stream.pipe(cloudStream);
//         });
//         return result;
//     } catch (error) {
//         return error;
//     }
// };
