import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ActivityCard from "./ActivityCard";

const ItineraryDay = ({ day, activities }) => {
  const [items, setItems] = useState(activities);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = [...items];
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setItems(reordered);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{day}</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="itinerary">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((activity, index) => (
                <Draggable key={activity.id} draggableId={activity.id} index={index}>
                  {(provided) => (
                    <div
                      className="mb-4"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ActivityCard activity={activity} number={index + 1} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ItineraryDay;
