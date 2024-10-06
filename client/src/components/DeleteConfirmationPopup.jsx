// /* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";

// const DeleteConfirmationPopup = ({ onConfirm, onCancel }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg w-96 max-h-[80vh] flex flex-col overflow-hidden popup-container">
//         <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-800">
//             Confirm Deletion
//           </h2>
//           <button
//             onClick={onCancel}
//             className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </button>
//         </div>
//         <div className="px-6 py-4">
//           <p className="text-sm text-gray-600">
//             Are you sure you want to delete this folder?
//           </p>
//         </div>
//         <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50 bg-opacity-80">
//           <button
//             onClick={onCancel}
//             className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200 text-sm"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm shadow-sm"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// DeleteConfirmationPopup.propTypes = {
//   onConfirm: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };

// export default DeleteConfirmationPopup;




/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const DeleteConfirmationPopup = ({ onConfirm, onCancel, folderName }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg w-96 max-h-[80vh] flex flex-col overflow-hidden popup-container">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Confirm Deletion
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600">
            Are you sure you want to delete the folder &quot;{folderName}&quot;?
          </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50 bg-opacity-80">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  folderName: PropTypes.string.isRequired,
};

export default DeleteConfirmationPopup;
