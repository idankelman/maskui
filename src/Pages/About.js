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
                        <h2>Covid has had a big impact on our lives. In order to prevent it, the government decided that
people should start wearing masks in closed spaces. However, not everyone follows this law,
and this is why the need to detect people with masks has risen. We want to be able to detect
people that remove/ don't put on properly their mask in a public setting like theater / class .
the software will only be able to detect whether or not a person has it's mask , and won't be
able to detect faces for various reasons that make this ability unfeasible, more on that later.
if the public setting is known, then the software will be able to know where exactly that
person is sitting, and will be able to classify him ( the software will be able to detect the seat ,
and in a case like theater , the people's seat is determined ahead of time/ in case like a
classroom , the software will be able to show him , and know where he is sitting).
The project is challenging and complicated from two aspects:
Research aspect:
• Investigating the optimal architecture of the model, and changing parameters to
further optimize the accuracy.
• Obtaining datasets that contains images of masked people of all kinds and colors.
Applicative Aspect:
• Developing a user friendly web application interface that will communicate with the
camera, and will be able to log the its results.</h2>

                    </div>
                </div>
                <div className="right">
                    <div className="header">
                        <h1>top right head</h1>

                    </div>
                    <div className="description">
                        {/* <h2>top right des</h2> */}
                        <img src = "" alt ="intro"></img>
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