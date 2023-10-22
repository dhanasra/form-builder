import React from 'react';
import { useDrop } from 'react-dnd';

const DropTargetComponent = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => {
      // Handle the drop event, e.g., add the dropped component to the content.
      // You can use Redux, state, or other mechanisms to manage content.
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: `2px dashed ${isOver ? 'red' : 'black'}`,
        padding: '10px',
        minHeight: '200px',
      }}
    >
      Drop components here
    </div>
  );
};

export default DropTargetComponent;
