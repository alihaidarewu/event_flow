// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages 
let cloudinary = require("cloudinary").v2;
let multer = require("multer");
let {CloudinaryStorage} = require("multer-storage-cloudinary");

let path = require("path")

require("dotenv").config()


cloudinary.config({
    cloud_name : process.env.CLOUD_NAME ,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
});


let storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : function(req,file){
        return {
            folder : "event_flow",
            public_id : path.parse(file.originalname).name,
            allowed_formats : ["jpg","jpeg","png"]
        }
    },
});

let upload = multer({storage:storage})


// ===== exports code ===== 

module.exports = {
    cloudinary,
    upload
}
