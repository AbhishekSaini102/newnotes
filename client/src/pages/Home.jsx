// // import { useState } from "react";
// // import { useSelector } from "react-redux";
// // import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// // import SideBar from "../components/SideBar/SideBar.jsx";
// // import HeaderHome from "../components/HeaderHome.jsx";
// // import NotePopup from "../components/NotePopup.jsx";
// // import InputHome from "../components/InputHome.jsx";

// // function Home() {
// //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
// //   const showSessionExpiredPopup = useSelector(
// //     (state) => state.auth.showSessionExpiredPopup
// //   );
// //   const [isCollapsed, setIsCollapsed] = useState(false);
// //   const [showNotePopup, setShowNotePopup] = useState(false);

// //   const toggleCollapse = () => {
// //     setIsCollapsed(!isCollapsed);
// //   };

// //   const handleInputClick = () => {
// //     setShowNotePopup(true);
// //   };

// //   const closePopup = () => {
// //     setShowNotePopup(false);
// //   };

// //   // If the session has expired, show the popup
// //   if (showSessionExpiredPopup) {
// //     return <SessionExpiredPopup />;
// //   }

// //   // If the user is authenticated, show the logged-in content
// //   // if (isAuthenticated) {
// //   //   return (
// //   //     <div className="flex h-screen">
// //   //       {/* SideBar Component */}
// //   //       <div className={`${isCollapsed ? "w-16" : "w-1/6"}`}>
// //   //         <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
// //   //       </div>

// //   //       {/* Main Content Area */}
// //   //       <div className={`flex-1 bg-white ${isCollapsed ? "w-5/6" : "w-5/6"}`}>
// //   //         <HeaderHome  />
// //   //         <InputHome onInputClick={handleInputClick} />
// //   //         <NotePopup isVisible={showNotePopup} onClose={closePopup} />
// //   //         {/* <h1 className="mt-20 text-center text-xl font-bold">
// //   //           You are logged in.
// //   //         </h1> */}
// //   //         {/* Add more authenticated user content here */}
// //   //       </div>
// //   //     </div>
// //   //   );
// //   // }

// //   // if (isAuthenticated) {
// //   //   return (
// //   //     <div className="flex flex-col h-screen ">
// //   //       {/* SideBar Component */}
// //   //       <div
// //   //         className={`${isCollapsed ? "w-16 z-10 " : "w-custom-width z-10"}`}
// //   //       >
// //   //         <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
// //   //       </div>

// //   //       {/* Main Content Area */}
// //   //       <div className="flex relative bg-white z-0">
// //   //         <HeaderHome />
// //   //       </div>
// //   //       {/* InputHome Component */}
// //   //       <div
// //   //         className={`w-full mb-3 transition-all duration-300 ${
// //   //           isCollapsed ? "" : ""
// //   //         }`}
// //   //       >
// //   //         <InputHome onInputClick={handleInputClick} />
// //   //       </div>

// //   //       {/* Note Popup */}
// //   //       <span className={`custom-width-main ${isCollapsed ? "" : ""}`}>
// //   //         <NotePopup
// //   //           isVisible={showNotePopup}
// //   //           onClose={closePopup}
// //   //           isCollapsed={isCollapsed}
// //   //         />
// //   //       </span>
// //   //     </div>
// //   //   );
// //   // }

// //   if (isAuthenticated) {
// //     return (
// //       <div className="flex h-screen">
// //         {/* Container for sidebar and main content */}
// //         <div className="flex flex-1">
// //           {/* SideBar Component */}
// //           <div
// //             className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
// //           >
// //             <SideBar
// //               isCollapsed={isCollapsed}
// //               toggleCollapse={toggleCollapse}
// //             />
// //           </div>

// //           {/* Main Content Area */}
// //           <div
// //             className={`flex-1 bg-white relative transition-all duration-300 ${isCollapsed ? "" : ""}`}
// //           >
// //             {/* Header */}
// //             <HeaderHome
// //               className={`transition-all duration-300 ${isCollapsed ? "w-full" : "w-full"}`}
// //               isCollapsed={isCollapsed}
// //             />

// //             {/* Main Content */}
// //             <div className="w-full flex justify-center items-center py-2 px-4">
// //               <div className="flex-grow flex items-center">
// //                 <InputHome
// //                   onInputClick={handleInputClick}
// //                   isCollapsed={isCollapsed}
// //                 />
// //               </div>
// //             </div>

// //             {/* Note Popup */}
// //             <div className={`custom-width-main transition-all duration-300`}>
// //               <NotePopup
// //                 isVisible={showNotePopup}
// //                 onClose={closePopup}
// //                 isCollapsed={isCollapsed}
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // If not authenticated, show the home page content
// //   return (
// //     <div className="w-full bg-white max-w-custom mx-auto ">
// //       <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex flex-col md:flex-row">
// //           {/* Left Section */}
// //           <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4 md:py-4 lg:py-4">
// //             <div className="max-w-xl">
// //               <h1 className="text-6xl md:text-6xl font-bold mb-4 text-gray-800">
// //                 Build Something Beautiful
// //               </h1>
// //               <p className="text-lg mb-6 text-gray-500 leading-relaxed">
// //                 Capture your thoughts, organize your ideas, and transform them
// //                 into actionable plans with our intuitive notes application.
// //               </p>
// //               <div className="space-y-4">
// //                 <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
// //                   Get NewNotes Free
// //                 </button>
// //                 <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out">
// //                   Take A Demo
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Section */}
// //           <div className="w-full md:w-1/2 py-4 md:py-4 lg:py-4 flex items-center justify-center">
// //             <img
// //               src="homePage.webp"
// //               alt="Platform visualization"
// //               className="w-full h-auto max-h-[80vh] object-contain"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/Notes/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import { getAllNotes } from "../store/noteSlice.js";
// import NotesList from "../components/Notes/NotesList.jsx";

// function Home() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes); // Fetch notes from the Redux store
//   const isLoading = useSelector((state) => state.notes.isLoading); // Fetch loading state
//   const error = useSelector((state) => state.notes.error); // Fetch error state
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showNotePopup, setShowNotePopup] = useState(false);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleInputClick = () => {
//     setShowNotePopup(true);
//   };

//   const closePopup = () => {
//     setShowNotePopup(false);
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(getAllNotes()); // Fetch notes when the component mounts
//     }
//   }, [dispatch, isAuthenticated]);

//   // If the session has expired, show the popup
//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

//   // If the user is authenticated, show the logged-in content
//   if (isAuthenticated) {
//     return (
//       <div className="flex h-screen">
//         {/* Container for sidebar and main content */}
//         <div className="flex flex-1">
//           {/* SideBar Component */}
//           <div
//             className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
//           >
//             <SideBar
//               isCollapsed={isCollapsed}
//               toggleCollapse={toggleCollapse}
//             />
//           </div>

//           {/* Main Content Area */}
//           <div
//             className={`flex-1 bg-white relative transition-all duration-300 ${isCollapsed ? "" : ""}`}
//           >
//             {/* Header */}
//             <HeaderHome
//               className={`transition-all duration-300 ${isCollapsed ? "w-full" : "w-full"}`}
//               isCollapsed={isCollapsed}
//             />

//             {/* Main Content */}
//             <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

//             {/* Display Notes */}
//             {/* <div className=" border-y border-gray-200">
//             <div className="flex flex-row w-4/4 space-x-4 px-4 py-2 h-4/4 ">
//               {isLoading ? (
//                 <p className="text-center text-gray-500">Loading...</p>
//               ) : error ? (
//                 <p className="text-center text-red-500">{error.message}</p>
//               ) : notes.length > 0 ? (
//                 notes.map((note) => (
//                   <div
//                     key={note._id}
//                     className=" px-4 py-2 bg-yellow-200  rounded-lg shadow-md w-1/4 overflow-hidden h-1/4"
//                   >
//                     <h3 className="text-lg font-semibold">{note.title}</h3>
//                     <p className="mt-2 text-gray-700">{note.content}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="flex w-full p-2 h-4/4 text-center text-gray-500">
//                   No notes available
//                 </p>
//               )}
//             </div>
//             </div> */}

//             <div className="">
//               <NotesList notes={notes} isLoading={isLoading} error={error} />
//             </div>

//             {/* Note Popup */}
//             <div className={`custom-width-main transition-all duration-300`}>
//               <NotePopup
//                 isVisible={showNotePopup}
//                 onClose={closePopup}
//                 isCollapsed={isCollapsed}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // If not authenticated, show the home page content
//   return (
//     <div className="w-full bg-white max-w-custom mx-auto ">
//       <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Section */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4 md:py-4 lg:py-4">
//             <div className="max-w-xl">
//               <h1 className="text-6xl md:text-6xl font-bold mb-4 text-gray-800">
//                 Build Something Beautiful
//               </h1>
//               <p className="text-lg mb-6 text-gray-500 leading-relaxed">
//                 Capture your thoughts, organize your ideas, and transform them
//                 into actionable plans with our intuitive notes application.
//               </p>
//               <div className="space-y-4">
//                 <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
//                   Get NewNotes Free
//                 </button>
//                 <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out">
//                   Take A Demo
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full md:w-1/2 py-4 md:py-4 lg:py-4 flex items-center justify-center">
//             <img
//               src="homePage.webp"
//               alt="Platform visualization"
//               className="w-full h-auto max-h-[80vh] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/Notes/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import { getAllNotes } from "../store/noteSlice.js";
// import NotesList from "../components/Notes/NotesList.jsx";

// function Home() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes);
//   const isLoading = useSelector((state) => state.notes.isLoading);
//   const error = useSelector((state) => state.notes.error);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showNotePopup, setShowNotePopup] = useState(false);

//   const toggleCollapse = () => setIsCollapsed(!isCollapsed);
//   const handleInputClick = () => setShowNotePopup(true);
//   const closePopup = () => setShowNotePopup(false);

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(getAllNotes());
//     }
//   }, [dispatch, isAuthenticated]);

//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

//   return (
//     <div className="flex h-screen">
//       {isAuthenticated ? (
//         <div className="flex flex-1">
//           <div
//             className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
//           >
//             <SideBar
//               isCollapsed={isCollapsed}
//               toggleCollapse={toggleCollapse}
//             />
//           </div>

//           <div className="flex-1 bg-white relative transition-all duration-300">
//             <HeaderHome className="w-full" isCollapsed={isCollapsed} />
//             <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

//             <NotesList notes={notes} isLoading={isLoading} error={error} />

//             <NotePopup
//               isVisible={showNotePopup}
//               onClose={closePopup}
//               isCollapsed={isCollapsed}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="w-full bg-white max-w-custom mx-auto">
//           <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4">
//                 <div className="max-w-xl">
//                   <h1 className="text-6xl font-bold mb-4 text-gray-800">
//                     Build Something Beautiful
//                   </h1>
//                   <p className="text-lg mb-6 text-gray-500 leading-relaxed">
//                     Capture your thoughts, organize your ideas, and transform
//                     them into actionable plans.
//                   </p>
//                   <div className="space-y-4">
//                     <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
//                       Get NewNotes Free
//                     </button>
//                     <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150 ease-in-out">
//                       Take A Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 py-4 flex items-center justify-center">
//                 <img
//                   src="homePage.webp"
//                   alt="Platform visualization"
//                   className="w-full h-auto max-h-[80vh] object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

// import  { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/Notes/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import {
//   createNotes,
//   updateNotes,
//   deleteNotes,
//   fetchAllNotes,
// } from "../store/noteSlice.js";
// import NotesList from "../components/Notes/NotesList.jsx";

// function Home() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes);
//   const isLoading = useSelector((state) => state.notes.isLoading);
//   const error = useSelector((state) => state.notes.error);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showNotePopup, setShowNotePopup] = useState(false);
//   const [currentNote, setCurrentNote] = useState(null);

//   const toggleCollapse = () => setIsCollapsed(!isCollapsed);
//   const handleInputClick = () => {
//     setCurrentNote(null); // Reset current note when creating a new note
//     setShowNotePopup(true);
//   };
//   const closePopup = () => setShowNotePopup(false);

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(fetchAllNotes());
//       console.log(notes);
//     }
//   }, [dispatch, isAuthenticated]);

//   const handleSaveNote = (noteData) => {
//     if (currentNote) {
//       // Update existing note
//       dispatch(updateNotes({ noteId: currentNote._id, noteData }));
//     } else {
//       // Create new note
//       dispatch(createNotes(noteData));
//     }
//   };

//   const handleDeleteNote = (noteId) => {
//     dispatch(deleteNotes(noteId));
//   };

//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

//   return (
//     <div className="flex h-screen">
//       {isAuthenticated ? (
//         <div className="flex flex-1">
//           <div
//             className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
//           >
//             <SideBar
//               isCollapsed={isCollapsed}
//               toggleCollapse={toggleCollapse}
//             />
//           </div>

//           <div className="flex-1 bg-white relative transition-all duration-300">
//             <HeaderHome className="w-full" isCollapsed={isCollapsed} />
//             <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

//             <NotesList notes={note} isLoading={isLoading} error={error} />

//             <NotePopup
//               isVisible={showNotePopup}
//               onClose={closePopup}
//               isCollapsed={isCollapsed}
//               note={currentNote}
//               onSave={handleSaveNote}
//               onDelete={handleDeleteNote}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="w-full bg-white max-w-custom mx-auto">
//           <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4">
//                 <div className="max-w-xl">
//                   <h1 className="text-6xl font-bold mb-4 text-gray-800">
//                     Build Something Beautiful
//                   </h1>
//                   <p className="text-lg mb-6 text-gray-500 leading-relaxed">
//                     Capture your thoughts, organize your ideas, and transform
//                     them into actionable plans.
//                   </p>
//                   <div className="space-y-4">
//                     <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
//                       Get NewNotes Free
//                     </button>
//                     <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150 ease-in-out">
//                       Take A Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 py-4 flex items-center justify-center">
//                 <img
//                   src="homePage.webp"
//                   alt="Platform visualization"
//                   className="w-full h-auto max-h-[80vh] object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/Notes/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import {
//   createNotes,
//   updateNotes,
//   deleteNotes,
//   fetchAllNotes,
// } from "../store/noteSlice.js";
// import NotesList from "../components/Notes/NotesList.jsx";

// function Home() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes);
//   const isLoading = useSelector((state) => state.notes.isLoading);
//   const error = useSelector((state) => state.notes.error);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showNotePopup, setShowNotePopup] = useState(false);
//   const [currentNote, setCurrentNote] = useState(null);
//    const [noteToEdit, setNoteToEdit] = useState(null);

//   const toggleCollapse = () => setIsCollapsed(!isCollapsed);
//   const handleInputClick = () => {
//     setCurrentNote(null); // Reset current note when creating a new note
//     setShowNotePopup(true);
//   };
//   const closePopup = () => setShowNotePopup(false);

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(fetchAllNotes());
//       console.log("Home:",notes);
//     }
//   }, [dispatch, isAuthenticated]);

//   const handleSaveNote = (noteData) => {
//     if (currentNote) {
//       // Update existing note
//       dispatch(updateNotes({ noteId: currentNote._id, noteData }));
//     } else {
//       // Create new note
//       dispatch(createNotes(noteData));
//     }
//     setShowNotePopup(false); // Close the popup after saving
//   };

//   const handleOpenEditPopup = (note) => {
//     setNoteToEdit(note); // Set the note to edit
//     setIsPopupVisible(true);
//   };

//   const handleDeleteNote = (noteId) => {
//     dispatch(deleteNotes(noteId));
//     setShowNotePopup(false); // Close the popup after deleting
//   };

//   const handleNoteClick = (note) => {
//     setCurrentNote(note);
//     setShowNotePopup(true);
//   };

//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

//   return (
//     <div className="flex h-screen">
//       {isAuthenticated ? (
//         <div className="flex flex-1">
//           <div
//             className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
//           >
//             <SideBar
//               isCollapsed={isCollapsed}
//               toggleCollapse={toggleCollapse}
//             />
//           </div>

//           <div className="flex-1 bg-white relative transition-all duration-300">
//             <HeaderHome className="w-full" isCollapsed={isCollapsed} />
//             <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

//             <NotesList
//               notes={notes}
//               isLoading={isLoading}
//               error={error}
//               onNoteClick={handleNoteClick}
//             />

//             <NotePopup
//               isVisible={showNotePopup}
//               onClose={closePopup}
//               isCollapsed={isCollapsed}
//               note={currentNote}
//               onSave={handleSaveNote}
//               onDelete={handleDeleteNote}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="w-full bg-white max-w-custom mx-auto">
//           <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4">
//                 <div className="max-w-xl">
//                   <h1 className="text-6xl font-bold mb-4 text-gray-800">
//                     Build Something Beautiful
//                   </h1>
//                   <p className="text-lg mb-6 text-gray-500 leading-relaxed">
//                     Capture your thoughts, organize your ideas, and transform
//                     them into actionable plans.
//                   </p>
//                   <div className="space-y-4">
//                     <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
//                       Get NewNotes Free
//                     </button>
//                     <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150 ease-in-out">
//                       Take A Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 py-4 flex items-center justify-center">
//                 <img
//                   src="homePage.webp"
//                   alt="Platform visualization"
//                   className="w-full h-auto max-h-[80vh] object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import HeaderHome from "../components/HeaderHome.jsx";
import NotePopup from "../components/Notes/NotePopup.jsx";
import InputHome from "../components/InputHome.jsx";
import {
  createNotes,
  updateNotes,
  deleteNotes,
  fetchAllNotes,
  getNotesByFolderId,
} from "../store/noteSlice.js";
import NotesList from "../components/Notes/NotesList.jsx";
import { useParams } from "react-router-dom"; // Ensure useParams is imported
import FolderPopup from "../components/SideBar/FolderPopup.jsx";

// Utility function to validate MongoDB ObjectId (if needed in Home)
const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);

function Home() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showSessionExpiredPopup = useSelector(
    (state) => state.auth.showSessionExpiredPopup
  );
  const notes = useSelector((state) => state.notes.notes);
  const loading = useSelector((state) => state.notes.loading); // Corrected selector
  const error = useSelector((state) => state.notes.error);
  const { folderId } = useParams(); // Get folderId from URL params

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [currentNote, setCurrentNote] = useState(null); // Single state for current note (create or edit)
  const [showPopup, setShowPopup] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleInputClick = () => {
    setCurrentNote(null); // Reset current note when creating a new note
    setShowNotePopup(true);
  };

  const closePopup = () => setShowNotePopup(false);

  useEffect(() => {
    if (isAuthenticated) {
      if (folderId && isValidObjectId(folderId)) {
        dispatch(getNotesByFolderId(folderId));
      } else {
        dispatch(fetchAllNotes());
      }
      // Removed console.log("Home:", notes); to prevent unnecessary logs
    }
  }, [dispatch, isAuthenticated, folderId]);

  const handleSaveNote = (noteData, files) => {
    if (currentNote) {
      // Update existing note
      dispatch(updateNotes({ noteId: currentNote._id, noteData, files }));
    } else {
      // Create new note
      dispatch(createNotes({ noteData, files }));
    }
    setShowNotePopup(false); // Close the popup after saving
  };

  const handleOpenEditPopup = (note) => {
    setCurrentNote(note); // Set the note to edit
    setShowNotePopup(true);
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNotes(noteId));
    setShowNotePopup(false); // Close the popup after deleting
  };

  const handleNoteClick = (note) => {
    handleOpenEditPopup(note); // Reuse handleOpenEditPopup for consistency
  };

  if (showSessionExpiredPopup) {
    return <SessionExpiredPopup />;
  }

  return (
    <div className="flex h-screen bg-white ">
      {isAuthenticated ? (
        <div className="flex flex-1">
          <div
            className={`transition-all duration-300 ${
              isCollapsed ? "w-0  " : "w-custom-width"
            } z-10`}
          >
            <SideBar
              isCollapsed={isCollapsed}
              toggleCollapse={toggleCollapse}
              setShowPopup={setShowPopup}
            />
          </div>

          <div className="flex-1 overflow-y-auto transition-all duration-300">
            <HeaderHome
              className="w-full"
              isCollapsed={isCollapsed}
              toggleCollapse={toggleCollapse}
              setShowPopup={setShowPopup}
            />
            <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
              <div className="flex-grow flex items-center">
                <InputHome
                  onInputClick={handleInputClick}
                  isCollapsed={isCollapsed}
                />
              </div>
            </div>

            <NotesList
              notes={notes}
              isLoading={loading}
              error={error}
              onNoteClick={handleNoteClick}
              onEditNote={handleOpenEditPopup} // Optional: If NotesList supports edit
              onDeleteNote={handleDeleteNote} // Optional: If NotesList supports delete
              // isCollapsed={sidebarCollapsedState}
            />

            <NotePopup
              isVisible={showNotePopup}
              onClose={closePopup}
              isCollapsed={isCollapsed}
              existingNote={currentNote} // Pass existingNote prop
              onSave={handleSaveNote}
              onDelete={handleDeleteNote}
            />
            {/* {showPopup && (
              <FolderPopup onclose={onclose}  />
            )} */}
            {showPopup && (
              <FolderPopup
                onClose={() => {
                  setShowPopup(false);
                  // setEditingFolder(null);
                }}
                // initialValue={editingFolder}
                // isEditing={!!editingFolder}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="w-full bg-white max-w-custom mx-auto">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4">
                <div className="max-w-xl">
                  <h1 className="text-6xl font-bold mb-4 text-gray-800">
                    Build Something Beautiful
                  </h1>
                  <p className="text-lg mb-6 text-gray-500 leading-relaxed">
                    Capture your thoughts, organize your ideas, and transform
                    them into actionable plans.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
                      Get NewNotes Free
                    </button>
                    <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150 ease-in-out">
                      Take A Demo
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-4 flex items-center justify-center">
                <img
                  src="homePage.webp"
                  alt="Platform visualization"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
