import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlineLink,
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineDotsVertical,
} from 'react-icons/hi';

const ActivityCard = ({ place, index, isDragging }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setShowMenu((prev) => !prev);
  };

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`flex bg-white shadow rounded-lg p-4 items-center relative ${
        isDragging ? 'scale-105 ring-2 ring-purple-500 z-50' : ''
      }`}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col gap-1 justify-center items-center mr-4">
        <span className="w-6 h-0.5 bg-gray-400"></span>
        <span className="w-6 h-0.5 bg-gray-400"></span>
      </div>

      <div className="relative w-20 h-20 mr-4">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute top-2 -left-4 w-9 h-9">
          <svg
            viewBox="0 0 20 20"
            fill="#9333ea"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M10 2C6.686 2 4 4.686 4 8c0 4.478 5.246 9.207 5.468 9.41a.5.5 0 0 0 .688 0C10.754 17.207 16 12.478 16 8c0-3.314-2.686-6-6-6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
            {index + 1}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start text-gray-500">
          <h3 className="font-semibold text-lg">{place.title}</h3>

          {/* Icons on large screens */}
          <div className="hidden sm:flex gap-4 text-xl">
            <HiOutlineLocationMarker />
            <HiOutlineLink />
            <HiOutlineTrash className="text-red-500" />
          </div>

          {/* 3-dot menu for small screens */}
          <div className="relative flex gap-4 sm:hidden">
          <HiOutlineLocationMarker />
            <HiOutlineDotsVertical
              className="text-xl cursor-pointer"
              onClick={toggleMenu}
            />
            
            {showMenu && (
              <div className="absolute right-0 mt-1 w-24 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <button className="flex items-center px-3 py-2 hover:bg-gray-100 w-full text-sm text-gray-700">
                  <HiOutlineLink className="mr-2" /> Link
                </button>
                <button className="flex items-center px-3 py-2 hover:bg-gray-100 w-full text-sm text-red-500">
                  <HiOutlineTrash className="mr-2" /> Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-400 mr-1" />
          {place.rating} <span className="ml-1">({place.reviews})</span>
        </div>

        <div className="flex justify-between items-start mt-2">
        <p className="text-sm text-gray-700 flex-1">{place.description}</p>
        <div className="text-l text-gray-600 ml-2 mt-1 shrink-0">
          <HiOutlinePencil />
        </div>
      </div>

      </div>
    </motion.div>
  );
};

export default ActivityCard;
