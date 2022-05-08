import Title from "../Components/Title";
import Chart from "../Components/Chart";
import { useState } from "react";




function About() {

    const [Profiles,UpdateProfiles] = useState([]);


    const DATA = [
        {high:14002,low:300},
        {high:15020,low:400},
        {high:16020,low:500},
        {high:17020,low:600},
        {high:18020,low:700},
        {high:19020,low:800},
        {high:20020,low:900},
        {high:21020,low:1000},
        {high:22020,low:1100},
        {high:23020,low:1200},
        {high:24020,low:1300},
        {high:25020,low:1400},
    ];

    const S_DATA = {
        'classification':{
            'mask':1000,
            'nose':40,
            'no_mask':500
        },
        people:
        [
            {
                id:1,
                'mask':1000,
                'nose':40,
                'no_mask':500
            },
            {
                id:2,
                'mask':5000,
                'nose':40,
                'no_mask':1000
            },
            {
                id:3,
                'mask':2000,
                'nose':30,
                'no_mask':1500
            },
            {
                id:4,
                'mask':150,
                'nose':40,
                'no_mask':1500
            },
            {
                id:5,
                'mask':6500,
                'nose':10,
                'no_mask':10
            },{
                id:6,
                'mask':200,
                'nose':4220,
                'no_mask':1500
            },
            {
                id:7,
                'mask':2100,
                'nose':410,
                'no_mask':1500
            }
    ]}

    const max_amount=110; 


    return (
    <div className="About">
        <Title title="About"/>
        <Chart data={DATA} total_data = {S_DATA} max_amount= {max_amount}/>
    </div>
    );
}
export default About;