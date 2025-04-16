const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Import MySQL connection

router.post('/bookings', (req, res) => {
    console.log('Received booking data:', req.body); // Debug log

    const { customer_name, room_number, check_in, check_out } = req.body;
    const sql = 'INSERT INTO bookings (customer_name, room_number, check_in, check_out) VALUES (?, ?, ?, ?)';

    db.query(sql, [customer_name, room_number, check_in, check_out], (err, result) => {
        if (err) {
            console.error('Error inserting booking:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'Booking successful', bookingId: result.insertId });
    });
});

module.exports = router;
