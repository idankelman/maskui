
import { useRef, useState } from 'react';
import logo from '../Assets/user.png';
import Modal from "./Modal";


function Title(params) {


    const [modal, setModal] = useState(false);
    const Search = useRef();
    const DUMMY_DATA = [
        {
            id: 1,
            image: logo,
            name: "Diana Doe",
        },
        {

            id: 2,
            image: logo,
            name: "John Doe",
        },
        {
            id: 3,
            image: logo,
            name: "Omer Doe",
        },
    ];

    let FilteredData = [];

    //=========================================================
    //     Fuctions
    //=========================================================


    function filterQuery(){
        let query = Search.target.value;
        console.log(query);
        FilteredData = DUMMY_DATA;
        FilteredData.filter((elem)=>{
            elem.name.indexOf(query)<0? 1:0
        })

    }


    function onCloseModal() {
        modal & setModal(!modal);
    }

    function toggleModal(){
        setModal(!modal);
    }

    //=========================================================
    //     Render
    //=========================================================

    return (
        <div className="Title">
            <div className="Content">
                {params.title}
            </div>
            <div className="Search">
                <div className="InputBox">
                    <input type="text" ref = {Search} onKeyPress = {filterQuery}/>
                </div>
                <button onClick= {toggleModal}>Search</button>
            </div>
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
            {modal ?
                <Modal  trigger ={toggleModal} data = {DUMMY_DATA}></Modal> :
                null}
        </div>
    );


}
export default Title;