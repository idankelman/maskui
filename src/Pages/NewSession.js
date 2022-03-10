

import logo from "../Assets/mask.png";


function NewSession() {
    return (
        <div className="NewSession">

            <div className="Title">
                New Session
                <div className="Search">
                    <div className="InputBox">
                        <input type = "text"/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="Logo">
                    <img src={logo} />
                </div>
            </div>
            
            <div className="Wrapper">
                <div className="Left">
                    {/* <h1>Left</h1> */}

                    <div className="Start">
                        <button><h2>Start seesion</h2></button>
                        <button><h2>Choose Threshold</h2></button>
                    </div>

                    <div className="Anlyze">
                        <button><h2>Statistics</h2></button>
                    </div>
                </div>
                <div className="Right">
                    {/* <h1>Right</h1> */}
                    <div className="Top">
                        <div className="Container">
                            Top
                            <div className="Stream">
                                {/* <h1>Stream</h1> */}
                                <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2020/04/01023335/MaskDetection_Banner-1-1.png" alt="mask" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Bottom">
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                <div className="Person"></div>
                {/* <h1>Bottom</h1> */}
            </div>
        </div>

    );
}
export default NewSession;