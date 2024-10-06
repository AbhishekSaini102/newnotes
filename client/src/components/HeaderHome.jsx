import props from "prop-types";
import { useSelector } from "react-redux";
// import ProfileIcon from "./ProfileIcon.jsx";
import ProfileIconRight from "./ProfileIconRIght.jsx";

function HeaderHome({ isCollapsed }) {

   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className="flex justify-between items-center bg-custom-gray-light px-2 py-2  ">
      {/* <h1 className="text-xl font-bold">NewNotes</h1> */}
      {isCollapsed && (
        <div className="flex items-center space-x-1 ml-4">
          {/* <img className="h-7 w-7" src="/newNotes.png" alt="newNotes Logo" /> */}
          <span className="text-black font-bold text-2xl hover:text-black ">
            NewNotes
          </span>

          {isAuthenticated && (
            <div className="fixed right-2 top-2 ">
              <ProfileIconRight isCollapsed={isCollapsed} />
            </div>
          )}
        </div>
      )}
      {!isCollapsed && (
        <div className="flex items-center space-x-1 ">
          {/* <img className="h-7 w-7" src="/newNotes.png" alt="newNotes Logo" /> */}
          <span className="text-black font-bold text-2xl hover:text-black ">
            NewNotes
          </span>

          {isAuthenticated && (
            <div className="fixed right-2 top-2">
              <ProfileIconRight isCollapsed={isCollapsed} />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

HeaderHome.propTypes = {
  isCollapsed: props.bool,
};

export default HeaderHome;
