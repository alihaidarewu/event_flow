// initial code 

"use strict"

// ===== main code =====

// import all the packages 
let passport = require("passport")
let LocalStrategy = require("passport-local").Strategy
let bcrypt = require("bcrypt")


passport.use(new LocalStrategy({usernameField:"email"},function(email,password,done){


    try{
        console.log("------------")
    }
    catch(error)
    {
        return done(error , false , {message : "Something Error To Authentication !!!"}) ;
    }

}))


// export codes 

module.exports = passport