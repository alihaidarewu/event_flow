// ===== initial code =====

"use strict"

// ===== main code =====

class Event{
    constructor(eventId,eventTitle,eventDescription,eventDate,eventTime,eventVenue,eventRegFee,
        eventImage,eventRegDeadline,eventCapacity,eventStatus,clubId,clubName,registrations = [] ) {
        this.eventId = eventId;
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.eventDate = eventDate;             // Expected format: YYYY-MM-DD or Date object
        this.eventTime = eventTime;             // Expected format: HH:MM
        this.eventVenue = eventVenue;
        this.eventRegFee = eventRegFee;         
        this.eventImage = eventImage;           
        this.eventRegDeadline = eventRegDeadline; // Expected format: YYYY-MM-DD or Date object
        this.eventCapacity = eventCapacity;     
        this.eventStatus = eventStatus;         // e.g., 'Upcoming', 'Ongoing', 'Past', 'Cancelled'
        this.clubId = clubId;
        this.clubName = clubName;
        this.registrations = registrations;     // Array storing user IDs or registration objects
    }

    // Check if the event has reached its maximum capacity
    isFull() 
    {
        return this.registrations.length >= this.eventCapacity;
    }

    // Check if the registration deadline has passed
    isDeadlinePassed() 
    {
        const today = new Date();
        const deadline = new Date(this.eventRegDeadline);
        // Reset hours to compare only dates
        today.setHours(0, 0, 0, 0);
        deadline.setHours(0, 0, 0, 0);
        return today > deadline;
    }

    // Register a new user to the event
    registerUser(userId) {
        if (this.eventStatus === 'Cancelled') {
            return { success: false, message: "Cannot register. This event has been cancelled." };
        }
        if (this.isDeadlinePassed()) {
            return { success: false, message: "Registration deadline has passed." };
        }
        if (this.isFull()) {
            return { success: false, message: "Event is full." };
        }
        if (this.registrations.includes(userId)) {
            return { success: false, message: "User is already registered for this event." };
        }

        this.registrations.push(userId);
        return { success: true, message: "Successfully registered for the event!" };
    }
}


// export codes 

module.exports = Event