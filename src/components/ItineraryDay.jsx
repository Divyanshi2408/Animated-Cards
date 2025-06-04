import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ActivityCard from "./ActivityCard";

const Itinerary = ({ places, setPlaces }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updated = Array.from(places);
    const [moved] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, moved);
    setPlaces(updated);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
  <Droppable
    droppableId="itinerary-list"
    renderClone={(provided, snapshot, rubric) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="shadow-2xl scale-[1.01] z-50"
      >
        <ActivityCard place={places[rubric.source.index]} index={rubric.source.index} />
      </div>
    )}
  >
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className="space-y-4"
      >
        {places.map((place, index) => (
          <Draggable
            key={place.id}
            draggableId={String(place.id)}
            index={index}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <ActivityCard place={place} index={index} />
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>

  );
};

export default Itinerary;
