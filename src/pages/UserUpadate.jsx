import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserUpadate = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image");
      return;
    }

    if (file.size > 1024 * 1024) {
      alert("Image size should be less than 1MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const formData = new FormData(e.target);
      const username = formData.get("username");
      const file = formData.get("profilePicture");
     const res =  await axios.patch(`${API_URL}/api/users/update`, { username }, {
        withCredentials: true
      })
      console.log(res);
      navigate("/user/profile");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="h-full p-4 flex items-center justify-center  bg-gray-100 ">

      <div className="w-full bg-white rounded-2xl shadow-lg p-6">

        <h1 className="text-2xl font-bold text-center">
          Update Profile
        </h1>

        <p className="text-center text-gray-500 mt-1 mb-6">
          Update your profile information
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission logic here
          handleSubmit(e);
        }}>

          <div className="flex flex-col gap-5">

            {/* Profile Picture */}
            <div>
              <label className="font-medium">
                Profile Picture
              </label>

              <p className="text-sm text-gray-500 mb-3">
                Upload your profile picture
              </p>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
                className={`cursor-pointer border-2 border-dashed rounded-xl p-6 text-center transition
                  ${dragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400"
                  }`}
              >

                {preview ? (
                  <img
                    src={preview}
                    alt="profile preview"
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                ) : (
                  <>
                    <div className="text-4xl mb-2">📷</div>

                    <p className="font-medium">
                      Drag & Drop your image
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      or click to browse
                    </p>
                  </>
                )}

                <p className="text-xs text-gray-400 mt-3">
                  PNG, JPG or JPEG • Max 1MB
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="font-medium">
                Username
              </label>

              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                className="border rounded-lg w-full p-2 mt-2 outline-none focus:border-blue-500"
              />
            </div>


          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg mt-6 transition"
          >
            Update Profile
          </button>

        </form>

      </div>
    </div>
  );
};

export default UserUpadate;