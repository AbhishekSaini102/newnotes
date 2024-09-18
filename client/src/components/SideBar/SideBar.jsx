import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon.jsx";
import FolderPopup from "./FolderPopup.jsx";
import "../../App.css";
import CreateFolderIcon from "../CreateFolderIcon.jsx";
import MenuIcon from "./MenuIcon.jsx";

const FolderIcon = ({ className, size = 24, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MenuIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const SideBar = ({ isCollapsed, toggleCollapse }) => {
  const [folders, setFolders] = useState([
    { id: 1, name: "Notes" },
    { id: 2, name: "Archived" },
    { id: 3, name: "Notes" },
    { id: 4, name: "Archived" },
    { id: 5, name: "Notes" },
    { id: 6, name: "Archived" },
    { id: 7, name: "Notes" },
    { id: 8, name: "Archived" },
    { id: 9, name: "Archived" },
    { id: 10, name: "Notes" },
    { id: 11, name: "Archived" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingFolder, setEditingFolder] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const folderListRef = useRef(null);

  const handleAddFolder = (folderName) => {
    const newFolder = { id: Date.now(), name: folderName };
    setFolders((prevFolders) => [...prevFolders, newFolder]);
    setShowPopup(false);
  };

  const toggleMenu = (folderId, event) => {
    if (activeMenu === folderId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(folderId);
      const folderElement = event.currentTarget.closest(".folder-item");
      const folderRect = folderElement.getBoundingClientRect();
      const folderListRect = folderListRef.current.getBoundingClientRect();

      // Check if there's enough space below the folder
      const spaceBelow = folderListRect.bottom - folderRect.bottom;
      const spaceAbove = folderRect.top - folderListRect.top;

      if (spaceBelow >= 100 || spaceBelow > spaceAbove) {
        // Open downwards
        setMenuPosition({
          top: folderRect.bottom - folderListRect.top + 120,
          left: folderRect.right - folderListRect.left - 40, // Adjust this value as needed
        });
      } else {
        // Open upwards
        setMenuPosition({
          top: folderRect.top - folderListRect.top + 30, // Height of the menu, adjust as needed
          left: folderRect.right - folderListRect.left - 30, // Adjust this value as needed
        });
      }
    }
  };

  const handleEditFolder = (folder) => {
    setEditingFolder(folder);
    setShowPopup(true);
    setActiveMenu(null);
  };

  const handleUpdateFolder = (updatedName) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) =>
        folder.id === editingFolder.id
          ? { ...folder, name: updatedName }
          : folder
      )
    );
    setShowPopup(false);
    setEditingFolder(null);
  };

  const handleDeleteFolder = (folderId) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder.id !== folderId)
    );
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={`fixed left-0 top-0 h-full ${isCollapsed ? "w-auto" : "w-custom-width"} bg-newnotes-sidebar-light text-gray-800 pl-2 pr-1 py-2  flex flex-col  transition-all duration-300`}
    >
      {/* Collapsed Sidebar */}
      {isCollapsed && (
        <div className="flex flex-col items-center flex-1">
          {/* Logo */}
          <div className="flex items-center justify-center my-1">
            <button
              onClick={toggleCollapse}
              className="p-1 hover:bg-stone-300 rounded-md"
            >
              <img
                className="h-7 w-7"
                src="/newNotes.png"
                alt="newNotes Logo"
              />
            </button>
          </div>

          {/* Search Icon */}
          <div className="flex items-center justify-center my-1.5">
            <span className="cursor-pointer w-8 h-8 p-1.5 hover:bg-stone-300 rounded-lg">
              <SearchIcon />
            </span>
          </div>

          {/* Folder Icon */}
          <div className="flex items-center justify-center my-1.5">
            <button
              onClick={() => setShowPopup(true)}
              className="p-1 cursor-pointer bg-stone-100 hover:bg-stone-200 rounded-md"
            >
              <CreateFolderIcon size={24} />
            </button>
          </div>

          {/* Folder list */}
          <div className="flex-1 overflow-y-auto scrollbar-thin max-h-[calc(90vh-148px)] p-1">
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="relative flex items-center justify-center p-2 bg-stone-100 hover:bg-red-200 rounded-md transition-all"
              >
                <FolderIcon size={20} stroke="black" />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Expanded Sidebar */}
      {!isCollapsed && (
        <div className="flex flex-col flex-1">
          {/* Logo and App Name */}
          <div className="flex items-center justify-between mt-1 mb-2 pr-1">
            <div className="flex items-center">
              <img
                className="h-7 w-7"
                src="/newNotes.png"
                alt="newNotes Logo"
              />
              <span className="text-black font-bold text-lg hover:text-black ml-0.5">
                NewNotes
              </span>
            </div>
            <button
              onClick={toggleCollapse}
              className="p-1 hover:bg-stone-300 rounded"
            >
              <MenuIcon2 />
            </button>
          </div>

          {/* Search Box */}
          {isAuthenticated && (
            <div className="mb-2 pr-1">
              <input
                type="text"
                placeholder="Search your notes.."
                className="w-full h-9 text-md px-3 py-2 border border-custom-stone-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-custom-stone-light"
              />
            </div>
          )}

          {/* Folders Header */}
          <div className="flex flex-row justify-between w-full px-1">
            <div className="w-5/6 text-md text-custom-stone font-semibold">
              Folders
            </div>
            {isAuthenticated && (
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center justify-center py-1 px-1 bg-stone-100 text-white font-semibold rounded-md hover:bg-stone-200 transition-all"
              >
                <CreateFolderIcon size={20} />
              </button>
            )}
          </div>

          {/* Folder list */}
          <div
            ref={folderListRef}
            className="flex-1 overflow-y-auto max-h-[calc(92vh-128px)] p-1 relative"
          >
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="folder-item relative flex items-center justify-between p-2 bg-stone-100 hover:bg-custom-light-gray-hover rounded-md transition-all mb-1  overflow-hidden"
              >
                <div className="flex items-center w-10/12">
                  <FolderIcon size={16} stroke="blue" />
                  <span className="ml-2 truncate ">{folder.name}</span>
                </div>
                <button
                  onClick={(e) => toggleMenu(folder.id, e)}
                  className="py-1 px-1 rounded-3xl w-1/12"
                >
                  <MenuIcon color={"#777777"} hoverColor="#000000" />
                </button>
              </div>
            ))}

            {/* Popup Menu */}
            {activeMenu !== null && (
              <div
                ref={menuRef}
                style={{
                  position: "fixed",
                  top: `${menuPosition.top}px`,
                  left: `${menuPosition.left}px`,
                }}
                className="rounded-lg bg-newnotes-sidebar-light border border-gray-200 shadow-lg"
              >
                <button
                  onClick={() =>
                    handleEditFolder(folders.find((f) => f.id === activeMenu))
                  }
                  className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-t-lg"
                >
                  <EditIcon />
                  <span className="ml-2">Edit</span>
                </button>
                <button
                  onClick={() => handleDeleteFolder(activeMenu)}
                  className="flex items-center w-full text-left px-4 py-2 text-custom-gray hover:bg-stone-300 rounded-b-lg"
                >
                  <DeleteIcon />
                  <span className="ml-2">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Fixed Profile Icon at Bottom */}
      <div className="mt-auto pr-1">
        {isAuthenticated ? (
          <ProfileIcon isCollapsed={isCollapsed} />
        ) : (
          <div className="space-y-2">
            <Link
              to="/login"
              className="block w-10/12 px-2 py-1 text-center bg-sky-50 text-blue-600 rounded-lg border border-blue-100 hover:text-sky-700 hover:bg-sky-100 hover:border-blue-500 transition duration-150"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-10/12 px-2 py-1 text-center bg-black text-white rounded-md hover:bg-zinc-600 transition duration-150"
            >
              Signup
            </Link>
          </div>
        )}
      </div>

      {/* Folder Popup */}
      {showPopup && (
        <FolderPopup
          onClose={() => {
            setShowPopup(false);
            setEditingFolder(null);
          }}
          onCreateFolder={editingFolder ? handleUpdateFolder : handleAddFolder}
          initialValue={editingFolder ? editingFolder.name : ""}
          isEditing={!!editingFolder}
        />
      )}
    </div>
  );
};

export default SideBar;
