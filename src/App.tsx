import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
              <Draggable draggableId="first" index={0}>
                {magic => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {magic => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
