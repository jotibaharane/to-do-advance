import "./App.css";
import React, { useEffect, useRef, useState} from "react";
import WellCome from "./components/UI/WellCome";
import TaskBoard from "./components/UI/TaskBoard";
import Update from "./components/inpute/Update"
import Add from "./components/inpute/Add";
import { Routes, Route} from "react-router-dom";

function App() {
  let arr=[]
  let old=JSON.parse(localStorage.getItem("data"))
  if(old)
      {
        arr=old
      }
  const [input,setInpute]=useState(arr)
  // const togal=useRef([])
  // togal.current=JSON.parse(localStorage.getItem("data"))

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={input.length===0?  <WellCome />:<TaskBoard setInpute={setInpute}/> } />
        <Route path="/add" element={<Add setInpute={setInpute} />} />
        <Route path="/update/:id" element={<Update setInpute={setInpute} />} />
      </Routes>
    </div>
  );
}

export default App;
