import { useSelector } from "react-redux";
import SessionExpiredPopup from "../components/SessionExpiredPopup.jsx";

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showSessionExpiredPopup = useSelector(
    (state) => state.auth.showSessionExpiredPopup
  );

  console.log("isAuthenticated:", isAuthenticated);
  console.log("showSessionExpiredPopup:", showSessionExpiredPopup);

  // If the session has expired, show the popup
  if (showSessionExpiredPopup) {
    return <SessionExpiredPopup />;
  }

  // If the user is authenticated, show the logged-in message
  if (isAuthenticated) {
    return (
      <h1 className="text-center mt-20 text-xl font-bold">
        You are logged in.
      </h1>
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
                Write. Plan. Organize.
              </h1>
              <p className="text-lg mb-6 text-gray-500 leading-relaxed">
                Capture your thoughts, organize your ideas, and transform them
                into actionable plans with our intuitive notes application.
              </p>
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-md transition duration-300">
                  Get NewNotes Free
                </button>
                <button className="w-full ml-2 md:w-auto px-6 py-2 bg-sky-50 text-blue-600  rounded-lg border border-blue-100 text-md font-semibold hover:text-sky-700 hover:bg-sky-100 hover:border hover:border-blue-500 transition duration-150 ease-in-out">
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




