import React, { useState } from 'react';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  const [rooms] = useState([
    { id: 1, name: 'Deluxe Room', price: 100, description: 'A luxurious room with all amenities.' },
    { id: 2, name: 'Standard Room', price: 75, description: 'A comfortable room for a great stay.' },
    { id: 3, name: 'Suite Room', price: 150, description: 'A spacious suite with stunning views.' },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="App">
      <h1>Hotel Booking System</h1>
      <RoomList rooms={rooms} onSelectRoom={handleRoomSelection} />
      {selectedRoom && <BookingForm room={selectedRoom} />}
    </div>
  );
}

export default App;
