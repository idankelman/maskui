
import { useRef, useState } from 'react';
import logo from '../Assets/user.png';
import Modal from "./Modal";
import { useEffect } from 'react';


function Title(params) {


    const [modal, setModal] = useState(false);
    const [FilteredData , setData] = useState([]);
    const Search = useRef();

    const DUMMY_DATA = [
        {
            id: 1,
            image: logo,
            name: "Diana Doe",
            path : "/appearance/1"

        },
        {

            id: 2,
            image: logo,
            name: "John Doe",
            path : "/appearance/2"
            
        },
        {
            id: 3,
            image: logo,
            name: "Omer Doe",
            path : "/appearance/3"
        },
    ];

    const Pages = [
        {
            id: 100,
            image: logo,
            name: "Home",
            path: "/",
        },
        {
            id: 101,
            image: logo,
            name: "History",
            path: "/history",
        },
        {
            id: 102,
            image: logo,
            name: "About",
            path: "/about",
        },
        {
            id: 103,
            image: logo,
            name: "Help",
            path: "/Help",
        },
        {
            id: 104,
            image: logo,
            name: "New Session",
            path: "/Session",
        }
    ];

    
    
  useEffect(() => {
    setData(DUMMY_DATA.concat(Pages));
  },[]);
    



    //=========================================================
    //     Fuctions
    //=========================================================


    function filterQuery() {
        let query = Search.current.value;
        let temp = DUMMY_DATA.concat(Pages);
        temp = temp.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        });
        setData(temp);

        // console.log(query);
        // console.log(temp);
    }


    // function onCloseModal() {
    //     modal & setModal(!modal);
    // }

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