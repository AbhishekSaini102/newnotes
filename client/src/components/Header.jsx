// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import ProfileIcon from "./ProfileIcon";

// function Header({ onToggleSidebar }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/signup";

//   const navItems = [
//     {
//       name: "Login",
//       slug: "/login",
//       active: !isAuthenticated && !isAuthPage,
//       desktopClassName:
//         "px-6 py-1.5 w-full ml-2 md:w-auto bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
//       mobileClassName:
//         "block w-auto px-3 py-2 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !isAuthenticated && !isAuthPage,
//       desktopClassName:
//         "px-6 py-1.5 bg-black text-white rounded-md hover:bg-zinc-600 hover:text-white transition duration-150 ease-in-out",
//       mobileClassName:
//         "block w-full px-3 py-2 text-center bg-black text-white hover:text-white rounded-md hover:bg-zinc-600 transition duration-150 ease-in-out",
//     },
//   ];

//   return (
//     <header
//       className={`bg-white bg-opacity-70 backdrop-blur-md sticky top-0 z-10 w-full ${
//         isScrolled ? "shadow-md" : ""
//       } ${isAuthenticated ? "border-b border-gray-300" : ""}`}
//     >
//       <nav className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-14">
//           {/* Left section: Sidebar Toggle and Logo */}
//           <div className="flex items-center">
//             {/* Sidebar Toggle Button */}
//             <button
//               onClick={onToggleSidebar}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">Toggle sidebar</span>
//               <svg
//                 className="h-6 w-6"
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
//             </button>

//             {/* Logo and App Name */}
//             <img
//               className="h-8 w-8 ml-2"
//               src="/newNotes.png"
//               alt="newNotes Logo"
//             />
//             <Link
//               to="/"
//               className="text-black font-bold text-2xl hover:text-black ml-2"
//             >
//               NewNotes
//             </Link>
//           </div>

//           {/* Middle section: Search Box */}
//           <div className="flex-grow flex items-center justify-center">
//             {isAuthenticated && (
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             )}
//           </div>

//           {/* Right section: ProfileIcon or Login/Signup */}
//           <div className="hidden md:flex items-center space-x-4">
//             {isAuthenticated ? (
//               <ProfileIcon />
//             ) : (
//               navItems.map(
//                 (item) =>
//                   item.active && (
//                     <Link
//                       key={item.name}
//                       to={item.slug}
//                       className={item.desktopClassName}
//                     >
//                       {item.name}
//                     </Link>
//                   )
//               )
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
//           {isAuthenticated ? (
//             <ProfileIcon />
//           ) : (
//             navItems.map(
//               (item) =>
//                 item.active && (
//                   <Link
//                     key={item.name}
//                     to={item.slug}
//                     className={item.mobileClassName}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//             )
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !isAuthenticated && !isAuthPage,
      desktopClassName:
        "px-6 py-1.5 w-full ml-2 md:w-auto bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
      mobileClassName:
        "block w-auto px-3 py-2 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out",
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !isAuthenticated && !isAuthPage,
      desktopClassName:
        "px-6 py-1.5 bg-black text-white rounded-md hover:bg-zinc-600 hover:text-white transition duration-150 ease-in-out",
      mobileClassName:
        "block w-full px-3 py-2 text-center bg-black text-white hover:text-white rounded-md hover:bg-zinc-600 transition duration-150 ease-in-out",
    },
  ];

  if (isAuthenticated) {
    return null;
  }

  return (
    <header
      className={`bg-white bg-opacity-70 backdrop-blur-md sticky top-0 z-10 w-full ${
        isScrolled ? "" : ""
      } ${isAuthenticated ? "border-b border-white" : ""}`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between ${isAuthenticated ? "h-14" : "h-14"}`}
        >
          {/* Left section: Sidebar Toggle and Logo */}
          <div className="flex items-center">
            {/* Sidebar Toggle Button */}
            {/* <button
              onClick={onToggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Toggle sidebar</span>
              <svg
                className="h-6 w-6"
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
            </button> */}

            {/* Logo and App Name */}
            <img
              className={`h-8 w-8 ml-2 ${isAuthenticated ? "h-5 w-5" : ""}`}
              src="/newNotes.png"
              alt="newNotes Logo"
            />
            <Link
              to="/"
              className={`text-black font-bold ${isAuthenticated ? "text-xl" : "text-xl"} hover:text-black ml-2`}
            >
              NewNotes
            </Link>
          </div>

          {/* Middle section: Search Box */}
          <div className="flex-grow flex items-center justify-center">
            {isAuthenticated && (
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-2 w-full h-8 max-w-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none 
                focus:ring-1 focus:ring-sky-500"
              />
            )}
          </div>

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
  


