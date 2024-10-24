// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import NotesList from "../components/Notes/NotesList.jsx";
// import { getFolderById } from "../store/folderSlice.js";

// function FolderPage() {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes);
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
//       dispatch(getFolderById(1));
//     }
//   }, [dispatch, isAuthenticated]);

//   // If the session has expired, show the popup
//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

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
//             <div className="w-full flex justify-center items-center py-2 px-4">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

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

// export default FolderPage;




// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";
// import HeaderHome from "../components/HeaderHome.jsx";
// import NotePopup from "../components/Notes/NotePopup.jsx";
// import InputHome from "../components/InputHome.jsx";
// import NotesList from "../components/Notes/NotesList.jsx";
// import { getNotesByFolderId } from "../store/noteSlice.js"; // Import the new thunk

// function FolderPage() {
//   const dispatch = useDispatch();
//   const { folderId } = useParams(); // Get folderId from URL params
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const notes = useSelector((state) => state.notes.notes);
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
//     if (isAuthenticated && folderId) {
//       dispatch(getNotesByFolderId(folderId)); // Dispatch the new thunk with folderId
//     }
//   }, [dispatch, isAuthenticated, folderId]);

//   // If the session has expired, show the popup
//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

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
//             <div className="w-full flex justify-center items-center py-2 px-4  mb-8">
//               <div className="flex-grow flex items-center">
//                 <InputHome
//                   onInputClick={handleInputClick}
//                   isCollapsed={isCollapsed}
//                 />
//               </div>
//             </div>

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

// export default FolderPage;


import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import HeaderHome from "../components/HeaderHome.jsx";
import NotePopup from "../components/Notes/NotePopup.jsx";
import InputHome from "../components/InputHome.jsx";
import NotesList from "../components/Notes/NotesList.jsx";
import {
  getNotesByFolderId,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../store/noteSlice.js"; // Import necessary thunks

// Utility function to validate MongoDB ObjectId
const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);

function FolderPage() {
  const dispatch = useDispatch();
  const { folderId } = useParams(); // Get folderId from URL params
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showSessionExpiredPopup = useSelector(
    (state) => state.auth.showSessionExpiredPopup
  );
  const notes = useSelector((state) => state.notes.notes);
  const loading = useSelector((state) => state.notes.loading); // Corrected selector
  const error = useSelector((state) => state.notes.error); // Fetch error state

  // State variables
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [currentNote, setCurrentNote] = useState(null); // Single state for current note (create or edit)

  // Toggle sidebar collapse state
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Open popup for creating a new note
  const handleInputClick = () => {
    setCurrentNote(null); // Reset current note when creating a new note
    setShowNotePopup(true);
  };

  // Close the popup
  const closePopup = () => setShowNotePopup(false);

  // Fetch notes when component mounts or folderId changes
  useEffect(() => {
    if (isAuthenticated && folderId && isValidObjectId(folderId)) {
      dispatch(getNotesByFolderId(folderId)); // Dispatch the thunk with folderId
    }
  }, [dispatch, isAuthenticated, folderId]);

  // Handle saving a note (create or update)
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

  // Open popup for editing an existing note
  const handleOpenEditPopup = (note) => {
    setCurrentNote(note); // Set the note to edit
    setShowNotePopup(true);
  };

  // Handle deleting a note
  const handleDeleteNote = (noteId) => {
    dispatch(deleteNotes(noteId));
    setShowNotePopup(false); // Close the popup after deleting
  };

  // Handle note click (for viewing/editing)
  const handleNoteClick = (note) => {
    handleOpenEditPopup(note); // Reuse handleOpenEditPopup for consistency
  };

  // If the session has expired, show the popup
  if (showSessionExpiredPopup) {
    return <SessionExpiredPopup />;
  }

  if (isAuthenticated) {
    return (
      <div className="flex h-screen">
        {/* Container for sidebar and main content */}
        <div className="flex flex-1">
          {/* SideBar Component */}
          <div
            className={`transition-all duration-300 ${
              isCollapsed ? "w-16" : "w-custom-width"
            } z-10`}
          >
            <SideBar
              isCollapsed={isCollapsed}
              toggleCollapse={toggleCollapse}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white relative transition-all duration-300">
            {/* Header */}
            <HeaderHome
              className={`transition-all duration-300 w-full`}
              isCollapsed={isCollapsed}
            />

            {/* Main Content */}
            <div className="w-full flex justify-center items-center py-2 px-4 mb-8">
              <div className="flex-grow flex items-center">
                <InputHome
                  onInputClick={handleInputClick}
                  isCollapsed={isCollapsed}
                />
              </div>
            </div>

            {/* Notes List */}
            <NotesList
              notes={notes}
              isLoading={loading}
              error={error}
              onNoteClick={handleNoteClick}
              onEditNote={handleOpenEditPopup} // Ensure NotesList can handle edit
              onDeleteNote={handleDeleteNote} // Ensure NotesList can handle delete
            />

            {/* Note Popup */}
            <NotePopup
              isVisible={showNotePopup}
              onClose={closePopup}
              isCollapsed={isCollapsed}
              existingNote={currentNote} // Pass existingNote prop
              onSave={handleSaveNote} // Pass onSave handler
              onDelete={handleDeleteNote} // Pass onDelete handler
            />
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, show the home page content
  return (
    <div className="w-full bg-white max-w-custom mx-auto ">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-4 md:py-4 lg:py-4">
            <div className="max-w-xl">
              <h1 className="text-6xl md:text-6xl font-bold mb-4 text-gray-800">
                Build Something Beautiful
              </h1>
              <p className="text-lg mb-6 text-gray-500 leading-relaxed">
                Capture your thoughts, organize your ideas, and transform them
                into actionable plans with our intuitive notes application.
              </p>
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
                  Get NewNotes Free
                </button>
                <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out">
                  Take A Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 py-4 md:py-4 lg:py-4 flex items-center justify-center">
            <img
              src="homePage.webp"
              alt="Platform visualization"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FolderPage;
