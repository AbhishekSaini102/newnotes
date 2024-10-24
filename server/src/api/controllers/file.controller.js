import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { ApiError } from "../../utils/ApiError.js";

const uploadPhotos = async (photos) => {
  const uploadedPhotos = [];
  for (let photo of photos) {
    const uploadedPhoto = await uploadOnCloudinary(photo.path);
    if (!uploadedPhoto?.secure_url) {
      throw new ApiError(500, "Failed to upload photo");
    }
    uploadedPhotos.push(uploadedPhoto.secure_url);
  }
  return uploadedPhotos;
};

const updatePhotos = async (existingPhotos, newPhotos) => {
  const uploadedPhotos = await uploadPhotos(newPhotos);
  return [...existingPhotos, ...uploadedPhotos];
};

const deletePhotos = async (photos) => {
  // Implement photo deletion logic if needed
  // For now, we'll just return the photos to be deleted
  return photos;
};

export { uploadPhotos, updatePhotos, deletePhotos };
