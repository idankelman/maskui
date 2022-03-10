import Title from "../Components/Title";
import Chart from "../Components/Chart";




function About() {

    const DATA = [
        {high:14002,low:300},
        {high:15020,low:400},
        {high:16020,low:500},
        {high:17020,low:600},
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