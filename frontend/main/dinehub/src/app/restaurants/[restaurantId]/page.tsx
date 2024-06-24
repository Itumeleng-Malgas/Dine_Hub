// src/app/restaurants/[restaurantId]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import RestaurantForm from '../../../components/restaurant/restaurantForm';

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Restaurant {
    id: string;
    name: string;
    rating: number;
    reviews: string[];
    description?: string;
    address?: Address;
}


const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Restaurant 1',
        rating: 4.5,
        reviews: ['Great food!', 'Excellent service.'],
        description: 'A fine dining experience.',
        address: {
            street: '123 Main St',
            city: 'Jhb',
            state: 'CA',
            zip: '12345'
        }
    },
    {
        id: '2',
        name: 'Restaurant 2',
        rating: 4.0,
        reviews: ['Nice ambiance.', 'Good value for money.'],
        description: 'A cozy place to eat.',
        address: {
            street: '456 Elm St',
            city: 'Durban',
            state: 'KZN',
            zip: '67890'
        }
    }
];

const RestaurantPage: React.FC = () => {
  const restaurant: Restaurant = {
    id: '123',
    name: 'HOUSE OF GRILL',
    rating: 4.5,
    reviews: ['Great food!', 'Excellent service.'],
  };

  const handleBooking = (date: string) => {
    console.log(`Booking for ${date}`);
  };

  const handleFavorite = () => {
    console.log('Marked as favorite');
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onBooking={handleBooking}
      onFavorite={handleFavorite}
    />
  );
};
export default RestaurantPage;
