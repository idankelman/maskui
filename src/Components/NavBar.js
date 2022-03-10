import logo from "../Assets/mask.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";


  //=========================================================
  //     private Fuctions
  //=========================================================


function setActive() {


    //[1]
    //setting all of the other links to not be deactivated
    let all = document.getElementsByClassName("Link");
    for (let i = 0; i < all.length; i++) {
      all[i].style.backgroundColor = "";
    }

    //[2]
    //setting the active link to be activated
    let Active = document.querySelector(".Link a.selected");
    if (Active != null) {
      Active.parentElement.style.backgroundColor = "#0D2E60";
    }

  }



function NavBar() {


  //=========================================================
  //     Fuctions
  //=========================================================


  useEffect(() => {
    setActive();
  });

  

  //=========================================================
  //     Render
  //=========================================================

  return (
    <div className="Navbar">
      <div className="Container">
        <div className="Top">
          <div className="Logo">
            <img src={logo} />
          </div>
          <a>Mask Detect</a>
        </div>
        <div className="Center">
          <div className="Links">
            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/History" activeClassName="selected">
                History
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/New_Session" activeClassName="selected">
                New Session
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/Help" activeClassName="selected">
                Help
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/Authers" activeClassName="selected">
                Authers
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/About" activeClassName="selected">
                About Mechanisim
              </NavLink>
              <div className="News">12</div>
            </div>

            <div className="Link">
              <div className="Logo">
                <img src={logo} />
              </div>
              <NavLink exact to="/Contact" activeClassName="selected">
                Contact
              </NavLink>
              <div className="News">12</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(NavBar);
