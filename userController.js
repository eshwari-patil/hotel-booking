const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });

        User.create({ name, email, password: hash }, (error, result) => {
            if (error) return res.status(500).json({ message: "Database error" });

            res.json({ message: "User registered successfully" });
        });
    });
};
