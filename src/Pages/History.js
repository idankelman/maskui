import Title from "../Components/Title";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Session from "../Components/Session";


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
      date: "2022-03-01",
      time: "14:00",
      duration: "1 hour",
    },
    {
      id: 3,
      date: "2022-03-01",
      time: "11:00",
      duration: "1 hour",
    },
    {
      id: 4,
      date: "2022-03-01",
      time: "12:00",
      duration: "4 hour",
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
//   let Sessions =[];
  let [Sessions,setSession] = useState([]);

  const onChange = (date) => {
    setDate(date);
    let dateSetter = ParseDate(date);
    setFilter(dateSetter);
  };

  function filterSessions(filter = Filter) {
    let filteredSessions = My_Sessions.filter((session) => session.date === filter);
    let Sorted = filteredSessions.sort((a, b) => { return a.time > b.time ? 1 : -1 });
    Sessions = (Sorted);
    return Sorted;
  }


  function ParseDate(date){
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
    return dateSetter;
  }


  function checkDates(){
    let Copy = My_Sessions.map((session) => session.date);
    return Copy; 
  }

  return (
    <div className="History">
      <Title title="History" />
      <div className="Calendar">
        <Calendar onChange={onChange} value={value} tileClassName={(date) => {
            if(checkDates().includes(ParseDate(date.date)))
                return 'highlight'; 
            return '';
        }}/>

      </div>
      <div className="Sessions">
        {(filterSessions().length== 0)? <h2>No Sessions For This Date</h2>:""}
        {filterSessions().map((s) =>
        <Session date = {s.date} key={s.id} duration ={s.duration} time = {s.time} />)}
        </div>

    </div>
  );
}
export default History;
