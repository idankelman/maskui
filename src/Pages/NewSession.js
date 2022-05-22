

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Person from "../Components/Person";
import Title from "../Components/Title";

import { init_ws, send_message, close_ws } from '../Services/Websocket'
import { toast } from 'react-toastify';
import { getAllUsers, createUser, getStatistics, getRoomConfig, getRoomConfig1 } from '../Services/APIService'
import 'react-toastify/dist/ReactToastify.css';


toast.configure()



function NewSession() {

    //==========================================================================
    //                          Defninng Reference Variables
    //==========================================================================

    const backend_url = "http://localhost:5001";
    const prefix = 'data:image/png;base64,';
    const [isLoading, setLoading] = useState(true);
    const [capture, setCap] = useState('https://static.videezy.com/system/resources/previews/000/014/051/original/pixel_loading_bar.mp4');
    const [TransLog, UpdateTransLog] = useState('');
    const [People, UpdatePeople] = useState([]);
    const [Room, updateRoom] = useState([[]]);
    const ToastMessage = "Incomming data about the latest transactions will be displayed here";


    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYkwrNE5IVDlHdWx2QWU4clhVQmVKNFJaNG02UHd0bmUxRDBQcW9sdXVqa21VOG9vR1lDTkdSalYzUW5kVUxQRVgyVTdLN2dnZGIzVmU4ZlFhclJnT3NYSlQrSUhLL05kUWlUUVRRR0U1WjVCbkVUekU2SFNOa0NFQ3NDVUhoWjE4RE1yQ1hzVTFXK3hjUXI1VzlIM3FkcGxWQWh2TEpTZGlKNGxMZm41NWN3K3g0SkRSbERWRUloTnRYbWdVNGRBYnY4WWJCaW9nazFrTWltU0FHWmluTFF5TXFVRnpHU09zbURXaGgxZEM3ZVQrUVR6UExqYmRaVndUUFE3REpadHN5Y2lzS1ZGRXQveE8wQWk1Vm01Yy9MeGQ1emRFOFYzMzFHb1ZsT0l1YzFsa08yU0JjTTEycGQ1b3NUY0JHVzJNdTF3cmRqalpCMFJXRDl5cmV6Z0ZEUm9FVWw2U3dNL014MmhsT2wyZGlYdWsrZmxUdVNLUE1Xd1ZOa3dNd0pVUVJ5VU1JU0l6bHl4ZERvaXFVa3FBM1habHpBVC9FVC9TMGVydzhySjBsOVErbmFISit6clByb1hzTWRwTHJoanZMcXVuV1NjS2NxYUxyRHNmSEt1SnJmTktWVWluQVVSdGdDYnNOMGNSWkJRcGx1K1dvMWp4VnFEM3Yrb0pNbkova0Q1RDl4eVdjc1RRbDVGSkNpYWNBPT0iLCJpYXQiOjE2NDQxNDk2NDksImV4cCI6MTY0NDIzNjA0OX0.eC8JyBomUeV_PDzBU6WlN5MNBjXEXZjSZ8bkQkewY6M";
    let message = "_____";

    const DUMMY_DATA = {
        "scene_img": 'http://marina.art-net.co.il:120/mjpg/video.mjpg',

        "persons": [
            {
                img: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?fit=bounds&format=jpg&width=960",
                label: "MASK"
            },
            {
                img: "https://cdn.vox-cdn.com/thumbor/v7HjYONlHfdaUJRW4bZOxNvYm1A=/0x231:2456x2073/1400x788/filters:focal(0x231:2456x2073):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44255874/458999260.0.jpg",
                label: "NO_MASK"
            },
            {
                img: "https://cdn.vox-cdn.com/thumbor/v7HjYONlHfdaUJRW4bZOxNvYm1A=/0x231:2456x2073/1400x788/filters:focal(0x231:2456x2073):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44255874/458999260.0.jpg",
                label: "NOSE"
            },
            {
                label: "ASDD"
            }
        ]
    };



    const JSONFILE = {
        "row1": {
            "chair1": {
                "x0": 902,
                "x1": 1017,
                "y0": 416,
                "y1": 328
            }
        },
        "row2": {
            "chair1": {
                "x0": 533,
                "x1": 680,
                "y0": 465,
                "y1": 351
            },
            "chair2": {
                "x0": 730,
                "x1": 871,
                "y0": 467,
                "y1": 358
            },
            "chair3": {
                "x0": 914,
                "x1": 1057,
                "y0": 465,
                "y1": 356
            },
            "chair4": {
                "x0": 1125,
                "x1": 1266,
                "y0": 467,
                "y1": 358
            },
            "chair5": {
                "x0": 1301,
                "x1": 1446,
                "y0": 474,
                "y1": 357
            }
        },
        "row3": {
            "chair1": {
                "x0": 427,
                "x1": 613,
                "y0": 529,
                "y1": 383
            },
            "chair2": {
                "x0": 679,
                "x1": 861,
                "y0": 534,
                "y1": 395
            },
            "chair3": {
                "x0": 901,
                "x1": 1086,
                "y0": 535,
                "y1": 396
            },
            "chair4": {
                "x0": 1116,
                "x1": 1307,
                "y0": 534,
                "y1": 388
            },
            "chair5": {
                "x0": 1330,
                "x1": 1519,
                "y0": 533,
                "y1": 389
            },
            "chair6": {
                "x0": 1561,
                "x1": 1733,
                "y0": 534,
                "y1": 405
            }
        },
        "row4": {
            "chair1": {
                "x0": 337,
                "x1": 569,
                "y0": 636,
                "y1": 460
            },
            "chair2": {
                "x0": 591,
                "x1": 824,
                "y0": 634,
                "y1": 454
            },
            "chair3": {
                "x0": 852,
                "x1": 1080,
                "y0": 635,
                "y1": 460
            },
            "chair4": {
                "x0": 1175,
                "x1": 1396,
                "y0": 639,
                "y1": 466
            },
            "chair5": {
                "x0": 1418,
                "x1": 1656,
                "y0": 644,
                "y1": 453
            },
            "chair6": {
                "x0": 1684,
                "x1": 1906,
                "y0": 640,
                "y1": 465
            }
        },
        "row5": {
            "chair1": {
                "x0": 112,
                "x1": 421,
                "y0": 799,
                "y1": 572
            },
            "chair2": {
                "x0": 529,
                "x1": 832,
                "y0": 783,
                "y1": 577
            },
            "chair3": {
                "x0": 875,
                "x1": 1178,
                "y0": 795,
                "y1": 578
            },
            "chair4": {
                "x0": 1251,
                "x1": 1550,
                "y0": 792,
                "y1": 580
            },
            "chair5": {
                "x0": 1599,
                "x1": 1884,
                "y0": 789,
                "y1": 595
            }
        }
    }



    //==========================================================================
    //                          WebSockets Functions
    //==========================================================================


    //==================================  Init   ================================

    useEffect(() => {
        // init_ws({ token });
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

                // if(response === undefined  || JSON.stringify(response).search("Angular") !==-1)
                //     return;



                let test = JSON.stringify(response);
                // if (test.search("Warnings") !== -1)
                if (true) {

                    //==================================  add to the data   ================================
                    // TODO

                    let data = response;
                    setPeople(data);
                    setCap(prefix + data.scene_img);

                    //==================================  Toast   ================================

                    //UpdateTransLog(test);
                    // toast.info(test, {
                    //     className: "info-toast",
                    //     position: toast.POSITION.TOP_CENTER,
                    //     closeButton: false,
                    //     autoClose: 4000
                    // });


                    return;
                }

            }
            catch {
                console.log('still loading data');
            }
        });
    }, []);


    function setPeople(data, web = false) {
        UpdatePeople([]);
        let temp = [];
        for (let i = 0; i < data.persons.length; i++) {
            let person = {
                id: i,
                name: "blue dress",
                label: data.persons[i].label,
                image: web ? data.persons[i].img : prefix + data.persons[i].img
            };
            //console.log(person)
            temp.push(person);
        }
        UpdatePeople(temp);
        // console.log(People)
    }

    function setRoom(data, web = false) {
        updateRoom([[]]);
        let temp = [];
        for (let i = 0; i < data.persons.length; i++) {
            let tempRow = [];
            let row = data.persons[i].row;
            for (let j = 0; j < row.length; j++) {
                let person = {
                    id: j,
                    name: "blue dress",
                    label: "",
                    image: "",
                };
                //console.log(person)
                tempRow.push(person);
            }
            temp.push(tempRow)
        }
        updateRoom(temp);
    }





    async function analyzeRoomConf() {

        await getRoomConfig().
            then(res => res.json())
            .then(data => {
                console.log(data);
                // setPeople(data);

            });
    }

    function testRoomConf(resposne) {

        let roomData  = { 'persons': [] };
        let rows = Object.keys(resposne)
        for (let row of rows) {
            let chairs = Object.keys(resposne[row])
            let chairs_data = [];
            for (let chair of chairs) {
                chairs_data.push({
                    id: chairs_data.length,
                    name: "blue dress",
                    label: chair.x0,
                });
            }
            roomData['persons'].push({ 'row': chairs_data });
        }
        console.log(roomData)
        setRoom(roomData);
    }



    return (
        <div className="NewSession">
            <Title title="New" />
            <div className="Wrapper">
                <div className="Left">
                    <div className="Start">
                        <button onClick={() => analyzeRoomConf()}><h2>Room configure</h2></button>
                        <button onClick={() => { init_ws({ token }) }}><h2>Start Session</h2></button>
                        <button onClick={() => { testRoomConf(JSONFILE) }}><h2>Test Room Config</h2></button>
                        <button onClick={() => setPeople(DUMMY_DATA, true)}><h2>Test People</h2></button>

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
                                <img src={capture} alt="mask" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* -------------------- Testing the room config functionality----------------------------  */}

            {Room.map(row => (<div className="Bottom" >
                {row.map(person => (<Person key={person.id} img={person.image} label={person.label} />))}
            </div>))}



            {/* -------------------- Testing the people funcitonality --------------------------------  */}
            <div className="Bottom">
                {People.map(person => (<Person key={person.id} img={person.image} label={person.label} />))}
            </div>

        </div>

    );
}
export default NewSession;
