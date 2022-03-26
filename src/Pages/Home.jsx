import Title from "../Components/Title";
import { Spline } from '@splinetool/react-spline';
import scene from '../Assets/Final.spline';
import AnimatePage from "../AnimatePage";





const Home = () => {


    //=========================================================
    //     Fuctions
    //=========================================================


    return (

        <AnimatePage>
            <div className="Home">
                <Title title="Home" />
                <div className="Header">
                    MASK DETECTION
                </div>
                <div className="Description">
                    Come And See What We Are Doing
                </div>
                <div className="Home-content">
                    <div className="Home-content-left">
                        <div className="Spline">
                            <Spline scene={scene} />

                        </div>
                    </div>
                    <div className="Home-content-right">
                        <div className="Explore">
                            <button> More</button>
                            <button> Log In</button>
                        </div>
                    </div>
                </div>

            </div>
        </AnimatePage>
    );
};
export default Home;