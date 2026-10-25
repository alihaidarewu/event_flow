// // initial code 

// "use strict"

// // ===== main code =====

// // import all the packages 
// let swaggerJsDoc = require("swagger-jsdoc")
// let swaggerUi = require("swagger-ui-express")


// let options = {
//     definition : {
//         openapi : "3.0.0" ,
//         info : {
//             title : "Event Flow API's",
//             version : "1.0.0",
//             description : ""
//         } ,
//         servers : [
//             {
//                 url : "http://localhost:3000"
//             }
//         ]
//     },
//     apis : ["./swagger/*.js"]
// } ;


// let swaggerSpecification = swaggerJsDoc(options)


// // exports code 

// module.exports = {
//     swaggerUi ,
//     swaggerSpecification
// }


"use strict"

// ===== main code =====

// import all the packages 
let swaggerJsDoc = require("swagger-jsdoc")
let swaggerUi = require("swagger-ui-express")

let options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Event Flow API's",
            version: "1.0.0",
            description: "API documentation for the Event Flow application."
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            schemas: {
                Event: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            example: "c2b3a4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d"
                        },
                        title: {
                            type: "string",
                            example: "Annual Tech Hackathon"
                        },
                        description: {
                            type: "string",
                            nullable: true,
                            example: "24-hour coding challenge for university students."
                        },
                        date: {
                            type: "string",
                            format: "date-time",
                            example: "2026-11-15T00:00:00.000Z"
                        },
                        time: {
                            type: "string",
                            example: "10:00 AM"
                        },
                        venue: {
                            type: "string",
                            example: "Main Auditorium, Block C"
                        },
                        registrationFee: {
                            type: "number",
                            example: 15.00
                        },
                        bannerImage: {
                            type: "string",
                            nullable: true,
                            example: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
                        },
                        registrationDeadline: {
                            type: "string",
                            format: "date-time",
                            example: "2026-11-10T23:59:59.000Z"
                        },
                        capacity: {
                            type: "integer",
                            example: 200
                        },
                        status: {
                            type: "string",
                            enum: ["DRAFT", "PUBLISHED", "CANCELLED", "COMPLETED"],
                            example: "PUBLISHED"
                        },
                        clubId: {
                            type: "string",
                            example: "8f4167b8-8ff4-4604-b5b1-c70728fb4c7c"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time",
                            example: "2026-10-07T19:21:00.000Z"
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time",
                            example: "2026-10-07T19:21:00.000Z"
                        }
                    }
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: false
                        },
                        message: {
                            type: "string",
                            example: "Error description message"
                        },
                        error: {
                            type: "string",
                            example: "Detailed error message or exception trace"
                        }
                    }
                }
            }
        }
    },
    apis: ["./swagger/*.js", "./routes/*.js", "./controller/**/*.js"]
};

let swaggerSpecification = swaggerJsDoc(options)

// exports code 
module.exports = {
    swaggerUi,
    swaggerSpecification
}