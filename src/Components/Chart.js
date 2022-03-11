import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
  CartesianGrid,
    LineChart,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    PieChart,
    Pie,
} from "recharts";
import { useState } from "react";

function Chart(params) {
  const [State, UpdateState] = useState("high");
  const [StateColor, UpdateColor] = useState("#8884d8");

  const Pallet = ["#8884d8", "#82ca9d"];
  const States = ["high", "low"];

  let Val = "high";
  let Color = "#8884d8";

  function ChangeState() {
    console.log("StateChange");
    console.log(Val === "high");
    if (State === "high") {
      Val = States[1];
      Color = Pallet[1];
    } else if (State === "low") {
      Val = States[0];
      Color = Pallet[0];
    }
    UpdateState(Val);
    UpdateColor(Color);
    // console.log(Pallet)
  }

  return (
    <div>
      <div className="ChartHolder" id="Charter">
        <button className="button1" text="test" onClick={ChangeState}>
          {State}
        </button>
        <ResponsiveContainer width="90%" height={500}>
          <BarChart width="100%" height={300} data={params.data}>
            <Bar dataKey={State} fill={StateColor} />
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            <XAxis dataKey="Time"></XAxis>
            <YAxis dataKey={State} domain={params.data}></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>


      </div>
      <div className = "ChartHolder" >
          
        <LineChart width={500} height={300} data={params.data}>
          <XAxis dataKey="high" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div className = "ChartHolder" >

        <RadarChart outerRadius={90} width={730} height={250} data={params.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="high" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mask" dataKey="high" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="No_Mask" dataKey="low" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
      </div>
      
      <div className="ChartHolder">
        <PieChart width={730} height={250}>
            <Pie data={params.data} dataKey="high" nameKey="high" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={params.data} dataKey="low" nameKey="low" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </div>
    </div>
  );
}

export default Chart;
