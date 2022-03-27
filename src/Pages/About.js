import Title from "../Components/Title";

function About() {
    return (
        <div className="About">
            <Title title="About" />
            <div className="top">
                <div className="left">
                    <div className="header">
                        <h1>top left head</h1>
                    </div>
                    <div className="description">
                        <h2>top left desp</h2>

                    </div>
                </div>
                <div className="right">
                    <div className="header">
                        <h1>top right head</h1>

                    </div>
                    <div className="description">
                        <h2>top right des</h2>

                    </div>
                </div>
            </div>
            <div className="Fuller">
                <div className="head">
                    <h1>Alpha Version</h1>
                </div>
                <div className="content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4qCz4sG7uxo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    {/* <img src = "" alt = "video"></img> */}
                </div>
            </div>

            <div className="About-content">
                <div className="left">
                    <div className="header">
                        <h1>center left head</h1>

                    </div>
                    <div className="description">
                        <h2>center left cont</h2>

                    </div>
                </div>
                <div className="right">
                    <div className="header">
                        <h1>center right head</h1>

                    </div>
                    <div className="description">
                        <h2>center right cont</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;