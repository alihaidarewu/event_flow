// initial code 

"use strict"

// ===== main code =====

// import all the packages 
let express = require("express")
let cors = require("cors")
let morgan = require("morgan")
let passport = require("passport")
let session = require("express-session")

let http = require("http")

let {swaggerSpecification,swaggerUi} = require("./config/swagger.config")
const superAdminRouter = require("./router/super_admin/super_admin.router")
const adminRouter = require("./router/admin/admin.router")
const eventsRouter = require("./router/events/events.router")

require("./config/passport.config")

// server create 
let app = express()
let myServer = http.createServer(app)

// connect with server 
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.set("trust proxy",1)
app.use(session({
    secret : "keyboard cat",
    resave : false ,
    saveUninitialized : true
}));
app.use(passport.initialize())
app.use(passport.session())

app.use("/apis",swaggerUi.serve,swaggerUi.setup(swaggerSpecification)) ;

app.use("/clubs",superAdminRouter);
app.use("/events",adminRouter);
app.use("/events",eventsRouter);

// request-response cycle 
app.get("/" , function(req,res){
    return res.status(200).json({
        "success" : true , 
        "message" : "This is HOME page"
    }) ;
});


// Other middlewares 
app.use(function(req,res,next){
    return res.status(404).json({
        "success" : false,
        "message" : "Page not found",

    });
});

app.use(function(err,req,res,next){
    return res.status(500).json({
        "success" : false,
        "message" : "Internal Server Error !!!",
        "error" : err.message
    });
});


app.use(function(req, res, next){

    res.set("Cache-Control" , "public, max-age=3600") ;
    next() ;

}) ;


// export codes 

module.exports = myServer
