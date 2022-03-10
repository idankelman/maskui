
import logo from '../Assets/user.png';

function Title(params) {


    //=========================================================
    //     Fuctions
    //=========================================================


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
                    <input type="text" />
                </div>
                <button>Search</button>
            </div>
            <div className="Logo">
                <img src={logo} />
            </div>
        </div>
    );


}
export default Title;