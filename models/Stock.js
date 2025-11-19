const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String, required: true, unique: true, uppercase: true
    }, likes: [{
        type: String, // Hashed IP addresses
        required: true
    }]
});

module.exports = mongoose.model('Stock', stockSchema);
