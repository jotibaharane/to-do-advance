import React from "react";

function SelectOpt(props) {
  const setDate=props.setDate;
  const current = new Date();
  const dateh = `${current.getFullYear()}-${
    current.getMonth() + 1 < 10
      ? "0" + (current.getMonth() + 1)
      : current.getMonth() + 1
  }-${current.getDate() < 10 ? "0" + current.getDate() : current.getDate()}`;

  const yesterday = new Date(current);
  yesterday.setDate(yesterday.getDate() - 1);
  const yest = `${yesterday.getFullYear()}-${
    yesterday.getMonth() + 1 < 10
      ? "0" + (yesterday.getMonth() + 1)
      : yesterday.getMonth() + 1
  }-${
    yesterday.getDate() < 10 ? "0" + yesterday.getDate() : yesterday.getDate()
  }`;

  const tomorrow = new Date(current);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tom = `${tomorrow.getFullYear()}-${
    tomorrow.getMonth() + 1 < 10
      ? "0" + (tomorrow.getMonth() + 1)
      : tomorrow.getMonth() + 1
  }-${tomorrow.getDate() < 10 ? "0" + tomorrow.getDate() : tomorrow.getDate()}`;

  const nextWeek = new Date(current);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const week = `${nextWeek.getFullYear()}-${
    nextWeek.getMonth() + 1 < 10
      ? "0" + (nextWeek.getMonth() + 1)
      : nextWeek.getMonth() + 1
  }-${nextWeek.getDate() < 10 ? "0" + nextWeek.getDate() : nextWeek.getDate()}`;

  const nextMonth = new Date(current);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const month = `${nextMonth.getFullYear()}-${
    nextMonth.getMonth() + 1 < 10
      ? "0" + (nextMonth.getMonth() + 1)
      : nextMonth.getMonth() + 1
  }-${
    nextMonth.getDate() < 10 ? "0" + nextMonth.getDate() : nextMonth.getDate()
  }`;

  const dateChange = (day) => {
    if (day === "today") {
      setDate(dateh);
    } else if (day === "yesterday") {
      setDate(yest);
    } else if (day === "tomorrow") {
      setDate(tom);
    } else if (day === "nextWeek") {
      setDate(week);
    } else if (day === "nextmonth") {
      setDate(month);
    }
  };

  return (
    <select
      className="date-range form-control"
      name="date"
      onChange={(e) => dateChange(e.target.value)}
    >
      <option value="none" checked disabled hidden>
        Select Date
      </option>
      <option value="yesterday">Yesterday</option>
      <option select="true" value="today">
        Today
      </option>
      <option value="tomorrow">Tomorrow</option>
      <option value="nextWeek">Next Week</option>
      <option value="nextmonth">Next Month</option>
    </select>
  );
}

export default SelectOpt;
