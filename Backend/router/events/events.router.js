// ===== initial code =====

"use strict"

// ===== main code =====
// import all the packages 
let express = require("express");

const { getDraftEvents, getPublishedEvents, getCancelledEvents, getCompletedEvents } = require("../../controller/events/events.controller");

let eventsRouter = express.Router() ;

// all the routers
eventsRouter.get("/draft-events",getDraftEvents);
eventsRouter.get("/published-events", getPublishedEvents);
eventsRouter.get("/cancelled-events", getCancelledEvents);
eventsRouter.get("/completed-events", getCompletedEvents);



// ===== exports code ===== 

module.exports = eventsRouter