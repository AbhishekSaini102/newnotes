import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFolderById } from "../store/folderSlice.js";
import Loader from "../utils/Loader.jsx";
import ErrorMessage from "../utils/ErrorMessage.jsx";

const FolderPage = () => {
  const { folderId } = useParams(); // Get folderId from URL params
  const dispatch = useDispatch();

  const { currentFolder, isLoading, error } = useSelector(
    (state) => state.folders
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Log at the start of the component
//   console.log("FolderPage component rendered");
//   console.log("Folder ID from params:", folderId);

  useEffect(() => {
    // console.log("Folder ID:", folderId);

    if (folderId && isAuthenticated) {
      dispatch(getFolderById(folderId)); // Dispatch the action with folderId
    }
  }, [dispatch, folderId, isAuthenticated]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  if (!currentFolder) return <p>Folder not found.</p>;

  return (
    <div className="folder-page-container p-4">
      <h1 className="text-2xl font-bold">{currentFolder.name}</h1>
      <div className="notes-list mt-4">
        {currentFolder.notes && currentFolder.notes.length > 0 ? (
          currentFolder.notes.map((note) => (
            <div key={note.id} className="note-item mb-2 p-2 border rounded">
              <h2 className="text-xl">{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <p>No notes available in this folder.</p>
        )}
      </div>
    </div>
  );
};

export default FolderPage;
