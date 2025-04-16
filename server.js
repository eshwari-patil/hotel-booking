const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable frontend-backend communication
app.use(express.json()); // Enable JSON body parsing

const bookingRoutes = require('./routes/bookingRoutes'); // Import routes
app.use('/api', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
