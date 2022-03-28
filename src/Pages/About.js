import Title from "../Components/Title";
import Collection from "../Assets/about/Collection.jpg" 

function About() {
    return (
        <div className="About">
            <Title title="About" />
            <div className="top">
                <div className="left">
                    <div className="header">
                        <h1>02 center left head</h1>
                    </div>
                    <div className="description">
                        <h2>
                        </h2>
                        <p>In this project we will implement a mask detection system with a friendly user interface that
will be able to control parameters and display important statistic such as the percentage of
people wearing masks properly, and the location of the unmasked people at every frame.
The program is written in python using visual studio code environment.
The model will be trained using keras (TensorFlow) and image analysis will be implemented
using OPENCV functions.
Once we have our model weights ready, we load it and start capturing the video. The video is
then spliced into frames and the segmentation phase begins</p>
                    </div>
                </div>
                <div className="right">
                    <div className="header">
                        <h1>top right head</h1>

                    </div>
                    <div className="description">
                        
                        {/* <img src = {Collection} alt ="intro"></img> */}
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
                        <h1>02 center left head</h1>

                    </div>
                    <div className="description">
                        <h2>center left cont</h2>
                        <p>To slice all the faces in the frame, we use CV2 to detect all the faces using facial HaarCodes.
The face cascade tries to detect faces based on the content of the HaarCodes, the one we are
currently using is for fronal face. In order to take care of tilting faces, we try to detect in
different angles. The cascade returns an array with a quadruple of x,y,w,z coordination,
which are the dimensions of the rectangle around the face
</p>

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