import {base64encoder, base64decoder ,Buffer} from "base64image";


export const Encode = (url) => {
    // var options = {string: true};
    options = {localFile: true, string: true};
    base64encoder(url, options, function (err, image) {
        if (err) {
            console.log(err);
        }
        console.log(image);
    });
}


export const Decode = (base64) => {
    var options = {filename: 'test', filePath: './tmp/uploads'};
    var imageData = new Buffer(base64, 'base64');
    
    base64decoder(imageData, options, function (err, saved) {
        if (err) { console.log(err); }  
        console.log(saved);    
        return saved;
    });  
}