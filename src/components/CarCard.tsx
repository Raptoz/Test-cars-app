import React from 'react';
import { Calendar, Fuel, Gauge, Users } from 'lucide-react';

interface CarCardProps {
  model: string;
  image: string;
  price: number;
  year: number;
  seats: number;
  fuel: string;
  speed: string;
}

export default function CarCard({ model, image, price, year, seats, fuel, speed }: CarCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={model} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{model}</h3>
          <span className="text-lg font-bold text-blue-600">{price}€<span className="text-sm font-normal">/jour</span></span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{seats} places</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel className="w-4 h-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Gauge className="w-4 h-4" />
            <span>{speed}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Réserver maintenant
        </button>
      </div>
    </div>
  );
}