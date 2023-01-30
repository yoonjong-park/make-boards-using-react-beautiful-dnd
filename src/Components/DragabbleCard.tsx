import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props =>
    props.isDragging ? "#0773E0" : props.theme.cardColor};
  box-shadow: ${props =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none"};
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DragabbleCard = ({ toDo, index }: IDragabbleCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}>
          <span {...magic.dragHandleProps}>😆</span>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DragabbleCard);
