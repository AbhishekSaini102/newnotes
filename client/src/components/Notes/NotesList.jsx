// import PropTypes from "prop-types";

// const NotesList = ({ notes, isLoading, error, onNoteClick }) => {
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-full bg-white">
//         {/* Loading Spinner can be added here */}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-full text-center p-5 bg-white rounded-lg">
//         {/* <div className="text-4xl mb-4">⚠️</div> */}
//         <h3 className="text-2xl font-bold mb-2 text-gray-800">
//           Error loading notes
//         </h3>
//         <p className="text-gray-600">{error.message}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(notes) || notes.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-auto text-center p-5 bg-white rounded-lg">
//         <svg
//           width="120"
//           height="120"
//           viewBox="0 0 120 120"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-labelledby="betterNotebookTitle betterNotebookDesc"
//           role="img"
//           className="mb-4"
//         >
//           <title id="betterNotebookTitle">Stylized Notebook</title>
//           <desc id="betterNotebookDesc">
//             A creative notebook icon with binding, cover, and page details.
//           </desc>

//           {/* Notebook Cover */}
//           <rect
//             x="15"
//             y="20"
//             width="90"
//             height="80"
//             rx="6"
//             fill="#F3F4F6"
//             stroke="#9CA3AF"
//             strokeWidth="2"
//           />

//           {/* Notebook Spine */}
//           <rect
//             x="20"
//             y="20"
//             width="10"
//             height="80"
//             fill="#6B7280"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />

//           {/* Binding Rings */}
//           <circle
//             cx="25"
//             cy="35"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />
//           <circle
//             cx="25"
//             cy="55"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />
//           <circle
//             cx="25"
//             cy="75"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />

//           {/* Page Lines */}
//           <line
//             x1="35"
//             y1="35"
//             x2="95"
//             y2="35"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="45"
//             x2="95"
//             y2="45"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="55"
//             x2="95"
//             y2="55"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="65"
//             x2="95"
//             y2="65"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="75"
//             x2="95"
//             y2="75"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//         </svg>
//         <h3 className="text-2xl font-bold mb-2 text-gray-800">No notes yet</h3>
//         <p className="text-gray-600">Start jotting down your ideas!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white p-5 z-10 ">
//       <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
//         {notes.map((note) =>
//           note && note.title && note.content ? (
//             <div
//               key={note._id}
//               className="bg-white rounded-lg shadow-sm  h-full cursor-pointer transition-shadow duration-300 ease-in-out flex flex-col justify-between"
//               onClick={() => onNoteClick(note)}
//               style={{ backgroundColor: note.color || "#ffffff" }}
//             >
//               {note.photos && note.photos.length > 0 && (
//                 <img
//                   src={note.photos[0]}
//                   alt={note.title}
//                   className="w-full h-full object-cover rounded-t p " // Allow the height to be auto to show full image
//                 />
//               )}
//               <div className="p-2">
//                 <h3 className="text-xl font-bold h-auto overflow-hidden text-ellipsis whitespace-nowrap">
//                   {note.title}
//                 </h3>
//                 <p className="text-gray-600 overflow-hidden line-clamp-3 ">
//                   {note.content}
//                 </p>
//                 <div className="text-gray-400 mt-2">
//                   {new Date(note.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

// NotesList.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       createdAt: PropTypes.string.isRequired,
//       color: PropTypes.string,
//       photos: PropTypes.arrayOf(PropTypes.string),
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   error: PropTypes.object,
//   onNoteClick: PropTypes.func.isRequired,
// };

// export default NotesList;

// import PropTypes from "prop-types";

// const NotesList = ({ notes, isLoading, error, onNoteClick }) => {
//   // if (isLoading) {
//   //   return (
//   //     <div className="flex justify-center items-center h-full bg-white">
//   //       {/* Loading Spinner can be added here */}
//   //     </div>
//   //   );
//   // }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-full text-center p-5 bg-white rounded-lg">
//         <h3 className="text-2xl font-bold mb-2 text-gray-800">
//           Error loading notes
//         </h3>
//         <p className="text-gray-600">{error.message}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(notes) || notes.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-auto text-center p-5 bg-white rounded-lg">
//         <svg
//           width="120"
//           height="120"
//           viewBox="0 0 120 120"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-labelledby="betterNotebookTitle betterNotebookDesc"
//           role="img"
//           className="mb-4"
//         >
//           <title id="betterNotebookTitle">Stylized Notebook</title>
//           <desc id="betterNotebookDesc">
//             A creative notebook icon with binding, cover, and page details.
//           </desc>

//           {/* Notebook Cover */}
//           <rect
//             x="15"
//             y="20"
//             width="90"
//             height="80"
//             rx="6"
//             fill="#F3F4F6"
//             stroke="#9CA3AF"
//             strokeWidth="2"
//           />

//           {/* Notebook Spine */}
//           <rect
//             x="20"
//             y="20"
//             width="10"
//             height="80"
//             fill="#6B7280"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />

//           {/* Binding Rings */}
//           <circle
//             cx="25"
//             cy="35"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />
//           <circle
//             cx="25"
//             cy="55"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />
//           <circle
//             cx="25"
//             cy="75"
//             r="3"
//             fill="#F9FAFB"
//             stroke="#4B5563"
//             strokeWidth="1"
//           />

//           {/* Page Lines */}
//           <line
//             x1="35"
//             y1="35"
//             x2="95"
//             y2="35"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="45"
//             x2="95"
//             y2="45"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="55"
//             x2="95"
//             y2="55"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="65"
//             x2="95"
//             y2="65"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//           <line
//             x1="35"
//             y1="75"
//             x2="95"
//             y2="75"
//             stroke="#9CA3AF"
//             strokeWidth="1"
//           />
//         </svg>
//         <h3 className="text-2xl font-bold mb-2 text-gray-800">No notes yet</h3>
//         <p className="text-gray-600">Start jotting down your ideas!</p>
//       </div>
//     );
//   }

//   // Sort the notes based on the createdAt timestamp in descending order
//   const sortedNotes = [...notes].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return (
//     <div className="bg-white p-5 z-10 ">
//       <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
//         {sortedNotes.map((note) =>
//           note && note.title && note.content ? (
//             <div
//               key={note._id}
//               className="bg-white rounded-lg shadow-sm  h-full cursor-pointer transition-shadow duration-300 ease-in-out flex flex-col justify-between"
//               onClick={() => onNoteClick(note)}
//               style={{ backgroundColor: note.color || "#ffffff" }}
//             >
//               {note.photos && note.photos.length > 0 && (
//                 <img
//                   src={note.photos[0]}
//                   alt={note.title}
//                   className="w-full h-full object-cover rounded-t p " // Allow the height to be auto to show full image
//                 />
//               )}
//               <div className="p-2">
//                 <h3 className="text-xl font-bold h-auto overflow-hidden text-ellipsis whitespace-nowrap">
//                   {note.title}
//                 </h3>
//                 <p className="text-gray-600 overflow-hidden line-clamp-3 ">
//                   {note.content}
//                 </p>
//                 <div className="text-gray-400 mt-2">
//                   {new Date(note.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

// NotesList.propTypes = {
//   notes: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       createdAt: PropTypes.string.isRequired,
//       color: PropTypes.string,
//       photos: PropTypes.arrayOf(PropTypes.string),
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   error: PropTypes.object,
//   onNoteClick: PropTypes.func.isRequired,
// };

// export default NotesList;

import PropTypes from "prop-types";

const NotesList = ({ notes, isLoading, error, onNoteClick }) => {
  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-full bg-white">
  //       {/* Loading Spinner can be added here */}
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-full text-center p-5 bg-white rounded-lg">
  //       <h3 className="text-2xl font-bold mb-2 text-gray-800">
  //         Error loading notes
  //       </h3>
  //       <p className="text-gray-600">{error.message}</p>
  //     </div>
  //   );
  // }

  if (!Array.isArray(notes) || notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-auto text-center p-5 bg-white rounded-lg">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="betterNotebookTitle betterNotebookDesc"
          role="img"
          className="mb-4"
        >
          <title id="betterNotebookTitle">Stylized Notebook</title>
          <desc id="betterNotebookDesc">
            A creative notebook icon with binding, cover, and page details.
          </desc>

          {/* Notebook Cover */}
          <rect
            x="15"
            y="20"
            width="90"
            height="80"
            rx="6"
            fill="#F3F4F6"
            stroke="#9CA3AF"
            strokeWidth="2"
          />

          {/* Notebook Spine */}
          <rect
            x="20"
            y="20"
            width="10"
            height="80"
            fill="#6B7280"
            stroke="#4B5563"
            strokeWidth="1"
          />

          {/* Binding Rings */}
          <circle
            cx="25"
            cy="35"
            r="3"
            fill="#F9FAFB"
            stroke="#4B5563"
            strokeWidth="1"
          />
          <circle
            cx="25"
            cy="55"
            r="3"
            fill="#F9FAFB"
            stroke="#4B5563"
            strokeWidth="1"
          />
          <circle
            cx="25"
            cy="75"
            r="3"
            fill="#F9FAFB"
            stroke="#4B5563"
            strokeWidth="1"
          />

          {/* Page Lines */}
          <line
            x1="35"
            y1="35"
            x2="95"
            y2="35"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
          <line
            x1="35"
            y1="45"
            x2="95"
            y2="45"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
          <line
            x1="35"
            y1="55"
            x2="95"
            y2="55"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
          <line
            x1="35"
            y1="65"
            x2="95"
            y2="65"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
          <line
            x1="35"
            y1="75"
            x2="95"
            y2="75"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">No notes yet</h3>
        <p className="text-gray-600">Start jotting down your ideas!</p>
      </div>
    );
  }

  // Sort the notes based on the createdAt timestamp in descending order
  const sortedNotes = [...notes].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="bg-white p-5 z-10 ">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {sortedNotes.map((note) =>
          note ? ( // { && note.title && note.content ?}
            <div
              key={note._id}
              className="bg-white rounded-lg shadow-md w-auto h-auto cursor-pointer transition-shadow duration-300 ease-in-out flex flex-col justify-between"
              onClick={() => onNoteClick(note)}
              style={{ backgroundColor: note.color || "#ffffff" }}
            >
              {note.photos && note.photos.length > 0 && (
                <img
                  src={note.photos[0]}
                  alt={note.title}
                  className="w-auto h-64 object-cover rounded-t  " // Allow the height to be auto to show full image
                />
              )}
              <div className="p-2">
                <h3 className="text-xl font-bold h-6 overflow-hidden text-ellipsis whitespace-nowrap mb-2">
                  {note.title}
                </h3>
                <p className="text-gray-600 overflow-hidden line-clamp-3 ">
                  {note.content}
                </p>
                <div className="text-gray-400 mt-2">
                  {new Date(note.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      color: PropTypes.string,
      photos: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  onNoteClick: PropTypes.func.isRequired,
};

export default NotesList;






