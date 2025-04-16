const Booking = require("../models/Booking");

exports.createBooking = (req, res) => {
    const { user_id, room_id, check_in, check_out } = req.body;

    Booking.create({ user_id, room_id, check_in, check_out }, (error, result) => {
        if (error) return res.status(500).json({ message: "Database error" });

        res.json({ message: "Booking successful" });
    });
};
