import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/Images/pic-1.jpeg";

export default function Profile() {
  const [open, setOpen] = useState(false);

  // Dummy user data
  const user = {
    name: "Sarvesh Bait",
    username: "@sarveshbait22",
    bio: "Frontend Developer 💻 | Cricket Lover 🏏 | Exploring the world 🌍",
    avatar: profileImg,
    followers: 120,
    following: 180,
    posts: 4,
  };

  return (
    <div className="p-6">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition"
      >
        Open Profile
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              {/* Profile Details */}
              <div className="flex flex-col items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-teal-500 shadow-md"
                />
                <h2 className="mt-4 text-xl font-bold text-teal-600">
                  {user.name}
                </h2>
                <p className="text-gray-500">{user.username}</p>
                <p className="mt-3 text-center text-gray-700">{user.bio}</p>

                {/* Stats */}
                <div className="flex gap-6 mt-6">
                  <div className="text-center">
                    <p className="font-bold text-lg">{user.posts}</p>
                    <p className="text-sm text-gray-500">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">{user.followers}</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">{user.following}</p>
                    <p className="text-sm text-gray-500">Following</p>
                  </div>
                </div>

                {/* Edit Button */}
                <button className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition">
                  Edit Profile
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
