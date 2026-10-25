// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages 
let bcrypt = require("bcrypt")

let SALT_ROUNDS = 10

function encryptData (data)
{
    bcrypt.hash(data,SALT_ROUNDS,function(err,hash){

        if(err){
            return {
                success : false ,
                error : "find error to encrypt the data."
            }
        }
        else{
            return {
                success : true ,
                data : hash
            }
        }

    })
}


function compareEncryptData(mainData,comparableData){
    bcrypt.compare(mainData,comparableData,function(err,result){

        if(err){
            return {
                success : false ,
                error : "find error to compare the data"
            }
        }
        else
        {
            return {
                success : true
            }
        }

    })
}



// ===== exports code ===== 

module.exports = {
    encryptData ,
    compareEncryptData
}
