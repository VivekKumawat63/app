import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { siteSettings } from '../../data/mockData';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-red-600 font-semibold text-lg">
              {siteSettings.tagline}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-teal-700 leading-tight">
                {siteSettings.hero.title}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-800">
                {siteSettings.hero.subtitle}
              </h2>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">
                {siteSettings.hero.clinicName}
              </h3>
              <p className="text-xl font-semibold text-gray-700">
                {siteSettings.hero.location}
              </p>
              <p className="text-gray-600">
                {siteSettings.hero.description}
              </p>
            </div>

            <Button 
              asChild 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Right Content - Clinic Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Agrawal Homeo Clinic"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">10k+</div>
                <div className="text-xs text-gray-600">Happy Patients</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">5+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;