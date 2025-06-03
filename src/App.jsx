import React from "react";
import ItineraryDay from "./components/ItineraryDay";

const sampleActivities = [
  {
    id: "1",
    title: "India Gate",
    description: "India Gate is a war memorial...",
    rating: 4.6,
    reviews: "281,124",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/India_Gate.jpg",
  },
  {
    id: "2",
    title: "Red Fort",
    description: "The Red Fort is a historical fort...",
    rating: 4.5,
    reviews: "168,729",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Red_Fort.jpg",
  },
  {
    id: "3",
    title: "Qutub Minar",
    description: "Qutub Minar is a minaret...",
    rating: 4.5,
    reviews: "151,556",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Qutub_Minar_India.jpg",
  },
];

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Itinerary</h1>
        <ItineraryDay day="Day 1" activities={sampleActivities} />
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
