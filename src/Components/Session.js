import React from "react";

function Session(params) {
  return (
    <div className="Session">
      <div className="Session_Title">
        <h2>{params.date}</h2>
        <h2>{params.time}</h2>
      </div>
      <div className="Session_Content">
        <div className="details">
          <h2>Content of the duration</h2>
          <h2>duration : {params.duration}</h2>
        </div>
        <div className="Actions">
          <button>go</button>
        </div>
      </div>
    </div>
  );
}
export default Session;
