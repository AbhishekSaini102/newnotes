// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// const FolderPopup = ({ onClose, onCreateFolder, initialValue, isEditing }) => {
//   const [folderName, setFolderName] = useState("");

//   // Populate folderName with initial value when editing
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
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all ease-in-out">
//       <div className="bg-white p-6 rounded-lg shadow-xl w-1/3 border border-gray-200 popup-container">
//         <h2 className="text-lg font-bold mb-4 text-gray-800">
//           {isEditing ? "Edit Folder" : "Create New Folder"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="border border-gray-300 p-3 rounded-md w-full focus:ring focus:ring-blue-200"
//             placeholder="Enter folder name"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//             required
//           />
//           <div className="mt-4 flex justify-end space-x-2">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               {isEditing ? "Update Folder" : "Create Folder"}
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




import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FolderPopup = ({ onClose, onCreateFolder, initialValue, isEditing }) => {
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    if (isEditing && initialValue) {
      setFolderName(initialValue);
    }
  }, [isEditing, initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName) {
      onCreateFolder(folderName);
      setFolderName("");
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
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all duration-300 ease-in-out">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-custom-width-full popup-container relative">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {isEditing ? "Edit Folder" : "New Folder"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all duration-200 shadow-sm"
            placeholder="Enter folder name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              {isEditing ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

FolderPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreateFolder: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  isEditing: PropTypes.bool,
};

export default FolderPopup;
