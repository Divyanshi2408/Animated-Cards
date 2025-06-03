import React, { useState } from "react";
import Itinerary from "./components/ItineraryDay";

const initialPlaces = [
  {
    id: "1",
    title: "India Gate",
    description:
      "India Gate is a war memorial located in New Delhi, along the Rajpath.",
    rating: "4.6",
    reviews: "281,124",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/India_Gate.jpg",
  },
  {
    id: "2",
    title: "Red Fort",
    description: "The Red Fort is a historical fort in the old Delhi area.",
    rating: "4.5",
    reviews: "168,729",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Red_Fort.jpg",
  },
  {
    id: "3",
    title: "Qutub Minar",
    description:
      "Qutub Minar is a minaret or a victory tower located in Delhi's Mehrauli area.",
    rating: "4.5",
    reviews: "151,556",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Qutub_Minar_India.jpg",
  },
];

function App() {
  const [places, setPlaces] = useState(initialPlaces);

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Itinerary</h1>
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
  );
}

export default App;
