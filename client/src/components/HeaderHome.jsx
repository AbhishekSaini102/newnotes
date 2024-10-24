// import props from "prop-types";
// import { useSelector } from "react-redux";
// // import ProfileIcon from "./ProfileIcon.jsx";
// import ProfileIconRight from "./ProfileIconRIght.jsx";

// function HeaderHome({ isCollapsed }) {

//    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return (
//     <header className="flex justify-between items-center bg-custom-gray-light px-2 py-2 mt-0.5 ">
//       {/* <h1 className="text-xl font-bold">NewNotes</h1> */}
//       {isCollapsed && (
//         <div className="flex items-center space-x-1 ml-4">
//           {/* <img className="h-7 w-7" src="/newNotes.png" alt="newNotes Logo" /> */}
//           <span className="text-black font-bold text-2xl hover:text-black ">
//             NewNotes
//           </span>

//           {isAuthenticated && (
//             <div className="fixed right-2 top-2 ">
//               <ProfileIconRight isCollapsed={isCollapsed} />
//             </div>
//           )}
//         </div>
//       )}
//       {!isCollapsed && (
//         <div className="flex items-center space-x-1 ">
//           {/* <img className="h-7 w-7" src="/newNotes.png" alt="newNotes Logo" /> */}
//           <span className="text-black font-bold text-2xl hover:text-black ">
//             NewNotes
//           </span>

//           {isAuthenticated && (
//             <div className="fixed right-2 top-2">
//               <ProfileIconRight isCollapsed={isCollapsed} />
//             </div>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }

// HeaderHome.propTypes = {
//   isCollapsed: props.bool,
// };

// export default HeaderHome;


// import PropTypes from "prop-types"; // Corrected import name from props to PropTypes
// import { useSelector } from "react-redux";
// import ProfileIconRight from "./ProfileIconRIght.jsx";
// import SidebarRectangleIcon from "./SvgIcons/SidebarRectangleIcon.jsx";
// import EditIcon from "./SvgIcons/EditIcon.jsx";

// function HeaderHome({ isCollapsed, toggleCollapse, setShowPopup }) {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  

//   return (
//     <header className="sticky top-0 z-50 flex justify-between items-center  px-0 py-2.5 ml-4 bg-white border-b border-gray-700 ">
//       {isCollapsed ? (
//         <div className="flex items-center space-x-1 ml-4">
//           <button
//             onClick={toggleCollapse}
//             className="p-1 hover:bg-stone-200 rounded"
//           >
//             <SidebarRectangleIcon color={"#777777"} size={25} />
//           </button>

//           {isAuthenticated && (
//             <button
//               onClick={() => setShowPopup(true)}
//               className="p-1 hover:bg-stone-200 rounded"
//             >
//               <EditIcon color={"#777777"} size={23} />
//             </button>
//           )}
//           <span className="text-black font-bold text-2xl hover:text-black">
//             NewNotes
//           </span>
//           {isAuthenticated && (
//             <div className="fixed right-4 top-2">
//               <ProfileIconRight isCollapsed={isCollapsed} />
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="flex items-center space-x-1">
//           <span className="text-black font-bold text-2xl hover:text-black">
//             NewNotes
//           </span>
//           {isAuthenticated && (
//             <div className="fixed right-4 top-2">
//               <ProfileIconRight isCollapsed={isCollapsed} />
//             </div>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }

// HeaderHome.propTypes = {
//   isCollapsed: PropTypes.bool, 
//   toggleCollapse: PropTypes.func,
//   setShowPopup: PropTypes.func
// };

// export default HeaderHome;


import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ProfileIconRight from "./ProfileIconRight.jsx";
import SidebarRectangleIcon from "./SvgIcons/SidebarRectangleIcon.jsx";
import EditIcon from "./SvgIcons/EditIcon.jsx";

function HeaderHome({ isCollapsed, toggleCollapse, setShowPopup }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="sticky top-0 flex justify-between items-center py-3 bg-white  ">
      {isCollapsed ? ( 
        <div className="flex items-center space-x-2 px-2.5">
          <button
            onClick={toggleCollapse}
            className="p-1 hover:bg-stone-200 rounded"
          >
            <SidebarRectangleIcon color={"#777777"} size={25} />
          </button>

          {isAuthenticated && (
            <button
              onClick={() => setShowPopup(true)}
              className="p-1 mb-0.5 hover:bg-stone-200 rounded"
            >
              <EditIcon color={"#777777"} size={23} />
            </button>
          )}
          <span className="text-black font-bold text-2xl mb-0.5 hover:text-black ">
            NewNotes
          </span>
          {isAuthenticated && (
            <div className="fixed right-4 top-2">
              <ProfileIconRight isCollapsed={isCollapsed} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-1">
          <span className="text-black font-bold text-2xl ml-4 hover:text-black">
            NewNotes
          </span>
          {isAuthenticated && (
            <div className="fixed right-4 top-2">
              <ProfileIconRight isCollapsed={isCollapsed} />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

HeaderHome.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleCollapse: PropTypes.func.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};

export default HeaderHome;
