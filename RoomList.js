import React from 'react';

function RoomList({ rooms, onSelectRoom }) {
  return (
    <div className="room-list">
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} onClick={() => onSelectRoom(room)} className="room-item">
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p><strong>Price:</strong> ${room.price} per night</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
