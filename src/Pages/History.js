import Title from "../Components/Title";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function History() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="History">
      <Title title="History" />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default History;
