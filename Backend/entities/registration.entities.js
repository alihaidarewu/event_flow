// ===== initial code =====

"use strict"

// ===== main code =====

class Registration {
    constructor({
        id = null,
        userId,
        eventId,
        status = 'PENDING',
        ticketId = null,
        payment = null,
        createdAt = new Date(),
        updatedAt = new Date()
    }) {
        this.id = id;
        this.userId = userId;
        this.eventId = eventId;
        this.status = status;       // PENDING, CONFIRMED, CANCELLED 
        this.ticketId = ticketId;   
        this.qrCode = qrCode;       
        this.payment = payment;     
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    confirmRegistration(ticketId, qrCode) {
        this.status = 'CONFIRMED';
        this.ticketId = ticketId;
        this.qrCode = qrCode;
        this.updatedAt = new Date();
        return { success: true, message: "Registration is successfully completed" };
    }

    cancelRegistration() {
        this.status = 'CANCELLED';
        this.updatedAt = new Date();
        if (this.payment) {
            this.payment.status = 'REFUNDED'; 
        }
        return { success: true, message: "Registration is canceled" };
    }
    addPayment(paymentInstance) {
        this.payment = paymentInstance;
    }
}


// exports code 

module.exports = Registration