

import { NavLink } from "react-router-dom";
import Person from "../Components/Person";
import Title from "../Components/Title";

import AnimatePage from "../AnimatePage";





const NewSession = () => {
    
    let People =[1,2,3,4,5,6];

    return (
        <AnimatePage>
            <div className="NewSession">
                <Title title = "New"/>
                <div className="Wrapper">
                    <div className="Left">
                        <div className="Start">
                            <button><h2>Start seesion</h2></button>
                            <button><h2>Choose Threshold</h2></button>
                        </div>

                        <div className="Anlyze">
                            
                                <NavLink exact to ="/Statistics">
                                <button>
                                    <h2>Statistics</h2>
                                </button>

                                </NavLink>
                        </div>
                    </div>
                    <div className="Right">
                        <div className="Top">
                            <div className="Container">
                                Live Capture
                                <div className="Stream">
                                    {/* <h1>Stream</h1> */}
                                    {/* <img src={'http://localhost:5000/video'} alt="mask" /> */}
                                    <img src={'http://marina.art-net.co.il:120/mjpg/video.mjpg'} alt="mask" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Bottom">
                {People.map(person => (<Person key={person} />))}
                </div>
            </div>
        </AnimatePage>

    );
};
export default NewSession;
