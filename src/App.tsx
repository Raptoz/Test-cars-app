import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import { cars } from './data/cars';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Car className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">AutoLuxe</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Véhicules</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Réserver
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Accueil</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Véhicules</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Réserver
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Flotte Premium</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules haut de gamme pour une expérience de conduite exceptionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">AutoLuxe</span>
              </div>
              <p className="text-gray-400">
                Location de voitures de luxe depuis 2010
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Accueil</a></li>
                <li><a href="#" className="hover:text-white">Véhicules</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Avenue des Champs-Élysées</li>
                <li>75008 Paris, France</li>
                <li>+33 1 23 45 67 89</li>
                <li>contact@autoluxe.fr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Inscrivez-vous pour recevoir nos offres exclusives
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 AutoLuxe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;