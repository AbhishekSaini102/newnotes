/* eslint-disable no-unused-vars */
// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="loader">
        <style>
          {`
            .loader {
              border: 8px solid #f3f3f3; /* Light grey */
              border-top: 8px solid #3498db; /* Blue */
              border-radius: 50%;
              width: 60px;
              height: 60px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loader;


// import React from 'react';

// const Loader = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-white">
//       <div className="relative w-32 h-32">
//         <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
//           <circle
//             className="stroke-current text-gray-200"
//             strokeWidth="4"
//             cx="50"
//             cy="50"
//             r="48"
//             fill="none"
//           />
//           <path
//             className="stroke-current text-blue-500"
//             strokeWidth="4"
//             strokeLinecap="round"
//             fill="none"
//             d="M50 2 A48 48 0 0 1 98 50"
//           >
//             <animateTransform
//               attributeName="transform"
//               type="rotate"
//               from="0 50 50"
//               to="360 50 50"
//               dur="1.5s"
//               repeatCount="indefinite"
//             />
//           </path>
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-2xl font-light text-blue-500">hello</span>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes spin-slow {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;