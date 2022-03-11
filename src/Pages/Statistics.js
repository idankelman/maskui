import Title from "../Components/Title";
import Chart from "../Components/Chart";




function About() {

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
    const max_amount=110; 



    return (
    <div className="About">
        <Title title="About"/>
        <Chart data={DATA} max_amount= {max_amount}/>
    </div>
    );
}
export default About;