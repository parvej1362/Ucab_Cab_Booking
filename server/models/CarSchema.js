// Mongoose Model for Car
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String },
    seatCapacity: { type: Number, required: true },
    pricePerKm: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Car', CarSchema);
