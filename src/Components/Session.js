import React from "react";

function Session(params) {
  return (

    <div className="Session">
      <div className="Date">
        <h2>{params.date}</h2>
        <h2>{params.time}</h2>
      </div>
      <div className="Duration">
        <h2>{params.duration}</h2>
      </div>
    </div>
  );

}
export default Session;
