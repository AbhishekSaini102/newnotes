/* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import ProfileIcon from "../ProfileIcon.jsx";
// import FolderPopup from "./FolderPopup.jsx";
// import "../../App.css";
// // import CreateFolderIcon from "../CreateFolderIcon.jsx";
// import MenuIcon from "../SvgIcons/MenuIcon.jsx";
// // import MenuIcon2 from "../SvgIcons/MenuIcon2.jsx";
// import FolderIcon from "../SvgIcons/FolderIcon.jsx";
// import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";
// import EditIcon from "../SvgIcons/EditIcon.jsx";
// import SearchIcon from "../SvgIcons/SearchIcon.jsx";
// import DeleteConfirmationPopup from "../DeleteConfirmationPopup.jsx";
// import SidebarRectangleIcon from "../SvgIcons/SidebarRectangleIcon.jsx";
// // import EditIcon2 from "../SvgIcons/EditIcon2.jsx";

// import {
//   fetchAllFolders,
//   createFolder,
//   editFolder,
//   removeFolder,
// } from "../../store/folderSlice.js";

// const SideBar = ({ isCollapsed, toggleCollapse }) => {
//   const dispatch = useDispatch();
//   const { folders, isLoading, error } = useSelector((state) => state.folders);
//   const [showPopup, setShowPopup] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [editingFolder, setEditingFolder] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState(null);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
//   const menuRef = useRef(null);
//   const folderListRef = useRef(null);

//   useEffect(() => {
//     dispatch(fetchAllFolders());
//   }, [dispatch]);

//   const handleAddFolder = (folderName) => {
//     dispatch(createFolder({ name: folderName }));
//     setShowPopup(false);
//   };

//   const toggleMenu = (folderId, event) => {
//     if (activeMenu === folderId) {
//       setActiveMenu(null);
//     } else {
//       setActiveMenu(folderId);
//       const folderElement = event.currentTarget.closest(".folder-item");
//       const folderRect = folderElement.getBoundingClientRect();
//       const folderListRect = folderListRef.current.getBoundingClientRect();

//       // Check if there's enough space below the folder
//       const spaceBelow = folderListRect.bottom - folderRect.bottom;
//       const spaceAbove = folderRect.top - folderListRect.top;

//       if (spaceBelow >= 100 || spaceBelow > spaceAbove) {
//         // Open downwards
//         setMenuPosition({
//           top: folderRect.bottom - folderListRect.top + 120,
//           left: folderRect.right - folderListRect.left - 40, // Adjust this value as needed
//         });
//       } else {
//         // Open upwards
//         setMenuPosition({
//           top: folderRect.top - folderListRect.top + 30, // Height of the menu, adjust as needed
//           left: folderRect.right - folderListRect.left - 30, // Adjust this value as needed
//         });
//       }
//     }
//   };

//   const handleEditFolder = (folder) => {
//     setEditingFolder(folder);
//     setShowPopup(true);
//     setActiveMenu(null);
//   };

//   const handleUpdateFolder = (updatedName) => {
//     dispatch(
//       editFolder({ id: editingFolder._id, folderData: { name: updatedName } })
//     );
//     setShowPopup(false);
//     setEditingFolder(null);
//   };

//   const handleDeleteFolder = (folder) => {
//     setFolderToDelete(folder);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDeleteFolder = () => {
//     dispatch(removeFolder(folderToDelete._id));
//     setShowDeleteConfirmation(false);
//     setFolderToDelete(null);
//     setActiveMenu(null);
//   };

//   const cancelDeleteFolder = () => {
//     setShowDeleteConfirmation(false);
//     setFolderToDelete(null);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveMenu(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   return (
//     <div
//       className={`fixed left-0 top-0 h-full ${isCollapsed ? " flex item-center w-auto" : "w-custom-width"}   bg-newNote-sidebar bg-transparent text-gray-800 flex flex-col  transition-all duration-300`}
//     >
//       {/* Collapsed Sidebar */}
//       {isCollapsed && (
//         <div className="flex flex-col items-center flex-1 space-y-2 mt-2">
//           {/* Logo */}
//           <div className="flex items-center justify-center space-x-2 ml-1">
//             {/* <button
//               onClick={toggleCollapse}
//               className=" hover:bg-stone-300 rounded-md"
//             >
//               <img
//                 className="h-7 w-7"
//                 src="/newNotes.png"
//                 alt="newNotes Logo"
//               />

//             </button> */}
//             <button
//               onClick={toggleCollapse}
//               className="p-1 hover:bg-stone-200 rounded"
//             >
//               <SidebarRectangleIcon color={"#777777"} size={26} />
//             </button>

//             {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="p-1 hover:bg-stone-200 rounded mb-0.5"
//               >
//                 <EditIcon color={"#777777"} size={25.5} />
//               </button>
//             )}
//           </div>

//           {/* Search Icon */}
//           <div className="flex items-center justify-center ">
//             <span className="cursor-pointer p-2 hover:bg-stone-200 rounded-lg">
//               <SearchIcon color={"#777777"} size={24} />
//             </span>
//           </div>

//           {/* Folder Icon */}
//           {/* <div className="flex items-center justify-center my-1.5">
//             <button
//               onClick={() => setShowPopup(true)}
//               className="p-1 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-md"
//             >
//               <CreateFolderIcon size={24} />
//             </button>
//           </div> */}

//           {isAuthenticated && (
//             <button
//               onClick={() => setShowPopup(true)}
//               className="flex items-center justify-center p-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//             >
//               <EditIcon color={"#777777"} size={25} />
//             </button>
//           )}

//           {/* Folder list */}
//           <div className="flex-1 overflow-y-auto scrollbar-thin max-h-[calc(90vh-148px)] p-1">
//             {folders && folders.length > 0
//               ? folders.map((folder) => (
//                   <div
//                     key={folder._id}
//                     className="relative flex items-center justify-center p-2 bg-stone-100 hover:bg-red-200 rounded-md transition-all"
//                   >
//                     <FolderIcon size={20} stroke="black" />
//                   </div>
//                 ))
//               : null}
//           </div>
//         </div>
//       )}
//       {/* Expanded Sidebar */}
//       {!isCollapsed && (
//         <div className="flex flex-col flex-1 p-2 ">
//           {/* Logo and App Name */}
//           <div className="flex items-center justify-between  ">
//             {/* <div className="flex items-center">
//               <img
//                 className="h-7 w-7"
//                 src="/newNotes.png"
//                 alt="newNotes Logo"
//               />
//               <span className="text-black font-bold text-lg hover:text-black ml-0.5">
//                 NewNotes
//               </span>
//             </div> */}

//             <button
//               onClick={toggleCollapse}
//               className=" hover:bg-stone-300 rounded"
//             >
//               <SidebarRectangleIcon color={"black"} size={26} />
//             </button>

//             {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="flex items-center justify-center py-1 px-1 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//               >
//                 <EditIcon color={"black"} size={22} />
//               </button>
//             )}
//           </div>

//           {/* Search Box */}
//           {isAuthenticated && (
//             <div className="mb-2 pr-1 mt-2">
//               <input
//                 type="text"
//                 placeholder="Search your notes.."
//                 className="w-full h-9 text-md px-3 py-2 border border-custom-stone-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-custom-stone-light"
//               />
//             </div>
//           )}

//           {/* Folders Header */}
//           <div className="flex flex-row justify-between w-full p-1">
//             <div className="w-full text-md text-custom-stone font-semibold">
//               Folders
//             </div>
//             {/* {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="flex items-center justify-center py-1 px-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//               >
//                 <CreateFolderIcon size={20} />
//               </button>
//             )} */}
//           </div>

//           {/* Folder list */}
//           <div
//             ref={folderListRef}
//             className="flex-1 overflow-y-auto max-h-[calc(92vh-128px)] relative"
//           >
//             <Link>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//               <div>home</div>
//             </Link>
//             {folders && folders.length > 0 ? (
//               folders.map((folder) => (
//                 <div
//                   key={folder._id}
//                   className="folder-item relative flex items-center justify-between bg-newNotes-sidebar px-1 py-2 hover:bg-gray-200 transition-all rounded-md w-12/12 space-x-1"
//                 >
//                   <div className="flex align-middle w-1/12 pt-0.5  ">
//                     <FolderIcon size={16} />
//                   </div>
//                   <div className="flex align-middle w-11/12 truncate pr-0.5">
//                     {/* <FolderIcon size={16} /> */}
//                     <span className=" truncate text-sm font-medium ">
//                       {folder.name}
//                     </span>
//                   </div>
//                   <div className="flex align-middle w-1/12 ">
//                     <button
//                       onClick={(e) => toggleMenu(folder._id, e)}
//                       className=" rounded-3xl w-1/12"
//                     >
//                       <MenuIcon color={"#777777"} hoverColor="#000000" />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No folders available</p>
//             )}

//             <Link>
//               <div>home</div>
//               <div>Search</div>
//             </Link>

//             {/* Popup Menu */}
//             {activeMenu !== null && (
//               <div
//                 ref={menuRef}
//                 style={{
//                   position: "fixed",
//                   top: `${menuPosition.top}px`,
//                   left: `${menuPosition.left}px`,
//                 }}
//                 className="rounded-lg bg-newnotes-sidebar-light border border-gray-200 shadow-lg"
//               >
//                 <button
//                   onClick={() =>
//                     handleEditFolder(folders.find((f) => f._id === activeMenu))
//                   }
//                   className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-t-lg"
//                 >
//                   <EditIcon color={"blue"} />
//                   <span className="ml-2">Edit</span>
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleDeleteFolder(
//                       folders.find((f) => f._id === activeMenu)
//                     )
//                   }
//                   className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-b-lg"
//                 >
//                   <DeleteIcon color={"red"} />
//                   <span className="ml-2">Delete</span>
//                 </button>
//               </div>
//             )}
//           </div>

//         </div>
//       )}
//       {/* Fixed Profile Icon at Bottom */}
//       <div
//         className={`fixed bottom-0 ${isCollapsed ? "w-auto ml-3" : "w-custom-width-second px-1.5 py-1"}  bg-newNote-sidebar`}
//       >
//         {isAuthenticated ? (
//           <ProfileIcon isCollapsed={isCollapsed} />
//         ) : (
//           <div className="space-y-2">
//             <Link
//               to="/login"
//               className="block w-10/12 px-2 py-1 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="block w-10/12 px-2 py-1 text-center bg-black text-white rounded-md hover:bg-zinc-600 transition duration-150"
//             >
//               Signup
//             </Link>
//           </div>
//         )}
//       </div>

//       {/* Folder Popup */}
//       {showPopup && (
//         <FolderPopup
//           onClose={() => {
//             setShowPopup(false);
//             setEditingFolder(null);
//           }}
//           onCreateFolder={editingFolder ? handleUpdateFolder : handleAddFolder}
//           initialValue={editingFolder}
//           isEditing={!!editingFolder}
//         />
//       )}

//       {/* Delete Confirmation Popup */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onConfirm={confirmDeleteFolder}
//           onCancel={cancelDeleteFolder}
//           folderName={folderToDelete ? folderToDelete.name : ""}
//         />
//       )}
//     </div>
//   );
// };

// SideBar.propTypes = {
//   isCollapsed: PropTypes.bool.isRequired,
//   toggleCollapse: PropTypes.func.isRequired,
// };

// export default SideBar;

// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import ProfileIcon from "../ProfileIcon.jsx";
// import FolderPopup from "./FolderPopup.jsx";
// import "../../App.css";
// // import CreateFolderIcon from "../CreateFolderIcon.jsx";
// import MenuIcon from "../SvgIcons/MenuIcon.jsx";
// // import MenuIcon2 from "../SvgIcons/MenuIcon2.jsx";
// import FolderIcon from "../SvgIcons/FolderIcon.jsx";
// import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";
// import EditIcon from "../SvgIcons/EditIcon.jsx";
// import SearchIcon from "../SvgIcons/SearchIcon.jsx";
// import DeleteConfirmationPopup from "../DeleteConfirmationPopup.jsx";
// import SidebarRectangleIcon from "../SvgIcons/SidebarRectangleIcon.jsx";
// // import EditIcon2 from "../SvgIcons/EditIcon2.jsx";

// import {
//   fetchAllFolders,
//   createFolder,
//   editFolder,
//   removeFolder,
// } from "../../store/folderSlice.js";
// import HomeIcon from "../SvgIcons/HomeIcon.jsx";
// import ArchivedIcon from "../SvgIcons/ArchivedIcon.jsx";

// const SideBar = ({ isCollapsed, toggleCollapse }) => {
//   const dispatch = useDispatch();
//   const { folders, isLoading, error } = useSelector((state) => state.folders);
//   const [showPopup, setShowPopup] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [editingFolder, setEditingFolder] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState(null);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
//   const menuRef = useRef(null);
//   const folderListRef = useRef(null);

//   useEffect(() => {
//     dispatch(fetchAllFolders());
//   }, [dispatch]);

//   const handleAddFolder = (folderName) => {
//     dispatch(createFolder({ name: folderName }));
//     setShowPopup(false);
//   };

//   const toggleMenu = (folderId, event) => {
//     if (activeMenu === folderId) {
//       setActiveMenu(null);
//     } else {
//       setActiveMenu(folderId);
//       const folderElement = event.currentTarget.closest(".folder-item");
//       const folderRect = folderElement.getBoundingClientRect();
//       const folderListRect = folderListRef.current.getBoundingClientRect();

//       // Check if there's enough space below the folder
//       const spaceBelow = folderListRect.bottom - folderRect.bottom;
//       const spaceAbove = folderRect.top - folderListRect.top;

//       if (spaceBelow >= 100 || spaceBelow > spaceAbove) {
//         // Open downwards
//         setMenuPosition({
//           top: folderRect.bottom - folderListRect.top + 65,
//           left: folderRect.right - folderListRect.left - 40, // Adjust this value as needed
//         });
//       } else {
//         // Open upwards
//         setMenuPosition({
//           top: folderRect.top - folderListRect.top + 0, // Height of the menu, adjust as needed
//           left: folderRect.right - folderListRect.left - 30, // Adjust this value as needed
//         });
//       }
//     }
//   };

//   const handleEditFolder = (folder) => {
//     setEditingFolder(folder);
//     setShowPopup(true);
//     setActiveMenu(null);
//   };

//   const handleUpdateFolder = (updatedName) => {
//     dispatch(
//       editFolder({ id: editingFolder._id, folderData: { name: updatedName } })
//     );
//     setShowPopup(false);
//     setEditingFolder(null);
//   };

//   const handleDeleteFolder = (folder) => {
//     setFolderToDelete(folder);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDeleteFolder = () => {
//     dispatch(removeFolder(folderToDelete._id));
//     setShowDeleteConfirmation(false);
//     setFolderToDelete(null);
//     setActiveMenu(null);
//   };

//   const cancelDeleteFolder = () => {
//     setShowDeleteConfirmation(false);
//     setFolderToDelete(null);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveMenu(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   return (
//     <div
//       className={`fixed left-0 top-0 h-full ${isCollapsed ? " flex item-center w-auto bg-white" : "w-custom-width"}  bg-newNote-sidebar shadow-sm text-gray-800 flex flex-col  transition-all duration-300`}
//     >
//       {/* Collapsed Sidebar */}
//       {isCollapsed && (
//         <div className="flex flex-col items-center flex-1 space-y-2 mt-2">
//           {/* Logo */}
//           <div className="flex items-center justify-center space-x-2 ml-2">
//             {/* <button
//               onClick={toggleCollapse}
//               className=" hover:bg-stone-300 rounded-md"
//             >
//               <img
//                 className="h-7 w-7"
//                 src="/newNotes.png"
//                 alt="newNotes Logo"
//               />

//             </button> */}
//             <button
//               onClick={toggleCollapse}
//               className="p-1 hover:bg-stone-200 rounded"
//             >
//               <SidebarRectangleIcon color={"#777777"} size={24} />
//             </button>

//             {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="p-1 hover:bg-stone-200 rounded mb-0.5"
//               >
//                 <EditIcon color={"#777777"} size={22} />
//               </button>
//             )}
//           </div>

//           {/* Search Icon */}
//           {/* <div className="flex items-center justify-center ">
//             <span className="cursor-pointer p-2 hover:bg-stone-200 rounded-lg">
//               <SearchIcon color={"#777777"} size={24} />
//             </span>
//           </div> */}

//           {/* Folder Icon */}
//           {/* <div className="flex items-center justify-center my-1.5">
//             <button
//               onClick={() => setShowPopup(true)}
//               className="p-1 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-md"
//             >
//               <CreateFolderIcon size={24} />
//             </button>
//           </div> */}

//           {/* {isAuthenticated && (
//             <button
//               onClick={() => setShowPopup(true)}
//               className="flex items-center justify-center p-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//             >
//               <EditIcon color={"#777777"} size={25} />
//             </button>
//           )} */}

//           {/* Folder list */}
//           {/* <div className="flex-1 overflow-y-auto scrollbar-thin max-h-[calc(90vh-148px)] p-1">
//             {folders && folders.length > 0
//               ? folders.map((folder) => (
//                   <Link
//                     to={`/folder/${folder._id}`}
//                     key={folder._id}
//                     className="relative flex items-center justify-center p-2 bg-stone-100 hover:bg-red-200 rounded-md transition-all"
//                   >
//                     <FolderIcon size={20} stroke="black" />
//                   </Link>
//                 ))
//               : null}
//           </div> */}
//         </div>
//       )}
//       {/* Expanded Sidebar */}
//       {!isCollapsed && (
//         <div className="flex flex-col flex-1 ">
//           {/* Logo and App Name */}
//           <div className="flex items-center justify-between p-2 ">
//             {/* <div className="flex items-center">
//               <img
//                 className="h-7 w-7"
//                 src="/newNotes.png"
//                 alt="newNotes Logo"
//               />
//               <span className="text-black font-bold text-lg hover:text-black ml-0.5">
//                 NewNotes
//               </span>
//             </div> */}

//             <button
//               onClick={toggleCollapse}
//               className=" p-1 hover:bg-stone-200 rounded"
//             >
//               <SidebarRectangleIcon color={"#666666"} size={24} />
//             </button>

//             {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="flex items-center justify-center p-1 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//               >
//                 <EditIcon color={"#666666"} size={22} />
//               </button>
//             )}
//           </div>

//           {/* Search Box */}
//           {/* {isAuthenticated && (
//             <div className="mb-2 pr-1 mt-2">
//               <input
//                 type="text"
//                 placeholder="Search your notes.."
//                 className="w-full h-9 text-md px-3 py-2 border border-custom-stone-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-custom-stone-light"
//               />
//             </div>
//           )} */}

//           {/* Folders Header */}
//           <div className="flex flex-row justify-between w-full px-3 py-1">
//             <div className="w-full text-md text-custom-stone font-semibold">
//               Folders
//             </div>
//             {/* {isAuthenticated && (
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="flex items-center justify-center py-1 px-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
//               >
//                 <CreateFolderIcon size={20} />
//               </button>
//             )} */}
//           </div>

//           {/* Folder list */}
//           <div
//             ref={folderListRef}
//             className="flex-1 overflow-y-auto max-h-[calc(106vh-128px)] relative  "
//           >
//             <Link>
//               <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
//                 <div>
//                   <HomeIcon color={"black"} size={18} />
//                 </div>
//                 <div>Home</div>
//               </div>
//             </Link>
//             <Link>
//               <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
//                 <div>
//                   <SearchIcon color={"black"} size={15} />
//                 </div>
//                 <div>Search</div>
//               </div>
//             </Link>

//             {folders && folders.length > 0 ? (
//               folders.map((folder) => (
//                 <Link
//                   to={`/folder/${folder.slug}`}
//                   key={folder._id}
//                   className="folder-item relative flex items-center justify-between bg-newNotes-sidebar  py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 "
//                 >
//                   <div className="flex align-middle w-1/12  ">
//                     <FolderIcon size={16} />
//                   </div>
//                   <div className="flex align-middle w-11/12 truncate ">
//                     {/* <FolderIcon size={16} /> */}
//                     <span className=" truncate text-sm font-medium  ">
//                       {folder.name}
//                     </span>
//                   </div>
//                   <div className="justify-center w-1/12 menu-button hidden rounded-sm ">
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         toggleMenu(folder._id, e);
//                       }}
//                       className=" ml-3 px- py-0.5 shadow-2xl"
//                     >
//                       <MenuIcon color={"black"} hoverColor="#000000" />
//                     </button>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <p>No folders available</p>
//             )}

//             <Link>
//               <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
//                 <div>
//                   <ArchivedIcon color={"black"} size={15} />
//                 </div>
//                 <div>Archive</div>
//               </div>
//             </Link>
//             <Link>
//               <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
//                 <div>
//                   <DeleteIcon color={"black"} size={15} />
//                 </div>
//                 <div>Trash</div>
//               </div>
//             </Link>

//             {/* Popup Menu */}
//             {activeMenu !== null && (
//               <div
//                 ref={menuRef}
//                 style={{
//                   position: "fixed",
//                   top: `${menuPosition.top}px`,
//                   left: `${menuPosition.left}px`,
//                 }}
//                 className="rounded-lg bg-newnotes-sidebar-light border border-gray-200 shadow-lg"
//               >
//                 <button
//                   onClick={() =>
//                     handleEditFolder(folders.find((f) => f._id === activeMenu))
//                   }
//                   className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-t-lg"
//                 >
//                   <EditIcon color={"blue"} />
//                   <span className="ml-2">Edit</span>
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleDeleteFolder(
//                       folders.find((f) => f._id === activeMenu)
//                     )
//                   }
//                   className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-b-lg"
//                 >
//                   <DeleteIcon color={"red"} />
//                   <span className="ml-2">Delete</span>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       {/* Fixed Profile Icon at Bottom */}
//       {/* <div
//         className={`fixed bottom-0 ${isCollapsed ? "w-auto ml-3" : "w-custom-width-second px-1.5 py-1"}  bg-newNote-sidebar`}
//       >
//         {isAuthenticated ? (
//           <ProfileIcon isCollapsed={isCollapsed} />
//         ) : (
//           <div className="space-y-2">
//             <Link
//               to="/login"
//               className="block w-10/12 px-2 py-1 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="block w-10/12 px-2 py-1 text-center bg-black text-white rounded-md hover:bg-zinc-600 transition duration-150"
//             >
//               Signup
//             </Link>
//           </div>
//         )}
//       </div> */}

//       {/* Folder Popup */}
//       {showPopup && (
//         <FolderPopup
//           onClose={() => {
//             setShowPopup(false);
//             setEditingFolder(null);
//           }}
//           onCreateFolder={editingFolder ? handleUpdateFolder : handleAddFolder}
//           initialValue={editingFolder}
//           isEditing={!!editingFolder}
//         />
//       )}

//       {/* Delete Confirmation Popup */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationPopup
//           onConfirm={confirmDeleteFolder}
//           onCancel={cancelDeleteFolder}
//           folderName={folderToDelete ? folderToDelete.name : ""}
//         />
//       )}
//     </div>
//   );
// };

// SideBar.propTypes = {
//   isCollapsed: PropTypes.bool.isRequired,
//   toggleCollapse: PropTypes.func.isRequired,
// };

// export default SideBar;

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon.jsx";
import FolderPopup from "./FolderPopup.jsx";
import "../../App.css";
// import CreateFolderIcon from "../CreateFolderIcon.jsx";
import MenuIcon from "../SvgIcons/MenuIcon.jsx";
// import MenuIcon2 from "../SvgIcons/MenuIcon2.jsx";
import FolderIcon from "../SvgIcons/FolderIcon.jsx";
import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";
import EditIcon from "../SvgIcons/EditIcon.jsx";
import SearchIcon from "../SvgIcons/SearchIcon.jsx";
import DeleteConfirmationPopup from "../DeleteConfirmationPopup.jsx";
import SidebarRectangleIcon from "../SvgIcons/SidebarRectangleIcon.jsx";
// import EditIcon2 from "../SvgIcons/EditIcon2.jsx";

import {
  fetchAllFolders,
  createFolder,
  editFolder,
  removeFolder,
} from "../../store/folderSlice.js";
import HomeIcon from "../SvgIcons/HomeIcon.jsx";
import ArchivedIcon from "../SvgIcons/ArchivedIcon.jsx";

const SideBar = ({ isCollapsed, toggleCollapse }) => {
  const dispatch = useDispatch();
  const { folders, isLoading, error } = useSelector((state) => state.folders);
  const [showPopup, setShowPopup] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingFolder, setEditingFolder] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);
  const [sortMethod, setSortMethod] = useState("recent"); // State for sorting method
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const folderListRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAllFolders());
  }, [dispatch]);

  const handleAddFolder = (folderName) => {
    dispatch(createFolder({ name: folderName }));
    setShowPopup(false);
  };

  const toggleMenu = (folderId, event) => {
    if (activeMenu === folderId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(folderId);
      const folderElement = event.currentTarget.closest(".folder-item");
      const folderRect = folderElement.getBoundingClientRect();
      const folderListRect = folderListRef.current.getBoundingClientRect();

      // Check if there's enough space below the folder
      const spaceBelow = folderListRect.bottom - folderRect.bottom;
      const spaceAbove = folderRect.top - folderListRect.top;

      if (spaceBelow >= 100 || spaceBelow > spaceAbove) {
        // Open downwards
        setMenuPosition({
          top: folderRect.bottom - folderListRect.top + 180,
          left: folderRect.right - folderListRect.left - 40, // Adjust this value as needed
        });
      } else {
        // Open upwards
        setMenuPosition({
          top: folderRect.top - folderListRect.top + 110, // Height of the menu, adjust as needed
          left: folderRect.right - folderListRect.left - 30, // Adjust this value as needed
        });
      }
    }
  };

  const handleEditFolder = (folder) => {
    setEditingFolder(folder);
    setShowPopup(true);
    setActiveMenu(null);
  };

  const handleUpdateFolder = (updatedName) => {
    dispatch(
      editFolder({ id: editingFolder._id, folderData: { name: updatedName } })
    );
    setShowPopup(false);
    setEditingFolder(null);
  };

  const handleDeleteFolder = (folder) => {
    setFolderToDelete(folder);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteFolder = () => {
    dispatch(removeFolder(folderToDelete._id));
    setShowDeleteConfirmation(false);
    setFolderToDelete(null);
    setActiveMenu(null);
  };

  const cancelDeleteFolder = () => {
    setShowDeleteConfirmation(false);
    setFolderToDelete(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Sorting functions
  const sortFolders = (folders) => {
    switch (sortMethod) {
      case "recent":
        return [...folders].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return [...folders].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "atoz":
        return [...folders].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return folders;
    }
  };

  const sortedFolders = sortFolders(folders);

  return (
    <div
      className={`fixed left-0 top-0 h-full ${isCollapsed ? " flex item-center w-auto bg-white" : "w-custom-width"}  bg-newNote-sidebar shadow-sm text-gray-800 flex flex-col  transition-all duration-300`}
    >
      {/* Collapsed Sidebar */}
      {isCollapsed && (
        <div className="flex flex-col items-center flex-1 space-y-2 mt-2">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 ml-2">
            {/* <button
              onClick={toggleCollapse}
              className=" hover:bg-stone-300 rounded-md"
            >
              <img
                className="h-7 w-7"
                src="/newNotes.png"
                alt="newNotes Logo"
              />

            </button> */}
            <button
              onClick={toggleCollapse}
              className="p-1 hover:bg-stone-200 rounded"
            >
              <SidebarRectangleIcon color={"#777777"} size={24} />
            </button>

            {isAuthenticated && (
              <button
                onClick={() => setShowPopup(true)}
                className="p-1 hover:bg-stone-200 rounded mb-0.5"
              >
                <EditIcon color={"#777777"} size={22} />
              </button>
            )}
          </div>

          {/* Search Icon */}
          {/* <div className="flex items-center justify-center ">
            <span className="cursor-pointer p-2 hover:bg-stone-200 rounded-lg">
              <SearchIcon color={"#777777"} size={24} />
            </span>
          </div> */}

          {/* Folder Icon */}
          {/* <div className="flex items-center justify-center my-1.5">
            <button
              onClick={() => setShowPopup(true)}
              className="p-1 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-md"
            >
              <CreateFolderIcon size={24} />
            </button>
          </div> */}

          {/* {isAuthenticated && (
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center justify-center p-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
            >
              <EditIcon color={"#777777"} size={25} />
            </button>
          )} */}

          {/* Folder list */}
          {/* <div className="flex-1 overflow-y-auto scrollbar-thin max-h-[calc(90vh-148px)] p-1">
            {folders && folders.length > 0
              ? folders.map((folder) => (
                  <Link
                    to={`/folder/${folder._id}`}
                    key={folder._id}
                    className="relative flex items-center justify-center p-2 bg-stone-100 hover:bg-red-200 rounded-md transition-all"
                  >
                    <FolderIcon size={20} stroke="black" />
                  </Link>
                ))
              : null}
          </div> */}
        </div>
      )}
      {/* Expanded Sidebar */}
      {!isCollapsed && (
        <div className="flex flex-col flex-1 ">
          {/* Logo and App Name */}
          <div className="flex items-center justify-between p-2 ">
            {/* <div className="flex items-center">
              <img
                className="h-7 w-7"
                src="/newNotes.png"
                alt="newNotes Logo"
              />
              <span className="text-black font-bold text-lg hover:text-black ml-0.5">
                NewNotes
              </span>
            </div> */}

            <button
              onClick={toggleCollapse}
              className=" p-1 hover:bg-stone-200 rounded"
            >
              <SidebarRectangleIcon color={"#666666"} size={24} />
            </button>

            {isAuthenticated && (
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center justify-center p-1 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
              >
                <EditIcon color={"#666666"} size={22} />
              </button>
            )}
          </div>

          {/* Search Box */}
          {/* {isAuthenticated && (
            <div className="mb-2 pr-1 mt-2">
              <input
                type="text"
                placeholder="Search your notes.."
                className="w-full h-9 text-md px-3 py-2 border border-custom-stone-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-custom-stone-light"
              />
            </div>
          )} */}

          <div>
            <Link>
              <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
                <div>
                  <HomeIcon color={"black"} size={18} />
                </div>
                <div>Home</div>
              </div>
            </Link>
            <Link>
              <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
                <div>
                  <SearchIcon color={"black"} size={15} />
                </div>
                <div>Search</div>
              </div>
            </Link>
          </div>

          {/* Folders Header */}
          <div className="flex flex-row justify-between w-full px-3 py-1">
            <div className="w-full text-md text-custom-stone font-semibold">
              Folders
            </div>
            {/* {isAuthenticated && (
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center justify-center py-1 px-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
              >
                <CreateFolderIcon size={20} />
              </button>
            )} */}
          </div>

          {/* Sorting Buttons */}
          <div className="flex flex-row justify-between w-full px-3 py-1 text-sm  ">
            <button
              onClick={() => setSortMethod("recent")}
              className="px-2 py-1 bg-stone-200 text-gray-800 font-semibold rounded-md hover:bg-stone-300 transition-all "
            >
              Recent
            </button>
            <button
              onClick={() => setSortMethod("oldest")}
              className="px-2 py-1 bg-stone-200 text-gray-800 font-semibold rounded-md hover:bg-stone-300 transition-all"
            >
              Oldest
            </button>
            <button
              onClick={() => setSortMethod("atoz")}
              className="px-2 py-1 bg-stone-200 text-gray-800 font-semibold rounded-md hover:bg-stone-300 transition-all"
            >
              A to Z
            </button>
          </div>

          {/* Folder list */}
          <div
            ref={folderListRef}
            // className="flex-1 overflow-y-auto max-h-[calc(86vh-128px)]  relative pb-16"
            className={`flex-1
            overflow-y-auto
            relative
            pb-0
           
            ${isCollapsed ? "max-h-[calc(86vh-100px)]" : "max-h-[calc(102vh-250px)]"}
            sm:max-h-${isCollapsed ? "[calc(80vh-80px)]" : "[calc(80vh-100px)]"}
            md:max-h-${isCollapsed ? "[calc(90vh-110px)]" : "[calc(90vh-120px)]"}
            lg:max-h-${isCollapsed ? "[calc(86vh-120px)]" : "[calc(86vh-128px)]"}
            xl:max-h-${isCollapsed ? "[calc(90vh-140px)]" : "[calc(90vh-140px)]"}
            2xl:max-h-${isCollapsed ? "[calc(92vh-150px)]" : "[calc(92vh-160px)]"}
            3xl:max-h-${isCollapsed ? "[calc(94vh-160px)]" : "[calc(94vh-170px)]"}
            4xl:max-h-${isCollapsed ? "[calc(96vh-170px)]" : "[calc(96vh-180px)]"}`}
          >
            {sortedFolders && sortedFolders.length > 0 ? (
              sortedFolders.map((folder) => (
                <Link
                  // to={`/folders/${folder.user}/${folder.slug}`}
                  to={`/folder/${folder._id}`}
                  key={folder._id}
                  className="folder-item relative flex items-center justify-between bg-newNotes-sidebar  py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 "
                >
                  {/* <div className="flex align-middle w-1/12  ">
                    <FolderIcon size={16} />
                  </div> */}
                  <div className="flex align-middle w-11/12 truncate ">
                    {/* <FolderIcon size={16} /> */}
                    <span className=" truncate text-sm font-medium  ">
                      {folder.name}
                    </span>
                  </div>
                  <div className="justify-center w-1/12 menu-button hidden rounded-sm ">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu(folder._id, e);
                      }}
                      className=" ml-3 px- py-0.5 shadow-2xl"
                    >
                      <MenuIcon color={"black"} hoverColor="#000000" />
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <p className="flex text-center justify-center p-2">
                No folders available
              </p>
            )}

            {/* Popup Menu */}
            {activeMenu !== null && (
              <div
                ref={menuRef}
                style={{
                  position: "fixed",
                  top: `${menuPosition.top}px`,
                  left: `${menuPosition.left}px`,
                }}
                className="rounded-lg bg-white border border-gray-200 shadow-lg"
              >
                <button
                  onClick={() =>
                    handleEditFolder(folders.find((f) => f._id === activeMenu))
                  }
                  className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-200 rounded-t-lg border-b border-gray-300"
                >
                  <EditIcon color={"gray"} size={16} />
                  <span className="ml-2">Edit</span>
                </button>
                <button
                  onClick={() =>
                    handleDeleteFolder(
                      folders.find((f) => f._id === activeMenu)
                    )
                  }
                  className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-200 rounded-b-lg "
                >
                  <DeleteIcon color={"gray"} size={16} />
                  <span className="ml-2">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Fixed Profile Icon at Bottom */}
      <div className={`fixed bottom-0 bg-newNote-sidebar w-custom-width `}>
        {isAuthenticated ? (
          !isCollapsed ? (
            // <ProfileIcon isCollapsed={isCollapsed} />
            <div className="flex flex-row items-center justify-between border-t border-gray-300">
              <Link>
                <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
                  <div>
                    <ArchivedIcon color={"black"} size={15} />
                  </div>
                  <div>Archive</div>
                </div>
              </Link>
              <Link>
                <div className="folder-item relative flex flex-row items-center justify-start bg-newNotes-sidebar py-2 hover:bg-stone-200 transition-all  w-12/12 space-x-1 px-3 truncate text-sm font-medium">
                  <div>
                    <DeleteIcon color={"black"} size={15} />
                  </div>
                  <div>Trash</div>
                </div>
              </Link>
            </div>
          ) : null
        ) : (
          <div className="space-y-2">
            <Link
              to="/login"
              className="block w-10/12 px-2 py-1 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-10/12 px-2 py-1 text-center bg-black text-white rounded-md hover:bg-zinc-600 transition duration-150"
            >
              Signup
            </Link>
          </div>
        )}
      </div>

      {/* Folder Popup */}
      {showPopup && (
        <FolderPopup
          onClose={() => {
            setShowPopup(false);
            setEditingFolder(null);
          }}
          onCreateFolder={editingFolder ? handleUpdateFolder : handleAddFolder}
          initialValue={editingFolder}
          isEditing={!!editingFolder}
        />
      )}

      {/* Delete Confirmation Popup */}
      {showDeleteConfirmation && (
        <DeleteConfirmationPopup
          onConfirm={confirmDeleteFolder}
          onCancel={cancelDeleteFolder}
          folderName={folderToDelete ? folderToDelete.name : ""}
        />
      )}
    </div>
  );
};

SideBar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleCollapse: PropTypes.func.isRequired,
};

export default SideBar;
