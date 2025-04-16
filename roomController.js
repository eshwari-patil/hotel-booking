const Room = require("../models/Room");

exports.getRoomsByHotel = (req, res) => {
    const { hotel_id } = req.query;

    Room.getByHotelId(hotel_id, (error, results) => {
        if (error) return res.status(500).json({ message: "Database error" });

        res.json(results);
    });
};
