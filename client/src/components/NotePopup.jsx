/* eslint-disable no-unused-vars */
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
    <div className="fixed inset-0 bg-gray-100 bg-opacity-10 flex justify-center items-center">
      {/* backdrop-blur-sm */}
      <div
        className={`bg-white bg-opacity-80 rounded-2xl shadow-xl max-w-3xl  w-full transition-all duration-300 overflow-hidden ${
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





// import React, { useState } from "react";

// const IconClose = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const IconPlus = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const NotePopup = ({ isVisible, onClose, isCollapsed }) => {
//   const [title, setTitle] = useState("My Travel Note");
//   const [content, setContent] = useState("This is a note about my recent trip.");
//   const [tags, setTags] = useState(["Travel"]);
//   const [color, setColor] = useState("#FF5733");
//   const [isArchived, setIsArchived] = useState(true);
  
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-100 bg-opacity-10 flex justify-center items-center">
//       <div className={`bg-white bg-opacity-80 rounded-2xl shadow-xl max-w-3xl w-full transition-all duration-300 overflow-hidden ${isCollapsed ? "ml-16" : "ml-[16.6667%]"}`}>
//         {/* Header */}
//         <div className="p-6 space-y-4">
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="text-xl font-medium bg-transparent focus:outline-none w-full placeholder-gray-400"
//             />
//             <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
//               <IconClose />
//             </button>
//           </div>
//           {/* Content Area */}
//           <textarea
//             rows="6"
//             placeholder="Write your note..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full bg-transparent focus:outline-none resize-none text-gray-700 placeholder-gray-400"
//           ></textarea>
//           {/* Tag and Color Section */}
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="text-gray-600">Tags:</label>
//               <input
//                 type="text"
//                 value={tags.join(", ")}
//                 className="w-full bg-transparent focus:outline-none text-gray-700"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label className="text-gray-600">Color:</label>
//               <input
//                 type="color"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 className="w-10 h-10"
//               />
//             </div>
//           </div>
//         </div>
//         {/* Footer */}
//         <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
//           <button className="text-blue-500 hover:text-blue-600 transition-colors">
//             <IconPlus />
//           </button>
//           <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
//             Done
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotePopup;


