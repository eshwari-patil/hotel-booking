const db = require("../config/db");

const Room = {
    getAll: (callback) => {
        db.query("SELECT * FROM rooms", callback);
    },
    getByHotelId: (hotel_id, callback) => {
        db.query("SELECT * FROM rooms WHERE hotel_id = ?", [hotel_id], callback);
    }
};

module.exports = Room;
