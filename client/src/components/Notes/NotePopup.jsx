// import { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { createNotes, updateNotes } from "../../store/noteSlice.js";
// import { useParams } from "react-router-dom";
// import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";

// const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);

// const NotePopup = ({ isVisible, onClose, isCollapsed, existingNote }) => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.notes);
//   const { folderId } = useParams();
//   const popupRef = useRef(null);

//   const [title, setTitle] = useState(existingNote ? existingNote.title : "");
//   const [content, setContent] = useState(
//     existingNote ? existingNote.content : ""
//   );
//   const [photos, setPhotos] = useState(existingNote ? existingNote.photos : []);
//   const [links, setLinks] = useState(
//     existingNote ? existingNote.links.join(", ") : ""
//   );
//   const [tags, setTags] = useState(
//     existingNote ? existingNote.tags.join(", ") : ""
//   );
//   const [color, setColor] = useState(
//     existingNote ? existingNote.color : "#ffffff"
//   );
//   const [isArchived, setIsArchived] = useState(
//     existingNote ? existingNote.isArchived : false
//   );
//   const [isDeleted, setIsDeleted] = useState(
//     existingNote ? existingNote.isDeleted : false
//   );
//   const [showColorPicker, setShowColorPicker] = useState(false);
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     if (existingNote) {
//       setTitle(existingNote.title);
//       setContent(existingNote.content);
//       setPhotos(existingNote.photos || []);
//       setLinks(existingNote.links.join(", "));
//       setTags(existingNote.tags.join(", "));
//       setColor(existingNote.color || "#ffffff");
//       setIsArchived(existingNote.isArchived || false);
//       setIsDeleted(existingNote.isDeleted || false);
//     } else {
//       setTitle("");
//       setContent("");
//       setPhotos([]);
//       setLinks("");
//       setTags("");
//       setColor("#ffffff");
//       setIsArchived(false);
//       setIsDeleted(false);
//     }
//   }, [existingNote, isVisible]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     if (isVisible) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isVisible, onClose]);

//   const handlePhotoChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setPhotos((prevPhotos) => [...prevPhotos, ...selectedFiles]);
//   };

//   const removePhoto = (index) => {
//     setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const tagsArray = tags
//       .split(",")
//       .map((tag) => tag.trim())
//       .filter((tag) => tag);
//     const linksArray = links
//       .split(",")
//       .map((link) => link.trim())
//       .filter((link) => link);
//     const validFolderId =
//       folderId && isValidObjectId(folderId) ? folderId : undefined;

//     const noteData = {
//       title,
//       content,
//       links: linksArray,
//       tags: tagsArray,
//       color,
//       ...(isArchived && { isArchived }),
//       ...(isDeleted && { isDeleted }),
//       ...(validFolderId && { folder: validFolderId }),
//     };

//     const files = { photos };

//     if (existingNote) {
//       dispatch(updateNotes({ noteId: existingNote._id, noteData, files }));
//     } else {
//       dispatch(createNotes({ noteData, files }));
//     }

//     onClose();
//   };

//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
//   }, [content]);

//   const colorOptions = [
//     { name: "White", value: "#ffffff" },
//     { name: "Red", value: "#f28b82" },
//     { name: "Orange", value: "#fbbc04" },
//     { name: "Yellow", value: "#fff475" },
//     { name: "Green", value: "#ccff90" },
//     { name: "Teal", value: "#a7ffeb" },
//     { name: "Blue", value: "#cbf0f8" },
//     { name: "Dark Blue", value: "#aecbfa" },
//     { name: "Purple", value: "#d7aefb" },
//     { name: "Pink", value: "#fdcfe8" },
//     { name: "Teal", value: "#a7ffeb" },
//     { name: "Blue", value: "#cbf0f8" },
//     { name: "Dark Blue", value: "#aecbfa" },
//     { name: "Purple", value: "#d7aefb" },
//     { name: "Pink", value: "#fdcfe8" },
//   ];

//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center z-50"
//       // style={{ backgroundColor: color }}
//     >
//       <div
//         ref={popupRef}
//         className={`bg-white rounded-lg shadow-xl w-full max-w-2xl h-[95vh] transition-all duration-300 ${
//           isCollapsed ? "ml-16" : "ml-[16.6667%]"
//         }`}
//         style={{ backgroundColor: color }}
//       >
//         <form onSubmit={handleSubmit} className="h-full flex flex-col mt-1">
//           <div className="p-2 flex-grow overflow-y-auto">
//             {/* Close Button */}
//             {/* <button
//               type="button"
//               onClick={onClose}
//               className="absolute top-4 right-14 text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button> */}

//             {/* Image Gallery */}
//             {/* {photos.length > 0 && (
//               <div className="grid grid-cols-3 gap-2 mb-4 max-h-80 overflow-y-auto">
//                 {photos.map((photo, index) => (
//                   <div key={index} className="relative group">
//                     <img
//                       src={
//                         typeof photo === "string"
//                           ? photo
//                           : URL.createObjectURL(photo)
//                       }
//                       alt={`Preview ${index + 1}`}
//                       className="w-full h-40 object-cover rounded"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removePhoto(index)}
//                       className="absolute top-1 right-1 bg-white text-black shadow-lg rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )} */}

//             {photos.length > 0 && (
//               <div
//                 className={`grid gap-2 mb-4 ${
//                   photos.length === 1
//                     ? "grid-cols-1"
//                     : photos.length === 2
//                       ? "grid-cols-2"
//                       : photos.length === 3
//                         ? "grid-cols-3"
//                         : photos.length === 4
//                           ? "grid-cols-2 grid-rows-2"
//                           : photos.length === 5
//                             ? "grid-cols-3 grid-rows-2"
//                             : photos.length === 6
//                               ? "grid-cols-3 grid-rows-2"
//                               : photos.length === 7
//                                 ? "grid-cols-4 grid-rows-2"
//                                 : "grid-cols-4 grid-rows-2"
//                 }`}
//                 style={{
//                   height: "auto",
//                   maxHeight: "auto",
//                   overflow: "hidden",
//                 }}
//               >
//                 {photos.slice(0, 8).map((photo, index) => (
//                   <div key={index} className="relative group">
//                     <img
//                       src={
//                         typeof photo === "string"
//                           ? photo
//                           : URL.createObjectURL(photo)
//                       }
//                       alt={`Preview ${index + 1}`}
//                       className={`object-cover rounded ${
//                         photos.length === 1
//                           ? "w-full h-full"
//                           : photos.length === 2
//                             ? "w-full h-full"
//                             : photos.length === 3
//                               ? "w-full h-full"
//                               : "w-full h-full"
//                       }`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removePhoto(index)}
//                       className="absolute bottom-2 right-2 bg-black opacity-0 text-black shadow-lg rounded-md p-1.5  group-hover:opacity-100 transition-opacity"
//                     >
//                       {/* <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="white"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg> */}
//                       <DeleteIcon color={"white"} size={18} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Title Input */}
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="text-xl px-4 py-2  font-bold bg-transparent focus:outline-none w-full "
//               required
//             />

//             {/* Content Textarea */}
//             <textarea
//               placeholder="Write here...."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full  px-4 py-2 bg-transparent focus:outline-none resize-none text-base"
//               ref={textareaRef}
//               required
//             ></textarea>

//             {/* Tags Input */}
//             {/* <input
//               type="text"
//               placeholder="Add tags..."
//               value={tags}
//               onChange={(e) => setTags(e.target.value)}
//               className="w-full bg-transparent focus:outline-none text-sm text-gray-600 mt-4"
//             /> */}

//             {/* Links Input */}
//             {/* <input
//               type="text"
//               placeholder="Add links..."
//               value={links}
//               onChange={(e) => setLinks(e.target.value)}
//               className="w-full bg-transparent focus:outline-none text-sm text-blue-600 mt-2"
//             /> */}
//           </div>

//           {/* Bottom Toolbar */}
//           <div className=" px-2 py-2 bg-white flex justify-between items-center rounded-b-lg shadow-top-2 shadow-xl">
//             <div className="flex space-x-4">
//               {/* Add Photo */}
//               <label
//                 htmlFor="fileInput"
//                 className="cursor-pointer px-2 py-2 rounded-full bg-white hover:bg-stone-200 text-gray-600 hover:text-gray-800"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//               </label>
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handlePhotoChange}
//                 className="hidden"
//                 id="fileInput"
//               />

//               {/* Color Picker */}
//               <button
//                 type="button"
//                 onClick={() => setShowColorPicker(!showColorPicker)}
//                 className="text-gray-600 hover:text-gray-800 relative px-2 py-2 rounded-full bg-stone-100 hover:bg-stone-200"
//               >
//                 <div
//                   className="w-6 h-6 rounded-full border border-gray-300"
//                   style={{ backgroundColor: color }}
//                 ></div>
//                 {showColorPicker && (
//                   <div className="absolute bottom-12 left-0 w-full max-w-2xl bg-white rounded-lg shadow-xl p-2 z-10">
//                     <div className="grid grid-cols-10 gap-2 w-full ">
//                       {colorOptions.map((colorOption) => (
//                         <button
//                           key={colorOption.value}
//                           type="button"
//                           className={`w-6 h-6 rounded-full border border-gray-300 ${color === colorOption.value ? "ring-2 ring-blue-500 " : ""}`}
//                           style={{ backgroundColor: colorOption.value }}
//                           onClick={() => {
//                             setColor(colorOption.value);
//                             setShowColorPicker(false);
//                           }}
//                           title={colorOption.name}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </button>

//               {/* Archive */}
//               <button
//                 type="button"
//                 onClick={() => setIsArchived(!isArchived)}
//                 className={`${isArchived ? "text-yellow-600" : "text-gray-600"} hover:text-yellow-700`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
//                   />
//                 </svg>
//               </button>

//               {/* Delete */}
//               <button
//                 type="button"
//                 onClick={() => setIsDeleted(!isDeleted)}
//                 className={`${isDeleted ? "text-red-600" : "text-gray-600"} hover:text-red-700`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Submit Button */}
//             <div className="flex items-center space-x-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-stone-200 text-gray-800 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors"
//               >
//                 Close
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
//                 disabled={loading}
//               >
//                 {loading
//                   ? existingNote
//                     ? "Updating..."
//                     : "Creating..."
//                   : existingNote
//                     ? "Update"
//                     : "Done"}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {error && (
//         <div
//           className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
//           role="alert"
//         >
//           <strong className="font-bold">Error!</strong>
//           <span className="block sm:inline">
//             {" "}
//             {error.message || "An error occurred while processing the note."}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// NotePopup.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   isCollapsed: PropTypes.bool.isRequired,
//   existingNote: PropTypes.object,
// };

// NotePopup.defaultProps = {
//   existingNote: null,
// };

// export default NotePopup;

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, updateNotes } from "../../store/noteSlice.js";
import { useParams } from "react-router-dom";
import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";

const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);

const NotePopup = ({ isVisible, onClose, isCollapsed, existingNote }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.notes);
  const { folderId } = useParams();
  const popupRef = useRef(null);

  const [title, setTitle] = useState(existingNote ? existingNote.title : "");
  const [content, setContent] = useState(
    existingNote ? existingNote.content : ""
  );
  const [photos, setPhotos] = useState(existingNote ? existingNote.photos : []);
  const [links, setLinks] = useState(
    existingNote ? existingNote.links.join(", ") : ""
  );
  const [tags, setTags] = useState(
    existingNote ? existingNote.tags.join(", ") : ""
  );
  const [color, setColor] = useState(
    existingNote ? existingNote.color : "#ffffff"
  );
  const [isArchived, setIsArchived] = useState(
    existingNote ? existingNote.isArchived : false
  );
  const [isDeleted, setIsDeleted] = useState(
    existingNote ? existingNote.isDeleted : false
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (existingNote) {
      setTitle(existingNote.title);
      setContent(existingNote.content);
      setPhotos(existingNote.photos || []);
      setLinks(existingNote.links.join(", "));
      setTags(existingNote.tags.join(", "));
      setColor(existingNote.color || "#ffffff");
      setIsArchived(existingNote.isArchived || false);
      setIsDeleted(existingNote.isDeleted || false);
    } else {
      setTitle("");
      setContent("");
      setPhotos([]);
      setLinks("");
      setTags("");
      setColor("#ffffff");
      setIsArchived(false);
      setIsDeleted(false);
    }
  }, [existingNote, isVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const handlePhotoChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setPhotos((prevPhotos) => [...prevPhotos, ...selectedFiles]);
  };

  const removePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    const linksArray = links
      .split(",")
      .map((link) => link.trim())
      .filter((link) => link);
    const validFolderId =
      folderId && isValidObjectId(folderId) ? folderId : undefined;

    const noteData = {
      title,
      content,
      links: linksArray,
      tags: tagsArray,
      color,
      ...(isArchived && { isArchived }),
      ...(isDeleted && { isDeleted }),
      ...(validFolderId && { folder: validFolderId }),
    };

    const files = { photos };

    if (existingNote) {
      dispatch(updateNotes({ noteId: existingNote._id, noteData, files }));
    } else {
      dispatch(createNotes({ noteData, files }));
    }

    // Do not close the popup
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const colorOptions = [
    { name: "White", value: "#ffffff" },
    { name: "Red", value: "#f28b82" },
    { name: "Orange", value: "#fbbc04" },
    { name: "Yellow", value: "#fff475" },
    { name: "Green", value: "#ccff90" },
    { name: "Teal", value: "#a7ffeb" },
    { name: "Blue", value: "#cbf0f8" },
    { name: "Dark Blue", value: "#aecbfa" },
    { name: "Purple", value: "#d7aefb" },
    { name: "Pink", value: "#fdcfe8" },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center z-50">
      <div
        ref={popupRef}
        className={`bg-white rounded-lg shadow-xl w-full max-w-2xl h-[95vh] transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-[16.6667%]"
        }`}
        style={{ backgroundColor: color }}
      >
        <form onSubmit={handleSubmit} className="h-full flex flex-col mt-1">
          <div className="p-2 flex-grow overflow-y-auto">
            {photos.length > 0 && (
              <div
                className={`grid gap-2 mb-4 ${
                  photos.length === 1
                    ? "grid-cols-1"
                    : photos.length === 2
                      ? "grid-cols-2"
                      : photos.length === 3
                        ? "grid-cols-3"
                        : photos.length === 4
                          ? "grid-cols-2 grid-rows-2"
                          : photos.length === 5
                            ? "grid-cols-3 grid-rows-2"
                            : photos.length === 6
                              ? "grid-cols-3 grid-rows-2"
                              : photos.length === 7
                                ? "grid-cols-4 grid-rows-2"
                                : "grid-cols-4 grid-rows-2"
                }`}
                style={{
                  height: "auto",
                  maxHeight: "auto",
                  overflow: "hidden",
                }}
              >
                {photos.slice(0, 8).map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={
                        typeof photo === "string"
                          ? photo
                          : URL.createObjectURL(photo)
                      }
                      alt={`Preview ${index + 1}`}
                      className={`object-cover rounded ${
                        photos.length === 1
                          ? "w-full h-full"
                          : photos.length === 2
                            ? "w-full h-full"
                            : photos.length === 3
                              ? "w-full h-full"
                              : "w-full h-full"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute bottom-2 right-2 bg-black opacity-0 text-black shadow-lg rounded-md p-1.5  group-hover:opacity-100 transition-opacity"
                    >
                      <DeleteIcon color={"white"} size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl px-4 py-2  font-bold bg-transparent focus:outline-none w-full "
            />

            <textarea
              placeholder="Write here...."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full  px-4 py-2 bg-transparent focus:outline-none resize-none text-base"
              ref={textareaRef}
            ></textarea>
          </div>

          <div className=" px-2 py-2 bg-white flex justify-between items-center rounded-b-lg shadow-top-2 shadow-xl">
            <div className="flex space-x-4">
              <label
                htmlFor="fileInput"
                className="cursor-pointer px-2 py-2 rounded-full bg-white hover:bg-stone-200 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="fileInput"
              />

              <button
                type="button"
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="text-gray-600 hover:text-gray-800 relative px-2 py-2 rounded-full bg-stone-100 hover:bg-stone-200"
              >
                <div
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
                {showColorPicker && (
                  <div className="absolute bottom-12 left-0 w-full max-w-2xl bg-white rounded-lg shadow-xl p-2 z-10">
                    <div className="grid grid-cols-10 gap-2 w-full ">
                      {colorOptions.map((colorOption) => (
                        <button
                          key={colorOption.value}
                          type="button"
                          className={`w-6 h-6 rounded-full border border-gray-300 ${color === colorOption.value ? "ring-2 ring-blue-500 " : ""}`}
                          style={{ backgroundColor: colorOption.value }}
                          onClick={() => {
                            setColor(colorOption.value);
                            setShowColorPicker(false);
                          }}
                          title={colorOption.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsArchived(!isArchived)}
                className={`${isArchived ? "text-yellow-600" : "text-gray-600"} hover:text-yellow-700`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setIsDeleted(!isDeleted)}
                className={`${isDeleted ? "text-red-600" : "text-gray-600"} hover:text-red-700`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-stone-200 text-gray-800 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                disabled={loading}
              >
                {loading
                  ? existingNote
                    ? "Updating..."
                    : "Creating..."
                  : existingNote
                    ? "Update"
                    : "Done"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {error && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {" "}
            {error.message || "An error occurred while processing the note."}
          </span>
        </div>
      )}
    </div>
  );
};

NotePopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  existingNote: PropTypes.object,
};

NotePopup.defaultProps = {
  existingNote: null,
};

export default NotePopup;
