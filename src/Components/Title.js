
import { useRef, useState } from 'react';
import logo from '../Assets/user.png';
import Modal from "./Modal";


function Title(params) {


    const [modal, setModal] = useState(false);
    const Search = useRef();
    const [FilteredData , setData] = useState([]);
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


    //=========================================================
    //     Fuctions
    //=========================================================


    function filterQuery() {
        let query = Search.current.value;
        let temp = DUMMY_DATA.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        });
        setData(temp);

        // console.log(query);
        // console.log(temp);
    }


    function onCloseModal() {
        modal & setModal(!modal);
    }

    function toggleModal() {
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
                    <input type="text" ref={Search} onKeyDown = {filterQuery} onKeyUp = {filterQuery} />
                </div>
                <button onClick={toggleModal}>Search</button>
            </div>
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
            {modal ?
                <Modal trigger={toggleModal} data={FilteredData}></Modal> :
                null}
        </div>
    );


}
export default Title;