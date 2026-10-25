// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages 
let prismaClient = require("../../utils/prisma.utils");

let getDraftEvents = async function(req,res){

    try{

        let draftEvents = await prismaClient.Event.findMany({
            where : {
                status : "DRAFT"
            }
        }) ;

        return res.status(200).json({
            success: true,
            data: draftEvents
        });

    }
    catch(err){
        console.log("Find error to get draft events : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get draft events",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}


let getPublishedEvents = async function(req, res) {
    try {
        let publishedEvents = await prismaClient.Event.findMany({
            where: {
                status: "PUBLISHED"
            }
        });

        return res.status(200).json({
            success: true,
            data: publishedEvents
        });
    } catch (err) {
        console.log("Error to get published events : ", err.message);
        return res.status(400).json({
            success: false,
            message: "Error to get published events",
            error: err.message
        });
    }
};


let getCancelledEvents = async function(req, res) {
    try {
        let cancelledEvents = await prismaClient.Event.findMany({
            where: {
                status: "CANCELLED"
            }
        });

        return res.status(200).json({
            success: true,
            data: cancelledEvents
        });
    } catch (err) {
        console.log("Error to get cancelled events : ", err.message);
        return res.status(400).json({
            success: false,
            message: "Error to get cancelled events",
            error: err.message
        });
    }
};


let getCompletedEvents = async function(req, res) {
    try {
        let completedEvents = await prismaClient.Event.findMany({
            where: {
                status: "COMPLETED"
            }
        });

        return res.status(200).json({
            success: true,
            data: completedEvents
        });
    } catch (err) {
        console.log("Error to get completed events : ", err.message);
        return res.status(400).json({
            success: false,
            message: "Error to get completed events",
            error: err.message
        });
    }
};




// ===== export code =====

module.exports = {
    getDraftEvents,
    getPublishedEvents,
    getCompletedEvents,
    getCancelledEvents,
}
