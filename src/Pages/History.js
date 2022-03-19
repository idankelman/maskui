import Title from "../Components/Title";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Session from "../Components/Session";
// import "react-calendar/dist/Calendar.css";

function History() {
  const My_Sessions = [
    {
      id: 1,
      date: "2022-01-01",
      time: "11:00",
      duration: "1 hour",
    },
    {
      id: 2,
      date: "2022-01-01",
      time: "14:00",
      duration: "1 hour",
    },
    {
      id: 3,
      date: "2020-1-1",
      time: "11:00",
      duration: "1 hour",
    },
    {
      id: 4,
      date: "2022-03-01",
      time: "12:00",
      duration: "1 hour",
    },
    {
      id: 5,
      date: "2022-03-01",
      time: "14:00",
      duration: "1 hour",
    },
  ];

  const [value, setDate] = useState(new Date());
  const [Filter,setFilter] = useState("");
  const Sessions =[];

  const onChange = (date) => {
    console.log(date);
    setDate(date);
    let month = (date.getMonth()+1).toString();
    if(month.length === 1){
        month = "0" + month;
    }
    let day = date.getDate().toString();
    if(day.length === 1){
        day = "0" + day;
    }
    let year = date.getFullYear().toString();
    let dateSetter = year + "-" + month + "-" + day;
    setFilter(dateSetter);
    console.log(dateSetter);
  };

  function filterSessions(filter = Filter) {
    let filteredSessions = My_Sessions.filter((session) => session.date === filter);
    let Sorted = filteredSessions.sort((a, b) => { return a.time > b.time ? 1 : -1 });
    return Sorted;
  }

  return (
    <div className="History">
      <Title title="History" />
      <div className="Calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      {(Sessions.length === 0)? <h2>No Sessions For This Date</h2> : null}
      <div className="Sessions">
        {filterSessions().map((s) =>
        <Session date = {s.date} key={s.id} duration ={s.duration} time = {s.time} />)}
        </div>
    </div>
  );
}
export default History;
