

function NewSession(){
    return (

        <div className ="NewSession">

        <div className="Title">
            <h1>New Session</h1>
            <div class = "Reset">
                <button>Reset</button>
                <h2>user</h2>
            </div>
            
        </div>
        <div className="Wrapper">
            <div className="Left">
                <h1>Left</h1>
                <button>Start seesion</button>
                <button>Choose Threshold</button>
            </div>
            <div className="Right">
                <h1>Right</h1>
                <div className="Top">
                    <div className="Container">
                        <h1>Top</h1>
                        <div className="Stream">
                            <h1>Stream</h1>
                            <img src= "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2020/04/01023335/MaskDetection_Banner-1-1.png" alt ="mask" />
                        </div>
                    </div>
                </div>
                <div className="Center">
                    <h1>Center</h1>
                </div>

                <div className="Bottom">
                    <h1>Bottom</h1>
                </div>
            </div>
        </div>
    </div>

    );
    }
    export default NewSession;