// import { useState } from "react";

// function InputHome({ onInputClick, isCollapsed }) {
//   return (
//     <div className=" w-full flex justify-center items-center  py-2 px-4 ">
//       <input
//         type="text"
//         placeholder="Create a new note..."
//         className={`w-7/12 py-3 px-4 rounded-full bg-newnotes-sidebar-light border border:newnotes-sidebar-light focus:outline-none focus:ring-2 focus:ring-newnotes-sidebar-light focus:border-transparent ${isCollapsed ? "text-sm" : "text-lg"}`}
//         onClick={onInputClick}
//       />
//     </div>
//   );
// }

// export default InputHome;



import { useState } from "react";

function InputHome({ onInputClick, isCollapsed }) {
  return (
    <div className="w-full flex justify-center items-center py-2 px-4">
      <div
        className={`w-full max-w-2xl flex items-center ${isCollapsed ? "p-2" : "p-4"} transition-all duration-300`}
      >
        <input
          type="text"
          placeholder="Take a new note..."
          className={`w-full py-3 px-4 rounded-lg shadow-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${isCollapsed ? "text-sm" : "text-base"}`}
          onClick={onInputClick}
        />
        
      </div>
    </div>
  );
}

export default InputHome;
