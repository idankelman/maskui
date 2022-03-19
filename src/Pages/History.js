import Title from "../Components/Title";
import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

function History() {
  const [value, setDate] = useState(new Date());
  const onChange =
    date => {
      setDate(date);
      console.log(date);
    };


  return (
    <div className="History">
      <Title title="History" />
      <div className="Calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
export default History;
