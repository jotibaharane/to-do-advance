import React from "react";
import { useNavigate } from "react-router-dom";
function WellCome() {
  const navigate = useNavigate();
  return (
    <div className="wellContainer">
      <div className="wellHead">
        <img src="toDoLogo.png" alt="logo" className="wellLogo" />
        <h1>Todays To Do List</h1>
      </div>
      <div className="wellBody">
        <p>
          If you are planning somthing 🤔,then store 🏬 your plan here and
          Manage your time ⏲️
        </p>
        <input
          type="button"
          value={"LET'S START!"}
          className="wellBtn"
          onClick={() => navigate("/add")}
        />
      </div>
    </div>
  );
}

export default WellCome;
