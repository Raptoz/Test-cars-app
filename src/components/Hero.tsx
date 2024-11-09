import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?auto=format&fit=crop&q=80"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Découvrez Notre Collection de Voitures Premium
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Location de voitures de luxe et sportives aux meilleurs prix
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Lieu de prise en charge"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}