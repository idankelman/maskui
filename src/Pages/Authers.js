import Idan from "../Assets/Authers/Idan.png";
import ofek from "../Assets/Authers/ofek.png";
import Cover from "../Assets/cover.jpg";
import Gmail from "../Assets/Social/Gmail.png";
import whatsapp from "../Assets/Social/whatsapp.png";
import Linkedin from "../Assets/Social/Linkedin.png";
import Github from "../Assets/Social/Github.png";

function Authers() {
    return (
    <div className="Authers">
        {/* <Title title="Authers"/> */}
        <div className = "Content">
            <div className = "Top">
                <img src ={Cover} alt = "logo" />
            </div>
            
            <div className ="Authers-Container">
            <div className = "Auther">
                    <div className = "Name">
                        Idan Kelman
                    </div>
                    <div className= "Pic">
                        <img src = {Idan} alt = "logo" />
                    </div>
                    <div className = "Description">
                        4th year student at Jeruslam College Of Engeneering
                        speciality in Computer Science.
                        work as a software developer.
                    </div>
                    <div className = "Links">

                        <a rel="https://www.linkedin.com/in/idan-kelman-cs/"  href="https://www.linkedin.com/in/idan-kelman-cs/">
                        <img src={Linkedin} width="30px" alt="LinkedIn"/></a>
             
                        <a rel="mailto:kelmanidan@gmail.com" href="mailto:kelmanidan@gmail.com">
                        <img src={Gmail} width="30px" alt="Gmail"/></a>
                  
                        <a rel="https://api.whatsapp.com/send?phone=0549764489"  href="https://api.whatsapp.com/send?phone=0549764489">
                        <img src={whatsapp} width="30px" alt="Secret"/></a>

                        <a rel="https://github.com/idankelman"  href="https://github.com/idankelman">
                        <img src={Github} width="30px" alt="Github"/></a>
                    </div>
                </div> 

                <div className = "Auther">
                    <div className = "Name">
                        Ofek Harpaz
                    </div>
                    <div className = "Pic">
                        <img src = {ofek} alt = "logo" />
                    </div>
                    <div className = "Description">
                        4th year student at Jeruslam College Of Engeneering
                        speciality in Computer Science.
                        work as a software developer.
                    </div>
                    <div className = "Links">
                        <a rel="https://www.linkedin.com/in/ofek-harpaz-185881184/"  href="https://www.linkedin.com/in/ofek-harpaz-185881184/">
                        <img src={Linkedin} width="30px" alt="LinkedIn"/></a>
             
                        <a rel="mailto:ofekharpaz6@gmail.com" href="mailto:ofekharpaz6@gmail.com">
                        <img src={Gmail} width="30px" alt="Gmail"/></a>
                  
                        <a rel="https://api.whatsapp.com/send?phone=0585885085"  href="https://api.whatsapp.com/send?phone=0585885085">
                        <img src={whatsapp} width="30px" alt="Secret"/></a>

                        <a rel="https://github.com/ofekharpaz9"   href="https://github.com/ofekharpaz">
                        <img src={Github} width="30px" alt="Github"/></a>

                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Authers;