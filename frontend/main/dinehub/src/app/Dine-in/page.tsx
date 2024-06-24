'use client';
import React, { useState } from 'react';

const DineIn = () => {
  const [reservationTime, setReservationTime] = useState<string | null>(null);

  const reservationOptions = [
    { time: '18:00', price: 'R50 x 2' },
    { time: '18:30', price: 'R50 x 2' },
    { time: '19:00', price: 'R50 x 2' },
    { time: '19:30', price: 'R50 x 2' },
    { time: '20:00', price: 'R50 x 2' },
  ];

  const handleReservation = (time: string) => {
    setReservationTime(time);
    console.log(`Reservation for ${time} confirmed!`);
  };

  return (
    <div>
      <h2>ukko</h2>
      <p>Reservation for parties of 1 to 6</p>
      <p>R50 deposit per person</p>

      <div>
        {reservationOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleReservation(option.time)}
            style={{
              backgroundColor: reservationTime === option.time ? 'blue' : 'white',
              color: reservationTime === option.time ? 'white' : 'black',
            }}
          >
            {option.time} - {option.price}
          </button>
        ))}
      </div>

      {reservationTime && (
        <div>
          <p>You have selected a reservation at {reservationTime}.</p>
          <button>Confirm Reservation</button>
        </div>
      )}
    </div>
  );
};

export default DineIn;