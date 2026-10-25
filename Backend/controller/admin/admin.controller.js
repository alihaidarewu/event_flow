// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages 
let prismaClient = require("../../utils/prisma.utils");


let createEvent = async function(req,res){

    try{

        let {title,description,date,time,venue,registrationFee,registrationDeadline,capacity,
            clubId} = req.body ;

            let bannerImage = null;
            if (req.file && req.file.path) {
                bannerImage = req.file.path; 
            }

        let newEvent = await prismaClient.event.create({
            data: {
                title,
                description: description || null,
                date: new Date(date),
                time,
                venue,
                registrationFee: Number.parseFloat(registrationFee),
                bannerImage,
                registrationDeadline: new Date(registrationDeadline), 
                capacity: Number.parseInt(capacity, 10), 
                status:  "DRAFT",
                clubId
            }
        });

        return res.status(201).json({
            success: true,
            message : "New event created successfully",
            data: newEvent
        });

    }
    catch(err){
        console.log("Find error to create the event : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to create event",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}



let getAllEvents = async function(req,res){

    try{

        let allEvents = await prismaClient.Event.findMany() ;

        return res.status(200).json({
            success: true,
            data: allEvents
        });

    }
    catch(err){
        console.log("Find error to get the events : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get events",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}


let getSingleEvent = async function(req,res){

    try{

        let event = await prismaClient.Event.findMany({
            where : {
                id : req.query.eventId
            }
        }) ;

        return res.status(200).json({
            success: true,
            data: event
        });

    }
    catch(err){
        console.log("Find error to get the event : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get event",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}



let getSearchEvent = async function(req,res){

    try{

        let event = await prismaClient.Event.findMany({
            where : {
                title : req.body.eventName
            }
        }) ;

        return res.status(200).json({
            success: true,
            data: event
        });

    }
    catch(err){
        console.log("Find error to get the event : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get event",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}


// ===== exports code ===== 

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    getSearchEvent,
}