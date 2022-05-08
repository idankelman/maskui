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
  ZAxis
} from "recharts";
import { useEffect, useState } from "react";

function Chart(params) {


  const [State, UpdateState] = useState("high");
  const [StateColor, UpdateColor] = useState("#8884d8");

  const [avergae, UpdateAverage] = useState([
    { mask: 2421.4285714285716,
      no_mask: 1072.857142857143,
      nose: 684.2857142857143
    },
    { mask: 2421.4285714285716,
      no_mask: 1072.857142857143,
      nose: 684.2857142857143
    },,
    { mask: 2421.4285714285716,
      no_mask: 1072.857142857143,
      nose: 684.2857142857143
    }
  ]
  );


  const Pallet = ["#8884d8", "#82ca9d"];
  const States = ["high", "low"];
  const classes = ["mask", "nose", "no_mask"];

  const ClassPallet = ["#8884d8", "#82ca9d", "#ffc658"];


  let Val = "high";
  let Color = "#8884d8";



  useEffect(() => {
    // avgData();
  }, []);





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

  function avgData() {

    let data = params.total_data;
    let avg = { mask: 0, nose: 0, no_mask: 0 };

    for (let i = 0; i < data.people.length; i++) {
      avg.mask += data.people[i].mask;
      avg.nose += data.people[i].nose;
      avg.no_mask += data.people[i].no_mask;
    }


    
    avg.mask = parseInt(avg.mask / data.people.length);
    avg.nose = parseInt(avg.nose / data.people.length);
    avg.no_mask = parseInt(avg.no_mask / data.people.length);
    UpdateAverage(avg);
    console.log(avg);
  }

  return (
    <div>
      <div className="ChartHolder" id="Charter">
        <div className="ChartTitle">
          <h2>People classification</h2>
        </div>
        <button className="button1" text="test" onClick={ChangeState}>
          {State}
        </button>
        <ResponsiveContainer width="90%" height={500}>
          <BarChart width="100%" height={300} data={params.total_data.people}>
            <Bar dataKey={'mask'} fill={ClassPallet[0]} />
            <Bar dataKey={'no_mask'} fill={ClassPallet[1]} />
            <Bar dataKey={'nose'} fill={ClassPallet[2]} />
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            <XAxis dataKey="Time"></XAxis>
            {/* <YAxis dataKey="Time"></YAxis> */}
            <YAxis dataKey={'mask'} domain={params.total_data.people}></YAxis>
            {/* <XAxis dataKey={'no_mask'} domain={params.total_data.people}></XAxis> */}
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>


      </div>

      <div className="ChartHolder" id="Charter">
        <div className="ChartTitle">
          <h2>avergae</h2>
        </div>
        <button className="button1" text="test" onClick={avgData}>
          {State}
        </button>
        <ResponsiveContainer width="90%" height={500}>
          <BarChart width="100%" height={300} data={avergae}>
            <Bar dataKey={'mask'} fill={ClassPallet[0]} />
            <Bar dataKey={'no_mask'} fill={ClassPallet[1]} />
            <Bar dataKey={'nose'} fill={ClassPallet[2]} />
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            {/* <Bar dataKey="low" fill="#82ca9d" /> */}
            <XAxis dataKey="Time"></XAxis>
            {/* <YAxis dataKey="Time"></YAxis> */}
            <YAxis dataKey={'mask'} domain={avergae}></YAxis>
            {/* <XAxis dataKey={'no_mask'} domain={params.total_data.people}></XAxis> */}
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>


      </div>

      <div className="ChartHolder" >

        <LineChart width={500} height={300} data={params.total_data.people}>
          <XAxis dataKey="mask" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="mask" stroke={ClassPallet[0]} />
          <Line type="monotone" dataKey="no_mask" stroke={ClassPallet[1]} />
          <Line type="monotone" dataKey="nose" stroke={ClassPallet[2]} />
        </LineChart>
      </div>

      <div className="ChartHolder" >

        <RadarChart outerRadius={90} width={730} height={250} data={params.total_data.people}>
          <PolarGrid />
          <PolarAngleAxis dataKey="mask" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="mask" dataKey="mask" stroke={ClassPallet[0]} fill={ClassPallet[0]} fillOpacity={0.6} />
          <Radar name="no_mask" dataKey="no_mask" stroke={ClassPallet[1]} fill={ClassPallet[1]} fillOpacity={0.6} />
          <Radar name="nose" dataKey="nose" stroke={ClassPallet[2]} fill={ClassPallet[2]} fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </div>

      <div className="ChartHolder">
        <PieChart width={730} height={250}>
          <Pie data={params.total_data.people} dataKey="mask" nameKey="mask" cx="50%" cy="50%" outerRadius={50} fill={ClassPallet[0]} />
          <Pie data={params.total_data.people} dataKey="no_mask" nameKey="no_mask" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={ClassPallet[1]} label />
          {/* <Pie data={params.total_data.people} dataKey="nose" nameKey="nose" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={ClassPallet[2]} label /> */}
        </PieChart>
      </div>
    </div>
  );
}

export default Chart;
