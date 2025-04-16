const db = require("../config/db");

const Hotel = {
    getAll: (callback) => {
        db.query("SELECT * FROM hotels", callback);
    },
    getById: (id, callback) => {
        db.query("SELECT * FROM hotels WHERE id = ?", [id], callback);
    }
};

module.exports = Hotel;
