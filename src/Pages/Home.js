
function Home() {
    return (



        <div className ="Home">

            <div className="Title">
                <h1>Welcome to MaskDetect</h1>
                <h2>A simple app to detect masks</h2>
            </div>
            {/* <NavBar /> */}
            <div className="Wrapper">
                <div className="Left">
                    <h1>Left</h1>
                </div>
                <div className="Right">
                    <h1>Right</h1>
                    <div className="Top">
                        <div className="Container">
                            <h1>Top</h1>
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
export default Home;