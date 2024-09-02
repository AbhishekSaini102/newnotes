// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     {
//       name: "Login",
//       slug: "/login",
//       active: !isAuthenticated,
//       desktopClassName:
//         "px-6 py-1.5 w-full ml-2 md:w-auto bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
//       mobileClassName:
//         "block w-auto px-3 py-2 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !isAuthenticated,
//       desktopClassName:
//         "px-6 py-1.5 bg-black text-white rounded-md hover:bg-zinc-600 hover:text-white transition duration-150 ease-in-out",
//       mobileClassName:
//         "block w-full px-3 py-2 text-center bg-black text-white hover:text-white rounded-md hover:bg-zinc-600 transition duration-150 ease-in-out",
//     },
//     {
//       name: "Logout",
//       slug: "/logout",
//       active: isAuthenticated,
//       desktopClassName:
//         "px-6 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 hover:text-white transition duration-150 ease-in-out",
//       mobileClassName:
//         "block w-full px-3 py-2 text-center bg-black text-white hover:text-white rounded-md hover:bg-zinc-600 transition duration-150 ease-in-out",
//     },
//   ];

//   return (
//     <header className="bg-white bg-opacity-70 backdrop-blur-md sticky top-0 z-10 w-full">
//       <nav className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-14">
//           {/* Left section: Logo and App Name */}
//           <div className="flex items-center">
//             <img
//               className="h-8 w-8 mr-2"
//               src="/newNotes.png"
//               alt="newNotes Logo"
//             />
//             <Link
//               to="/"
//               className="text-black font-bold text-2xl hover:text-black"
//             >
//               NewNotes
//             </Link>
//           </div>

//           {/* Middle section: Empty */}
//           <div className="flex-grow"></div>

//           {/* Right section: Login and Sign Up buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navItems.map((item) =>
//               item.active ? (
//                 <Link
//                   key={item.name}
//                   to={item.slug}
//                   className={item.desktopClassName}
//                 >
//                   {item.name}
//                 </Link>
//               ) : null
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile menu, show/hide based on menu state */}
//       <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-64 z-10">
//           {navItems.map((item) =>
//             item.active ? (
//               <Link
//                 key={item.name}
//                 to={item.slug}
//                 className={item.mobileClassName}
//               >
//                 {item.name}
//               </Link>
//             ) : null
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon"; // Import the ProfileIcon component

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !isAuthenticated,
      desktopClassName:
        "px-6 py-1.5 w-full ml-2 md:w-auto bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
      mobileClassName:
        "block w-auto px-3 py-2 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !isAuthenticated,
      desktopClassName:
        "px-6 py-1.5 bg-black text-white rounded-md hover:bg-zinc-600 hover:text-white transition duration-150 ease-in-out",
      mobileClassName:
        "block w-full px-3 py-2 text-center bg-black text-white hover:text-white rounded-md hover:bg-zinc-600 transition duration-150 ease-in-out",
    },
  ];

  return (
    <header className="bg-white bg-opacity-70 backdrop-blur-md sticky top-0 z-10 w-full">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left section: Logo and App Name */}
          <div className="flex items-center">
            <img
              className="h-8 w-8 mr-2"
              src="/newNotes.png"
              alt="newNotes Logo"
            />
            <Link
              to="/"
              className="text-black font-bold text-2xl hover:text-black"
            >
              NewNotes
            </Link>
          </div>

          {/* Middle section: Empty */}
          <div className="flex-grow"></div>

          {/* Right section: ProfileIcon or Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <ProfileIcon />
            ) : (
              navItems.map(
                (item) =>
                  item.active && (
                    <Link
                      key={item.name}
                      to={item.slug}
                      className={item.desktopClassName}
                    >
                      {item.name}
                    </Link>
                  )
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-64 z-10">
          {isAuthenticated ? (
            <ProfileIcon />
          ) : (
            navItems.map(
              (item) =>
                item.active && (
                  <Link
                    key={item.name}
                    to={item.slug}
                    className={item.mobileClassName}
                  >
                    {item.name}
                  </Link>
                )
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
