import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const value = props.value;
  let item=JSON.parse(localStorage.getItem("data"))
  
  const deleteValue = (id) => {
    const data = item.filter((data) => data.id !== id);
   localStorage.setItem("data",JSON.stringify(data))
   navigate("/")
  };

  const selectedDate = new Date(value.date);
  const selectD = `${
    selectedDate.getDate() < 10 ? "0" + selectedDate.getDate() : selectedDate.getDate()
  }-${
    selectedDate.getMonth() + 1 < 10
      ? "0" + (selectedDate.getMonth() + 1)
      : selectedDate.getMonth() + 1
  }-${selectedDate.getFullYear()}`;

  return (
    <div className="test">
      <input type="checkbox" onChange={(e) => props.checkbox(e, value.id)} />
      <h4>
        {selectD}
      </h4>
      <p >{value.title}</p>
      <div style={{height: "110px",padding:"10px",font:"message-box"}}>{value.note}</div>
      <img
        src="edit.jpeg"
        alt="edit"
        className="edit"
        onClick={() =>navigate(`/update/${value.id}`)}
      />
      <img
        src="delete.png"
        alt="delete"
        className="delete"
        onClick={() => deleteValue(value.id)}
      />
    </div>
  );
}

export default React.memo(Card);
