import Title from "../Components/Title";
import Idan from "../Assets/Idan.png";
import Cover from "../Assets/cover.jpg";
import Gmail from "../Assets/Social/Gmail.png";
import whatsapp from "../Assets/Social/whatsapp.png";
import Linkedin from "../Assets/Social/Linkedin.png";

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
                        {/* <a href="/Home">Gmail</a>
                        <a href="/Home">Facebook</a>
                        <a href="/Home">Linkedin</a> */}


                        <a rel="https://www.linkedin.com/in/idan-kelman-cs/"  href="https://www.linkedin.com/in/idan-kelman-cs/">
                        <img src={Linkedin} width="30px" alt="LinkedIn"/></a>
             
                        <a rel="mailto:kelmanidan@gmail.com" href="mailto:kelmanidan@gmail.com">
                        <img src={Gmail} width="30px" alt="Gmail"/></a>
                  
                        <a rel="https://api.whatsapp.com/send?phone=0549764489"  href="https://api.whatsapp.com/send?phone=0549764489">
                        <img src={whatsapp} width="23px" alt="Secret"/></a>
                    </div>
                </div> 

                <div className = "Auther">
                    <div className = "Name">
                        Ofek Zada
                    </div>
                    <div className = "Pic">
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
                        <img src={whatsapp} width="23px" alt="Secret"/></a>

                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Authers;