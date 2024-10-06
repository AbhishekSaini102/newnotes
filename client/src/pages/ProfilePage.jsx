/* eslint-disable no-unused-vars */
// import React from "react";
// import { useSelector } from "react-redux";

// const ProfilePage = () => {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Profile</h1>
//       {user && (
//         <div>
//           <img
//             src={user.avatar}
//             alt="User Avatar"
//             className="w-20 h-20 rounded-full"
//           />
//           <p>
//             <strong>Name:</strong> {user.fullName}
//           </p>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           {/* Add other user details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-4 md:p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-2">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      {user ? (
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-xl font-semibold mb-2">
            <strong>Name:</strong> {user.fullName}
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add other user details here */}
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;


//instagram ui code
// import React, { useState } from "react";
// import {
//   Grid,
//   Camera,
//   Settings,
//   Heart,
//   MessageCircle,
//   Bookmark,
// } from "lucide-react";

// const ProfilePage = () => {
//   const [activeTab, setActiveTab] = useState("posts");

//   const user = {
//     username: "johndoe",
//     fullName: "John Doe",
//     avatar: "/api/placeholder/150/150",
//     bio: "Professional photographer | Travel enthusiast | Coffee lover",
//     postsCount: 248,
//     followersCount: "10.5k",
//     followingCount: 526,
//     posts: [
//       "/api/placeholder/300/300",
//       "/api/placeholder/300/300",
//       "/api/placeholder/300/300",
//       "/api/placeholder/300/300",
//       "/api/placeholder/300/300",
//       "/api/placeholder/300/300",
//     ],
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white">
//       <header className="p-4 border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-2xl font-semibold">{user.username}</h1>
//           <div className="flex space-x-2">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <Camera size={24} />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <Settings size={24} />
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center space-x-8">
//           <img
//             src={user.avatar}
//             alt={user.fullName}
//             className="w-20 h-20 rounded-full"
//           />
//           <div className="flex-grow">
//             <div className="flex justify-between mb-4">
//               <div className="text-center">
//                 <div className="font-semibold">{user.postsCount}</div>
//                 <div className="text-gray-500 text-sm">Posts</div>
//               </div>
//               <div className="text-center">
//                 <div className="font-semibold">{user.followersCount}</div>
//                 <div className="text-gray-500 text-sm">Followers</div>
//               </div>
//               <div className="text-center">
//                 <div className="font-semibold">{user.followingCount}</div>
//                 <div className="text-gray-500 text-sm">Following</div>
//               </div>
//             </div>
//             <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
//               Edit Profile
//             </button>
//           </div>
//         </div>
//         <div className="mt-4">
//           <h2 className="font-semibold">{user.fullName}</h2>
//           <p className="text-gray-600">{user.bio}</p>
//         </div>
//       </header>
//       <nav className="flex justify-around border-b">
//         <button
//           className={`py-4 px-6 ${activeTab === "posts" ? "border-b-2 border-black" : ""}`}
//           onClick={() => setActiveTab("posts")}
//         >
//           <Grid size={24} />
//         </button>
//         <button
//           className={`py-4 px-6 ${activeTab === "saved" ? "border-b-2 border-black" : ""}`}
//           onClick={() => setActiveTab("saved")}
//         >
//           <Bookmark size={24} />
//         </button>
//         <button
//           className={`py-4 px-6 ${activeTab === "tagged" ? "border-b-2 border-black" : ""}`}
//           onClick={() => setActiveTab("tagged")}
//         >
//           <Camera size={24} />
//         </button>
//       </nav>
//       <div className="grid grid-cols-3 gap-1">
//         {user.posts.map((post, index) => (
//           <div key={index} className="relative group">
//             <img
//               src={post}
//               alt={`Post ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <div className="flex space-x-4 text-white">
//                 <span className="flex items-center">
//                   <Heart size={20} className="mr-1" /> 1.2k
//                 </span>
//                 <span className="flex items-center">
//                   <MessageCircle size={20} className="mr-1" /> 24
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



// import React from "react";
// import { useSelector } from "react-redux";
// import { Camera, MapPin, Link as LinkIcon, Calendar } from "lucide-react";

// const ProfilePage = () => {
//   const user = useSelector((state) => state.auth.user);

//   if (!user) {
//     return <div className="p-4 text-center">Loading user data...</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
//       <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-32"></div>
//       <div className="px-6 py-4">
//         <div className="flex flex-col sm:flex-row items-center">
//           <img
//             src={user.avatar || "/api/placeholder/150/150"}
//             alt={`${user.fullName}'s avatar`}
//             className="w-32 h-32 rounded-full border-4 border-white -mt-16 shadow-lg"
//           />
//           <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
//             <h1 className="text-3xl font-bold text-gray-900">
//               {user.fullName}
//             </h1>
//             <p className="text-gray-600">{user.email}</p>
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {user.location && (
//             <div className="flex items-center text-gray-700">
//               <MapPin size={20} className="mr-2" />
//               <span>{user.location}</span>
//             </div>
//           )}
//           {user.website && (
//             <div className="flex items-center text-gray-700">
//               <LinkIcon size={20} className="mr-2" />
//               <a
//                 href={user.website}
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {user.website.replace(/^https?:\/\//, "")}
//               </a>
//             </div>
//           )}
//           {user.joinDate && (
//             <div className="flex items-center text-gray-700">
//               <Calendar size={20} className="mr-2" />
//               <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
//             </div>
//           )}
//         </div>

//         {user.bio && <p className="mt-4 text-gray-700">{user.bio}</p>}

//         <div className="mt-6 flex justify-center sm:justify-start space-x-2">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
//             Edit Profile
//           </button>
//           <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300">
//             edit Profile
//           </button>
//         </div>
//       </div>

//       <div className="px-6 py-4 bg-gray-50">
//         <h2 className="text-xl font-bold text-gray-900 mb-4">Activity</h2>
//         {/* Add user activity or stats here */}
//         <p className="text-gray-600">No recent activity to display.</p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;