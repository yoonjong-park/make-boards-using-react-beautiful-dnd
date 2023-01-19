import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getModeForUsageLocation } from "typescript";

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => {
    console.log("이동");
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {magic => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable draggableId={toDo} index={index}>
                  {magic => (
                    <li ref={magic.innerRef} {...magic.draggableProps}>
                      <span {...magic.dragHandleProps}>😆</span>
                      {toDo}
                    </li>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
