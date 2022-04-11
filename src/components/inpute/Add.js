import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectOpt from "./SelectOpt";
import "./Add.css";

function Add(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();
  let arr = [];
  const values = () => {
    let old = JSON.parse(localStorage.getItem("data"));
    if (title && date && note) {
      let datah = {
        id: Math.random().toString(),
        title: title,
        date: new Date(date),
        note: note,
      };
      if (old) {
        arr = old;
      }
      arr.push(datah);
      props.setInpute(arr);
      localStorage.setItem("data", JSON.stringify(arr));
      navigate("/");
    } else {
      alert("All fields are mandatery");
    }
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center",color:"red"}}>Add New Note</h1>
      <div className="row">
        <div className="col-25">
          <label htmlFor="Title">Title</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            className="Title"
            name="Title"
            placeholder="Your Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="date">Date</label>
        </div>
        <div className="col-75">
          <input
            type="date"
            className="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="day">Day</label>
        </div>
        <div className="col-75">
          <SelectOpt setDate={setDate} />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="Note">Note</label>
        </div>
        <div className="col-75">
          <textarea
            className="note"
            name="subject"
            placeholder="Write something.."
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <input
          type="button"
          value="Cancel"
          className="btn2"
          onClick={() => navigate("/")}
        />
        <input
          type="button"
          value="Save"
          className="btn1"
          onClick={() => values()}
        />
      </div>
    </div>
  );
}

export default Add;
