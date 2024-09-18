// import { useState } from "react";
// import { useSelector } from "react-redux";
// import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
// import SideBar from "../components/SideBar/SideBar.jsx";

// function Home() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const showSessionExpiredPopup = useSelector(
//     (state) => state.auth.showSessionExpiredPopup
//   );
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   console.log("isAuthenticated:", isAuthenticated);
//   console.log("showSessionExpiredPopup:", showSessionExpiredPopup);

//   // If the session has expired, show the popup
//   if (showSessionExpiredPopup) {
//     return <SessionExpiredPopup />;
//   }

//   // If the user is authenticated, show the logged-in message
//   if (isAuthenticated) {
//     return (
//       <div className="flex h-screen">
//         {/* SideBar Component */}
//         <div className={`${isCollapsed ? "w-16" : "w-1/6"}`}>
//           <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
//         </div>

//         {/* Main Content Area */}
//         <div className={`flex-1 bg-white ${isCollapsed ? "w-5/6" : "w-5/6"}`}>
//           <h1 className="mt-20 text-center text-xl font-bold">
//             You are logged in.
//           </h1>
//           {/* Add more authenticated user content here */}
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
//                 {/* Write. Plan. Organize. */}
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
//                 <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600  rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out">
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



import { useState } from "react";
import { useSelector } from "react-redux";
import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import HeaderHome from "../components/HeaderHome.jsx";
import NotePopup from "../components/NotePopup.jsx";
import InputHome from "../components/InputHome.jsx";

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showSessionExpiredPopup = useSelector(
    (state) => state.auth.showSessionExpiredPopup
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showNotePopup, setShowNotePopup] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleInputClick = () => {
    setShowNotePopup(true);
  };

  const closePopup = () => {
    setShowNotePopup(false);
  };

  // If the session has expired, show the popup
  if (showSessionExpiredPopup) {
    return <SessionExpiredPopup />;
  }

  // If the user is authenticated, show the logged-in content
  // if (isAuthenticated) {
  //   return (
  //     <div className="flex h-screen">
  //       {/* SideBar Component */}
  //       <div className={`${isCollapsed ? "w-16" : "w-1/6"}`}>
  //         <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
  //       </div>

  //       {/* Main Content Area */}
  //       <div className={`flex-1 bg-white ${isCollapsed ? "w-5/6" : "w-5/6"}`}>
  //         <HeaderHome  />
  //         <InputHome onInputClick={handleInputClick} />
  //         <NotePopup isVisible={showNotePopup} onClose={closePopup} />
  //         {/* <h1 className="mt-20 text-center text-xl font-bold">
  //           You are logged in.
  //         </h1> */}
  //         {/* Add more authenticated user content here */}
  //       </div>
  //     </div>
  //   );
  // }

  // if (isAuthenticated) {
  //   return (
  //     <div className="flex flex-col h-screen ">
  //       {/* SideBar Component */}
  //       <div
  //         className={`${isCollapsed ? "w-16 z-10 " : "w-custom-width z-10"}`}
  //       >
  //         <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
  //       </div>

  //       {/* Main Content Area */}
  //       <div className="flex relative bg-white z-0">
  //         <HeaderHome />
  //       </div>
  //       {/* InputHome Component */}
  //       <div
  //         className={`w-full mb-3 transition-all duration-300 ${
  //           isCollapsed ? "" : ""
  //         }`}
  //       >
  //         <InputHome onInputClick={handleInputClick} />
  //       </div>

  //       {/* Note Popup */}
  //       <span className={`custom-width-main ${isCollapsed ? "" : ""}`}>
  //         <NotePopup
  //           isVisible={showNotePopup}
  //           onClose={closePopup}
  //           isCollapsed={isCollapsed}
  //         />
  //       </span>
  //     </div>
  //   );
  // }


 
if (isAuthenticated) {
  return (
    <div className="flex h-screen">
      {/* Container for sidebar and main content */}
      <div className="flex flex-1">
        {/* SideBar Component */}
        <div
          className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-custom-width"} z-10`}
        >
          <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        </div>

        {/* Main Content Area */}
        <div
          className={`flex-1 bg-white relative transition-all duration-300 ${isCollapsed ? "" : ""}`}
        >
          {/* Header */}
          <HeaderHome
            className={`transition-all duration-300 ${isCollapsed ? "w-full" : "w-full"}`}
          />

          {/* Main Content */}
          <div className="w-full flex justify-center items-center py-2 px-4">
            <div className="flex-grow flex items-center">
              <InputHome onInputClick={handleInputClick} />
            </div>
          </div>

          {/* Note Popup */}
          <div className={`custom-width-main transition-all duration-300`}>
            <NotePopup
              isVisible={showNotePopup}
              onClose={closePopup}
              isCollapsed={isCollapsed}
            />
          </div>
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

export default Home;
