const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");

router.get("/", hotelController.getAllHotels);

module.exports = router;
