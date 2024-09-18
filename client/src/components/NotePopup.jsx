// import { useState } from "react";

// function NotePopup({ isVisible, onClose, isCollapsed }) {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-100 bg-opacity-10 flex justify-center items-center">
//       <div
//         className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 ${
//           isCollapsed ? "ml-16" : "ml-[16.6667%]"
//         }`}
//       >
//         <h2 className="text-xl font-bold mb-4">Create a new note</h2>
//         <textarea
//           rows="4"
//           placeholder="Write your note here..."
//           className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//         ></textarea>
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
//           >
//             Cancel
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
//             Save Note
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NotePopup;

import React, { useState } from "react";

const IconClose = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPlus = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotePopup = ({ isVisible, onClose, isCollapsed }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div
        className={`bg-white bg-opacity-80 rounded-2xl shadow-xl max-w-md w-full transition-all duration-300 overflow-hidden ${
          isCollapsed ? "ml-16" : "ml-[16.6667%]"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-medium bg-transparent focus:outline-none w-full placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <IconClose />
            </button>
          </div>
          <textarea
            rows="6"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent focus:outline-none resize-none text-gray-700 placeholder-gray-400"
          ></textarea>
        </div>
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
          <button className="text-blue-500 hover:text-blue-600 transition-colors">
            <IconPlus />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotePopup;   