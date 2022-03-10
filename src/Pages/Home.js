import Person from "../Components/Person";
import Title from "../Components/Title";
import { Spline } from '@splinetool/react-spline';
import { useEffect } from "react";
import scene from '../Assets/Mask.spline';


function Deactivate() {
    //[1]
    //setting all of the other links to not be deactivated
    console.log("deactivate");
    // document.getElementsByTagName("img")[0].style.display="none";
    // let all = document.getElementsByTagName("img");
    // for (let i = 0; i < all.length; i++) {
    //     console.log(all[i]);
    // }

    //[2]
    //setting the active link to be activated
    // let Active = document.querySelector(".Link a.selected");
    // if (Active != null) {
    //     Active.parentElement.style.backgroundColor = "#0D2E60";
    // }

}







function Home() {


    //=========================================================
    //     Fuctions
    //=========================================================


    useEffect(() => {
        Deactivate();
    });


    return (

        <div className="Home">
            <Title title="Home" />
            <div className="Home-content">
                <div className="Home-content-left">
                    {/* <img src = */}
                    <div className="Spline">
                    {/* <iframe src='https://my.spline.design/untitled-de0519227a758e297b7d6a66c32a1382/' ></iframe> */}
                    {/* <iframe src='https://my.spline.design/primitivescopy-5bd07c962195645127a7f925f377132b/'></iframe> */}
                    {/* <iframe src='https://my.spline.design/primitivescopy-5bd07c962195645127a7f925f377132b/'></iframe> */}
                        {/* <iframe src='https://my.spline.design/calculatorcopy-065175839057a4403a6ef4688187d6e4/'></iframe> */}
                    <Spline scene={scene}/>

                    </div>
                    {/* <iframe src='https://my.spline.design/calculatorcopy-065175839057a4403a6ef4688187d6e4/' frameborder='0' width='100%' height='100%'></iframe> */}
                    {/* <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline"/> */}
                </div>
                <div className="Home-content-right">

                    <button> More</button>
                    {/* <Spline  scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline"/> */}
                </div>
            </div>

        </div>
    );
}
export default Home;