import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SelectOpt from "./SelectOpt";
import "./Add.css";

function Update(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let old = JSON.parse(localStorage.getItem("data"));
    let val = old.find((el) => {
      return el.id == id;
    });
    const current = new Date(val.date);
    const Udate = `${current.getFullYear()}-${
      current.getMonth() + 1 < 10
        ? "0" + (current.getMonth() + 1)
        : current.getMonth() + 1
    }-${current.getDate() < 10 ? "0" + current.getDate() : current.getDate()}`;
    setNote(val.note);
    setTitle(val.title);
    setDate(Udate);
  }, [id]);

  const update = () => {
    let old = JSON.parse(localStorage.getItem("data"));
    if (title && date && note) {
      let data = old.map((el) => {
        return el.id == id
          ? { ...el, title: title, date: new Date(date), note: note }
          : el;
      });
      props.setInpute(data);
      localStorage.setItem("data", JSON.stringify(data));
      alert("data updated succesfully");
      navigate("/");
    } else {
      alert("All fields are mandetory,please enter data");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "green" }}>Update Note</h1>
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
            value={title}
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
            value={note}
            style={{ height: "200px" }}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <input
          type="button"
          value="Update"
          className="btn1"
          onClick={() => update()}
        />
        <input
          type="button"
          value="Cancel"
          className="btn2"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

export default Update;
