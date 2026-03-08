// Mongoose Model for Booking
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Started', 'Completed', 'Cancelled'], default: 'Pending' },
    paymentDetails: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
