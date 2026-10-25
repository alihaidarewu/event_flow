// ===== initial code =====

"use strict"

// ===== main code =====

class Club {
    constructor(
        clubId,
        clubName,
        clubDescription,
        clubProfilePic,
        clubAdmin,
        clubEvents = [] 
    ) {
        this.clubId = clubId;
        this.clubName = clubName;
        this.clubDescription = clubDescription;
        this.clubProfilePic = clubProfilePic; 
        this.clubAdmin = clubAdmin;           
        this.clubEvents = clubEvents;        
    }

    addEvent(event) {
        const eventExists = this.clubEvents.some(e => e.eventId === event.eventId);
        
        if (eventExists) {
            return { success: false, message: "This event already exists !" };
        }

        this.clubEvents.push(event);
        return { success: true, message: `"${event.eventTitle}" Event Added Successfully` };
    }

    getEventById(eventId) {
        const event = this.clubEvents.find(e => e.eventId === eventId);
        return event || null; 
    }

    getTotalEventsCount() {
        return this.clubEvents.length;
    }
}



// export codes 

module.exports = Club
