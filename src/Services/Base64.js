// // import {base64encoder, base64decoder ,Buffer} from "base64image";
// const base64 = require("base64image");


// export const Encode = (url) => {
//     // var options = {string: true};
//     let options = {localFile: true, string: true};
//     base64.base64encoder(url, options, function (err, image) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(image);
//     });
// }


// export const Decode = (base64) => {
//     var options = {filename: 'test', filePath: './tmp/uploads'};
//     var imageData = new base64.Buffer(base64, 'base64');
    
//     base64.base64decoder(imageData, options, function (err, saved) {
//         if (err) { console.log(err); }  
//         console.log(saved);    
//         return saved;
//     });  
// }
export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
