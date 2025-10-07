import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { siteSettings } from '../../data/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Clinic', href: '/about-clinic' },
    { name: 'About Founder', href: '/about-founder' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-teal-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Phone: {siteSettings.contact.phone1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Email: {siteSettings.contact.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden md:block">{siteSettings.contact.address1}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AGRAWAL</h1>
                <p className="text-sm text-red-600 font-semibold">HOMEO CLINIC</p>
                <p className="text-xs text-gray-600">Dr. Arpit Agrawal</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-teal-600 text-white rounded'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full"
              >
                <Link to="/appointment">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="bg-teal-600 hover:bg-teal-700 text-white mx-4 mt-2"
                >
                  <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;