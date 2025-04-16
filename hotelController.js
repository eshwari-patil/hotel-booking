const Hotel = require("../models/Hotel");

exports.getAllHotels = (req, res) => {
    Hotel.getAll((error, results) => {
        if (error) return res.status(500).json({ message: "Database error" });

        res.json(results);
    });
};
