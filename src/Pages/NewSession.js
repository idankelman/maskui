

import Person from "../Components/Person";
import Title from "../Components/Title";


function NewSession() {

    let People =[1,2,3,4,5,6];

    return (
        <div className="NewSession">
            <Title title = "New"/>
            <div className="Wrapper">
                <div className="Left">
                    <div className="Start">
                        <button><h2>Start seesion</h2></button>
                        <button><h2>Choose Threshold</h2></button>
                    </div>

                    <div className="Anlyze">
                        <button><h2>Statistics</h2></button>
                    </div>
                </div>
                <div className="Right">
                    <div className="Top">
                        <div className="Container">
                            Live Capture
                            <div className="Stream">
                                {/* <h1>Stream</h1> */}
                                <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2020/04/01023335/MaskDetection_Banner-1-1.png" alt="mask" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Bottom">
            {People.map(person => (<Person key={person} />))}
            </div>
        </div>

    );
}
export default NewSession;