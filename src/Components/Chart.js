import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { useState } from 'react';


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
        }
        else if (State === "low") {
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
                <button className="button1" text="test" onClick={ChangeState}>{State}</button>
                <ResponsiveContainer width="90%" height={500} >
                    <BarChart width="100%" height={300} data={params.data}>
                        <Bar dataKey={State} fill={StateColor} />
                        {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                        {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                        <XAxis dataKey="Time"></XAxis>
                        <YAxis dataKey={State} domain={params.data} ></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}


export default Chart;