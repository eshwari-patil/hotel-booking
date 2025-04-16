import React, { useState } from 'react';

function BookingForm({ room }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !checkIn || !checkOut) {
      setMessage('Please fill all fields.');
      return;
    }

    // Calculate total price (price * number of nights)
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const daysDifference = (checkOutDate - checkInDate) / (1000 * 3600 * 24);
    const totalPrice = room.price * daysDifference;

    setMessage(
      `Booking confirmed for ${room.name}! Check-in: ${checkIn}, Check-out: ${checkOut}. Total Price: $${totalPrice}`
    );
  };

  return (
    <div className="booking-form">
      <h2>Book {room.name}</h2>
      <p><strong>Price:</strong> ${room.price} per night</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-In Date:</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-Out Date:</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default BookingForm;
