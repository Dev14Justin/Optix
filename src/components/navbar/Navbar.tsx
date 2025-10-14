

import { useState } from 'react';
import ThemeSwitcher from '../buttons/ThemeSwitcher';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#" className="text-texte-secondaire hover:text-primary block md:inline-block py-2 md:py-0">Services</a>
      <a href="#" className="text-texte-secondaire hover:text-primary block md:inline-block py-2 md:py-0">Solutions</a>
      <a href="#" className="text-texte-secondaire hover:text-primary block md:inline-block py-2 md:py-0">Insights</a>
      <a href="#" className="text-texte-secondaire hover:text-primary block md:inline-block py-2 md:py-0">Projet</a>
      <a href="#" className="text-texte-secondaire hover:text-primary block md:inline-block py-2 md:py-0">A Propos</a>
      <a href="#" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors block md:inline-block text-center">Contact</a>
    </>
  );

  return (
    <header className="bg-surface/80 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50 border-b border-transparent dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-texte-principal">
            Optix
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-texte-principal">
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-start space-y-4">
              {navLinks}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

