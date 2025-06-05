import React, { useState } from "react";
import Itinerary from "./components/ItineraryDay";
import { HiOutlineMenu } from "react-icons/hi";

const initialPlaces = [
  {
    id: "1",
    title: "India Gate",
    description:
      "India Gate is a war memorial located in New Delhi, along the Rajpath.It is dedicated to the 82,000 soldiers,both Indian and British.",
    rating: "4.6",
    reviews: "281,124",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/16/e0/7b/c2/picture-clicked-at-the.jpg",
  },
  {
    id: "2",
    title: "Red Fort",
    description: "The Red Fort is a historical fort in the old Delhi area,on the bank of Yamuna",
    rating: "4.5",
    reviews: "168,729",
    image: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAzNDMwNzE1ODA1NjcyNzk2/fort-agra-easy-peasy.jpg",
  },
  {
    id: "3",
    title: "Qutub Minar",
    description:
      "Qutub Minar is a minaret or a victory tower located in the Qutub complex,a UNESCO Worls Heritage Site in Delhi's Mehrauli area.",
    rating: "4.5",
    reviews: "151,556",
    image: "https://www.thedelhitours.com/blog/wp-content/uploads/2024/09/Qutub-Minar-750x564.jpg",
  },
  {
    id: "4",
    title: "Lotus Temple",
    description:
      "Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baha'i faith.",
    rating: "4.5",
    reviews: "151,556",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg",
  },
  {
    id: "5",
    title: "Humayun's Tomb",
    description:
      "Humayun's Tomb is the final resting place of Mughal Emperor Humayun in Delhi.",
    rating: "4.5",
    reviews: "151,556",
    image: "https://whc.unesco.org/uploads/thumbs/site_0232_0005-750-750-20210425155601.jpg",
  },
];

function App() {
  const [places, setPlaces] = useState(initialPlaces);

  return (
    <div className="h-screen w-screen">
      {/* Header only visible on small screens */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-pink-500">Y2Z Travel</h1>
        <HiOutlineMenu className="text-2xl" />
      </div>

      {/* Main layout */}
      <div className="flex h-full">
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          {/* Title only visible on md+ */}
          <h1 className="hidden md:block text-3xl font-bold mb-4 text-pink-500">Y2Z Travel</h1>
          <h1 className="text-2xl font-bold px-10">Itinerary</h1>
          <h4 className="px-10 mb-5">Day</h4>
          <Itinerary places={places} setPlaces={setPlaces} />
        </div>

        <div className="hidden md:block w-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed"
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
