import { React, useState } from "react";
import { useAuth } from "./../store/authStore";
import { Camera } from "lucide-react";

import toast from "react-hot-toast";

const Profile = () => {
  const { authUser } = useAuth();

  const profileImage = authUser?.profilePic || "https://placehold.co/400"; // Placeholder image in case no image is available
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && authUser?.userId) {
      setImage(file);
    } else {
      console.error("User  ID is missing or file is invalid");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full bg-black max-w-md p-8 rounded-2xl shadow-xl space-y-6">
        <div className="relative flex justify-center">
          {/* Profile Image */}
          <img
            className="border-4 border-gray-300 rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 object-cover"
            src={profileImage}
            alt="Profile"
          />

          {/* Camera Icon */}
          <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all">
            <Camera color="white" size={24} />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* User Details */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            {authUser?.fullName || "User  Name"}
          </h2>
          <p className="text-sm text-white">
            {authUser?.email || "user@example.com"}
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center mt-4">
          <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
