// ===== initial code =====

"use strict"

// ===== main code =====

// import all tha packages 
let {v4 : uuidv4} = require("uuid")

let prismaClient = require("../../utils/prisma.utils")

// controllers 
let createClub = async function(req,res){

    try{

        let {name,description,} = req.body ;

        if (!name){
            return res.status(400).json({
                success : false ,
                message : "Club name is required"
            });
        };

        let profileImageURL  = null;
        if (req.file && req.file.path) {
            profileImageURL = req.file.path; 
        }

        let newClub = await prismaClient.Club.create({
            data: {
                id: uuidv4(),
                name,
                description: description || null,
                profileImage: profileImageURL

            }
        }) ;

        return res.status(201).json({
            success: true,
            message: "Club created successfully",
            data: newClub
        });

    }
    catch(err){
        console.log("Find error to create the club : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to create club",
            error : err.message
        });
    }    
    finally{
        await prismaClient.$disconnect()
    }
}



let getAllClubs = async function(req,res){

    try{

        let allClubs = await prismaClient.Club.findMany() ;

        return res.status(200).json({
            success: true,
            data: allClubs
        });

    }
    catch(err){
        console.log("Find error to get clubs : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get clubs",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}



let getSingleClub = async function(req,res){

    try{

        let club = await prismaClient.Club.findMany({
            where: {
                id : req.query.clubId
            }
        }) ;

        return res.status(200).json({
            success: true,
            data: club
        });

    }
    catch(err){
        console.log("Find error to get the club : ",err.message)
        return res.status(400).json({
            success : false,
            message : "Find error to get club",
            error : err.message
        });
    }
    finally{
        await prismaClient.$disconnect()
    }

}



let getSearchClub = async function (req, res) {
    try {
        const clubName  = req.body.clubName;

        if (!clubName) {
            return res.status(400).json({
                success: false,
                message: "Club search query 'clubName' is required"
            });
        }

        let club = await prismaClient.club.findMany({
            where: {
                name: {
                    contains: clubName,
                    mode: 'insensitive' // Case-insensitive search (PostgreSQL)
                }
            }
        });

        return res.status(200).json({
            success: true,
            data: club
        });

    } catch (err) {
        console.log("Find error to get the club : ", err.message);
        return res.status(400).json({
            success: false,
            message: "Find error to get club",
            error: err.message
        });
    }
};





// ===== exports code ===== 

module.exports = {
    createClub,
    getAllClubs,
    getSingleClub,
    getSearchClub,
}