import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineLink } from "react-icons/hi";

const ActivityCard = ({ activity, number }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg p-3 items-start">
      <div className="text-sm bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        {number}
      </div>
      <img
        src={activity.image}
        alt={activity.title}
        className="w-20 h-20 rounded object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{activity.title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <FaStar className="text-yellow-400 mr-1" />
          {activity.rating} <span className="ml-1">({activity.reviews})</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">{activity.description}</p>
      </div>
      <div className="flex flex-col items-center ml-4 space-y-2">
        <HiOutlineLocationMarker className="text-gray-500" />
        <HiOutlineLink className="text-gray-500" />
      </div>
    </div>
  );
};

export default ActivityCard;
