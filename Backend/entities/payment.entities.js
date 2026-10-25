// ===== initial code =====

"use strict"

// ===== main code =====

class Payment {
    constructor({
        id = null,
        registrationId,
        amount,
        method = 'BKASH',
        status = 'INITIATED',
        transactionId = null,
        createdAt = new Date(),
        updatedAt = new Date()
    }) {
        this.id = id;
        this.registrationId = registrationId;
        this.amount = Number(amount); 
        this.method = method;         // BKASH, NAGAD,  
        this.status = status;         // INITIATED, SUCCESSFUL, FAILED, REFUNDED
        this.transactionId = transactionId;    // bKash  TrxID
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // completePayment(transactionId, trxId) {
    //     this.status = 'SUCCESSFUL';
    //     this.transactionId = transactionId;
    //     this.trxId = trxId;
    //     this.updatedAt = new Date();
    //     return { success: true, status: this.status };
    // }

    // failPayment() {
    //     this.status = 'FAILED';
    //     this.updatedAt = new Date();
    //     return { success: true, status: this.status };
    // }
}


// exports code 

module.exports = Payment