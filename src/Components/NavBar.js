import logo from '../Assets/mask.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="Navbar">
            <div className="Container">
                <div className="Top">
                    <div className="Logo">
                        <img src={logo} />
                    </div>
                    <a >MaskDetect</a>
                </div>
                <div className="Center">
                    <div className="Links">

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <NavLink exact to="/" activeClassName='selected'>Home</NavLink>
                            <div className='News'>12</div>
                        </div>

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <NavLink exact to="/History" activeClassName='selected'>History</NavLink>
                            <div className='News'>12</div>
                        </div>

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <NavLink exact to="/New_Session" activeClassName='selected'>New Session</NavLink>
                            <div className='News'>12</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NavBar;