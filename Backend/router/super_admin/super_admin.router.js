// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages 
let express = require("express")

let {upload} = require("../../utils/cloudinary.utils");
const { createClub, getAllClubs, getSingleClub, getSearchClub } = require("../../controller/super_admin/super_admin.controller");

let superAdminRouter = express.Router() ;

superAdminRouter.post("/create-club",upload.single("profileImage"),createClub) ;
superAdminRouter.get("/all-clubs",getAllClubs);
superAdminRouter.get("/single-club",getSingleClub);
superAdminRouter.post("/search-club",getSearchClub);



// ===== exports code ===== 

module.exports = superAdminRouter