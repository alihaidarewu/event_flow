// ===== initial code =====

"use strict"


// ===== main code =====

// import all the packages 
let myServer = require("./app")

let chalk = require("chalk")
require("dotenv").config()

let port = process.env.PORT || 3000 ;
let consoleDesign = chalk.bgRed.white.bold.italic ; 

// listen the server 

myServer.listen(port, function(err){

    if(err){
        console.log("Find Error To Run The Event Flow Server ‼")
    }
    else{
        console.log(consoleDesign(`Event Flow Server Is Running At http://localhost:${port} ...`))
    }

});


