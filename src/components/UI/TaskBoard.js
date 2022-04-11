import React, { useRef, useState } from "react";
import "./TaskBoard.css";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

function TaskBoard(props) {
  const Data = useRef();
  const [count, setCount] = useState([]);
  const Navigate = useNavigate();
  Data.current = JSON.parse(localStorage.getItem("data"));
  Data.current = Data.current === null ? [] : Data.current;

  let arr = [];
  let old = JSON.parse(localStorage.getItem("count"));
  const checkbox = (e, id) => {
    if (old) {
      arr = old;
    }
    if (e.target.checked) {
      setCount(count + 1);
      let coun = Data.current.find((el) => {
        return el.id === id;
      });
      arr.push(coun);
    }
    setCount(arr);
    localStorage.setItem("count", JSON.stringify(arr));
    const data = Data.current.filter((data) => data.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const clear = () => {
    setCount([]);
    localStorage.removeItem("count");
    Navigate("/");
  };

  const dragEnd = (result) => {
    console.log(result);
    const items = [...Data.current];
    const [orderproduct] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, orderproduct);
    Data.current = items;
    localStorage.setItem("data", JSON.stringify(items));
  };

  return (
    <div className="card">
      <div className="taskNav">
        <img src="taskLogo.png" alt="task-logo" />
        <h1>Task Board </h1>
        <input
          type="button"
          value="Add Task"
          onClick={() => Navigate("/add")}
        />
      </div>

      <DragDropContext onDragEnd={dragEnd}>
        <Droppable
          droppableId="productSequence"
          direction="horizontal"
          type="row"
        >
          {(provided) => (
            <div
              className="Task-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Data.current.map((index, id) => {
                return (
                  <Draggable
                    draggableId={`draggable-${id}`}
                    key={`draggable-${id}`}
                    index={id}
                  >
                    {(provided) => (
                      <span
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        {...provided.placeholder}
                        ref={provided.innerRef}
                      >
                        <Card
                          value={index}
                          data={Data.current}
                          checkbox={checkbox}
                        />
                      </span>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="bottom">
        <div className="dropup">
          <button className="dropbtn count-btn">
            Completed({count.length})▲
          </button>
          <div className="dropup-content">
            <div className="count" onClick={() => clear()}>
              <p>Clear All</p>
              <img src="delete.png" alt="delet" className="count-del" />
              <ul style={{ listStyleType: "none" }}>
                {count.map((index, id) => (
                  <li key={id}>{index.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskBoard;
