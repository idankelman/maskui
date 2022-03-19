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
          <h3>duration : {params.duration}</h3>
          <h3>duration : {params.duration}</h3>
        </div>
        <div className="Actions">
        <button>Show Stats</button>
        {/* <button>Explore</button> */}
        </div>
      </div>
    </div>
  );
}
export default Session;
