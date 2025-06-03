import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineLink, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

const ActivityCard = ({ place, index }) => {
  return (
    <div className="flex bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-center bg-purple-600 text-white font-bold w-6 h-6 rounded-full mr-3">
        {index + 1}
      </div>
      <img
        src={place.image}
        alt={place.title}
        className="w-20 h-20 rounded object-cover mr-4"
      />
      <div className="flex-1">
       <div className="flex  justify-between ml-3 text-gray-500 text-xl">
        <h3 className="font-semibold text-lg">{place.title}</h3>
       <div className="flex gap-4">
        <HiOutlineLocationMarker />
        <HiOutlineLink />
        <HiOutlineTrash/>
        </div>
      </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-400 mr-1" />
          {place.rating} <span className="ml-1">({place.reviews})</span>
        </div>
        <div className="flex justify-between ">
        <p className="text-sm text-gray-700 mt-2">{place.description}</p>
       <HiOutlinePencil/>
       </div>
      </div>
      
    </div>
  );
};

export default ActivityCard;
