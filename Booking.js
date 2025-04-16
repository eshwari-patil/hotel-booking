const pool = require("../config/db");

const Booking = {
  create: async ({ user_id, room_id, check_in, check_out }) => {
    try {
      const [result] = await pool.execute(
        "INSERT INTO bookings (user_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)",
        [user_id, room_id, check_in, check_out]
      );
      return result;
    } catch (error) {
      throw error;
    }
  },
  getBookings: async (offset, limit) => {
    try {
      if (offset < 0 || limit <= 0) throw new Error("Invalid pagination values");
      const [rows] = await pool.execute("SELECT * FROM bookings LIMIT ? OFFSET ?", [limit, offset]);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Booking;
