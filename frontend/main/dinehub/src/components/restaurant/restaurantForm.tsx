'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  reviews: string[];
}

interface RestaurantFormProps {
  restaurant: Restaurant;
  onBooking: (date: string) => void;
  onFavorite: () => void;
}

const restaurantSchema = z.object({
  name: z.string().min(3, 'Restaurant name must be at least 3 characters'),
  description: z.string().optional(),
  address: z.object({
    street: z.string().min(5, 'Street address must be at least 5 characters'),
    city: z.string().min(3, 'City must be at least 3 characters'),
    state: z.string().min(2, 'State must be at least 2 characters'),
    zipCode: z.string().min(5, 'Zip code must be at least 5 characters'),
  }),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  website: z.string().url('Website must be a valid URL'),
  cuisine: z.array(z.string()).min(1, 'At least one cuisine must be selected'),
  hours: z.object({
    monday: z.string().optional(),
    tuesday: z.string().optional(),
    wednesday: z.string().optional(),
    thursday: z.string().optional(),
    friday: z.string().optional(),
    saturday: z.string().optional(),
    sunday: z.string().optional(),
  }),
});

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  restaurant,
  onBooking,
  onFavorite,
}) => {
  const [date, setDate] = useState('');

  const handleBooking = () => {
    if (date) {
      onBooking(date);
    }
  };

  const form = useForm<z.infer<typeof restaurantSchema>>({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      name: restaurant.name,
      description: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
      },
      phone: '',
      website: '',
      cuisine: [],
      hours: {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
      },
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (values: z.infer<typeof restaurantSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Rating: {restaurant.rating}</p>
      <div>
        <h2>Reviews:</h2>
        <ul>
          {restaurant.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleBooking}>Book Now</button>
      </div>
      <button onClick={onFavorite}><Heart />Mark as Favorite</button>
  
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                  Best Chinese cuisine in towm
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Solo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name of the restaurant.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New's Cafe</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                   best Restaurant in town 
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
  export default RestaurantForm;