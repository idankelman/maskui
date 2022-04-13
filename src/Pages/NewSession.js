

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Person from "../Components/Person";
import Title from "../Components/Title";
import { init_ws, send_message } from '../Services/Websocket'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()



function NewSession() {



    //==========================================================================
    //                          Defninng Reference Variables
    //==========================================================================

    const [isLoading, setLoading] = useState(true);
    const [TransLog, UpdateTransLog] = useState("");
    const [People,UpdatePeople] = useState([]);
    const ToastMessage="Incomming data about the latest transactions will be displayed here";


    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYkwrNE5IVDlHdWx2QWU4clhVQmVKNFJaNG02UHd0bmUxRDBQcW9sdXVqa21VOG9vR1lDTkdSalYzUW5kVUxQRVgyVTdLN2dnZGIzVmU4ZlFhclJnT3NYSlQrSUhLL05kUWlUUVRRR0U1WjVCbkVUekU2SFNOa0NFQ3NDVUhoWjE4RE1yQ1hzVTFXK3hjUXI1VzlIM3FkcGxWQWh2TEpTZGlKNGxMZm41NWN3K3g0SkRSbERWRUloTnRYbWdVNGRBYnY4WWJCaW9nazFrTWltU0FHWmluTFF5TXFVRnpHU09zbURXaGgxZEM3ZVQrUVR6UExqYmRaVndUUFE3REpadHN5Y2lzS1ZGRXQveE8wQWk1Vm01Yy9MeGQ1emRFOFYzMzFHb1ZsT0l1YzFsa08yU0JjTTEycGQ1b3NUY0JHVzJNdTF3cmRqalpCMFJXRDl5cmV6Z0ZEUm9FVWw2U3dNL014MmhsT2wyZGlYdWsrZmxUdVNLUE1Xd1ZOa3dNd0pVUVJ5VU1JU0l6bHl4ZERvaXFVa3FBM1habHpBVC9FVC9TMGVydzhySjBsOVErbmFISit6clByb1hzTWRwTHJoanZMcXVuV1NjS2NxYUxyRHNmSEt1SnJmTktWVWluQVVSdGdDYnNOMGNSWkJRcGx1K1dvMWp4VnFEM3Yrb0pNbkova0Q1RDl4eVdjc1RRbDVGSkNpYWNBPT0iLCJpYXQiOjE2NDQxNDk2NDksImV4cCI6MTY0NDIzNjA0OX0.eC8JyBomUeV_PDzBU6WlN5MNBjXEXZjSZ8bkQkewY6M";
    let message = {
        "type": "subscription",
        "id": "bf5d15d0-415f-11ec-b255-ad01e0712738",
        "data": {
            "products": ["BTC-USD"],
            "quantity": "3.00000000",
            "level": true,
            "high": true,
            "low": true,
            "change_daily": true
        }
    };
    message = "_____";

    const DUMMY_DATA = {
        "item": {
            "name": "blue dress",
            "details": "graphic print, Logo.",
            "composition": "Composition: 94% Cotton, 6% Elastam.",
            "modelDetails": [
                "Modeal wearing a size M",
                "Measures: 86 - 60 - 90",
                "Height: 178cm"
            ]
        },
        "persons": [
            {
                img: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?fit=bounds&format=jpg&width=960",
                label: "MASK"},
            {
                img:"https://cdn.vox-cdn.com/thumbor/v7HjYONlHfdaUJRW4bZOxNvYm1A=/0x231:2456x2073/1400x788/filters:focal(0x231:2456x2073):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44255874/458999260.0.jpg",
                label: "NO_MASK"},
            {
                img:"https://cdn.vox-cdn.com/thumbor/v7HjYONlHfdaUJRW4bZOxNvYm1A=/0x231:2456x2073/1400x788/filters:focal(0x231:2456x2073):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44255874/458999260.0.jpg",
                label: "NOSE"},
            {
                label: "ASDD"}
        ]
    };



    //==========================================================================
    //                          WebSockets Functions
    //==========================================================================


    //==================================  Init   ================================

    useEffect(() => {
        init_ws({ token });
    }, []);

    //==================================  Message   ================================

    useEffect(() => {
        // send_message(message);
    }, []);



    //==================================  Recive   ================================



    useEffect(() => {
        window.addEventListener("message", function (message) {
            //Analyzing the response , and adding it to the store
            try {
                
                const response = message.data;
                console.log(response);

                if(response === undefined  || JSON.stringify(response).search("Angular") !==-1)
                    return;



                let test = JSON.stringify(response);
                if (test.search("Warnings") !== -1) {
                    
                    //==================================  add to the data   ================================
                    // TODO

                    let data = DUMMY_DATA;
                    setPeople(data);
                 

                    //==================================  Toast   ================================

                    UpdateTransLog(test);
                    toast.info(test, {
                        className: "info-toast",
                        position: toast.POSITION.TOP_CENTER,
                        closeButton: false,
                        autoClose: 4000
                    });


                    return;
                }

            }
            catch {
                console.log('still loading data');
            }
        });
    }, []);


    function setPeople(data){
        UpdatePeople([]);
        let temp = [];
        for(let i = 0;i<data.persons.length;i++)
        {
            let person = {
                id: i,
                name: "blue dress",
                label: data.persons[i].label,
                image: data.persons[i].img
            };
            temp.push(person);
        }
        UpdatePeople(temp);
        console.log(People)
    }


    return (
        <div className="NewSession">
            <Title title="New" />
            <div className="Wrapper">
                <div className="Left">
                    <div className="Start">
                        <button onClick={()=>send_message(message)}><h2>Send Message</h2></button>
                        <button onClick={()=>setPeople(DUMMY_DATA)}><h2>Choose Threshold</h2></button>
                    </div>

                    <div className="Anlyze">

                        <NavLink exact to="/Statistics">
                            <button>
                                <h2>Statistics</h2>
                            </button>

                        </NavLink>
                    </div>
                </div>
                <div className="Right">
                    <div className="Top">
                        <div className="Container">
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
                {People.map(person => (<Person key={person.id} img ={person.image} label = {person.label}/>))}
            </div>
        </div>

    );
}
export default NewSession;
