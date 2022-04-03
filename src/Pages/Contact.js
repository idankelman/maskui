import Title from "../Components/Title";
import { useState } from "react";
import { convertBase64 } from "../Services/Base64";


//==========================================================================

function Contact() {

    const [baseImage, setBaseImage] = useState("");

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);

    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };

    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };


    return (<div className="Contact">
        <Title title="Contact" />
        <div className="Contact-content">
            {/* <input type = "text"></input> */}

            <input
                type="file"
                onChange={(e) => {
                    uploadImage(e);
                }}
            />
            <br></br>
            <img src={baseImage} height="200px" />
        </div>
    </div>);
}
export default Contact;