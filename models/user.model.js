const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        surname: String,
        email: String,
        password: String,
        phone: String,
        bookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Booking"
            }
        ],
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;