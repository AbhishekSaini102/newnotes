/* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const FolderPopup = ({ onClose, onCreateFolder, initialValue, isEditing }) => {
//   const [folderName, setFolderName] = useState("");

//   useEffect(() => {
//     if (isEditing && initialValue) {
//       setFolderName(initialValue);
//     }
//   }, [isEditing, initialValue]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (folderName) {
//       onCreateFolder(folderName);
//       setFolderName("");
//     }
//   };

//   const handleMouseDownOutside = (e) => {
//     if (e.target.closest(".popup-container") === null) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("mousedown", handleMouseDownOutside);
//     return () => {
//       window.removeEventListener("mousedown", handleMouseDownOutside);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all duration-300 ease-in-out">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96 popup-container">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//           {isEditing ? "Edit Folder" : "New Folder"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 transition-all duration-200"
//             placeholder="Enter folder name"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//             required
//           />
//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
//             >
//               {isEditing ? "Update" : "Create"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// FolderPopup.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   onCreateFolder: PropTypes.func.isRequired,
//   initialValue: PropTypes.string,
//   isEditing: PropTypes.bool,
// };

// export default FolderPopup;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFolders,
  createFolder,
  editFolder,
  removeFolder,
} from "../../store/folderSlice.js";
import FolderIcon from "../SvgIcons/FolderIcon.jsx";
import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";
import EditIcon2 from "../SvgIcons/EditIcon2.jsx";
import XMarkIcon from "../SvgIcons/XMarkIcon.jsx";

const FolderItem = ({ folder, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <FolderIcon className="h-4 w-4 mr-2 text-gray-400" />
        {folder.name}
      </div>
      {isHovered && (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(folder)}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
            title="Edit"
          >
            <EditIcon2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(folder._id)}
            className="text-red-500 hover:text-red-600 transition-colors duration-200"
            title="Delete"
          >
            <DeleteIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </li>
  );
};

const FolderPopup = ({
  onClose,
  onCreateFolder,
  initialValue,
  isEditing: initialIsEditing,
}) => {
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [editingFolder, setEditingFolder] = useState(null);
  const dispatch = useDispatch();
  const {
    folders,
    isLoading,
    error: folderError,
  } = useSelector((state) => state.folders);

  useEffect(() => {
    dispatch(fetchAllFolders());
  }, [dispatch]);

  useEffect(() => {
    if (initialIsEditing && initialValue) {
      setFolderName(initialValue.name);
      setEditingFolder(initialValue);
      setIsEditing(true);
    }
  }, [initialIsEditing, initialValue]);

  useEffect(() => {
    if (folderError) {
      setError(folderError);
    }
  }, [folderError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      setError("Please enter a folder name.");
      return;
    }
    if (
      folders.some(
        (folder) =>
          folder.name.toLowerCase() === folderName.trim().toLowerCase() &&
          folder._id !== (editingFolder ? editingFolder._id : null)
      )
    ) {
      setError("A folder with this name already exists.");
      return;
    }
    setError("");
    if (isEditing && editingFolder) {
      dispatch(
        editFolder({
          id: editingFolder._id,
          folderData: { name: folderName.trim() },
        })
      );
    } else {
      dispatch(createFolder({ name: folderName.trim() }));
    }
    resetForm();
  };

  const resetForm = () => {
    setFolderName("");
    setIsEditing(false);
    setEditingFolder(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleEdit = (folder) => {
    setFolderName(folder.name);
    setEditingFolder(folder);
    setIsEditing(true);
    setError("");
  };

  const handleDelete = (folderId) => {
    dispatch(removeFolder(folderId));
    if (editingFolder && editingFolder._id === folderId) {
      resetForm();
    }
  };

  const handleMouseDownOutside = (e) => {
    if (e.target.closest(".popup-container") === null) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDownOutside);
    return () => {
      window.removeEventListener("mousedown", handleMouseDownOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg w-96 max-h-[80vh] flex flex-col overflow-hidden popup-container">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {isEditing ? "Edit Folder" : "New Folder"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <XMarkIcon />
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="px-6 py-2 bg-red-100 bg-opacity-80">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Input Section */}
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
            <FolderIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </form>

        {/* Folder List */}
        <div className="flex-grow overflow-y-auto px-6 py-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
            </div>
          ) : (
            <>
              <h3 className="text-sm font-semibold mb-2 text-gray-500">
                Folders
              </h3>
              <ul className="space-y-1">
                {folders.map((folder) => (
                  <FolderItem
                    key={folder._id}
                    folder={folder}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50 bg-opacity-80">
          <button
            type="button"
            className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200 text-sm"
            onClick={resetForm}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm shadow-sm"
          >
            {isEditing ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

FolderPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreateFolder: PropTypes.func.isRequired,
  initialValue: PropTypes.object,
  isEditing: PropTypes.bool,

};

FolderItem.propTypes = {
  folder: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FolderPopup;
