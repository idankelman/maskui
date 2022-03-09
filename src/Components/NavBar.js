import logo from '../Assets/mask.png';


function NavBar() {
    return (
        <div className="Navbar">
            <div className="Container">
                <div className="Top">
                    <div className="Logo">
                        <img src={logo} />
                    </div>
                    <a>MaskDetect</a>
                </div>
                <div className="Center">
                    <div className="Links">

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <a href="/">Home</a>
                            <div className='News'>12</div>
                        </div>

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <a href="/History">History</a>
                            <div className='News'>12</div>
                        </div>

                        <div className="Link">
                            <div className="Logo">
                                <img src={logo} />
                            </div>
                            <a href="/New_Session">New Session</a>
                            <div className='News'>12</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NavBar;