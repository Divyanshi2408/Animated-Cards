// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { HiOutlineLocationMarker, HiOutlineLink, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

// const ActivityCard = ({ place, index }) => {
//   return (
//     <div className="flex bg-white shadow rounded-lg p-4">
//     <div></div>
//       <div className="flex items-center justify-center bg-purple-600 text-white font-bold w-6 h-6 rounded-full mr-3">
//         {index + 1}
//       </div>
//       <img
//         src={place.image}
//         alt={place.title}
//         className="w-20 h-20 rounded object-cover mr-4"
//       />
//       <div className="flex-1">
//        <div className="flex  justify-between ml-3 text-gray-500 text-xl">
//         <h3 className="font-semibold text-lg">{place.title}</h3>
//        <div className="flex gap-4">
//         <HiOutlineLocationMarker />
//         <HiOutlineLink />
//         <HiOutlineTrash className="text-red-500"/>
//         </div>
//       </div>
//         <div className="flex items-center text-sm text-gray-600 mt-1">
//           <FaStar className="text-yellow-400 mr-1" />
//           {place.rating} <span className="ml-1">({place.reviews})</span>
//         </div>
//         <div className="flex justify-between ">
//         <p className="text-sm text-gray-700 mt-2">{place.description}</p>
//        <HiOutlinePencil/>
//        </div>
//       </div>
      
//     </div>
//   );
// };

// export default ActivityCard;
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineLink,
  HiOutlineTrash,
  HiOutlinePencil,
} from "react-icons/hi";

const ActivityCard = ({ place, index }) => {
  return (
    <div className="flex bg-white shadow rounded-lg p-4 items-center relative">
     
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
          <div className="flex gap-4 text-xl">
            <HiOutlineLocationMarker />
            <HiOutlineLink />
            <HiOutlineTrash className="text-red-500" />
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-400 mr-1" />
          {place.rating} <span className="ml-1">({place.reviews})</span>
        </div>

        <div className="flex justify-between items-start mt-2">
          <p className="text-sm text-gray-700">{place.description}</p>
          <HiOutlinePencil />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;



