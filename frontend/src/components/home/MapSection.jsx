import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { siteSettings } from '../../data/mockData';

const MapSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Our Clinics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our convenient locations for in-person consultations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Jhalawar Location */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Jhalawar Clinic</h3>
                </div>
                <p className="opacity-90">{siteSettings.contact.address1}</p>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <Navigation className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Jhalawar Location</p>
                    <p className="text-sm text-gray-500">Main Clinic</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Main Branch</span>
                  <span className="text-teal-600 font-semibold">Get Directions →</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jhalrapatan Location */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Jhalrapatan Clinic</h3>
                </div>
                <p className="opacity-90">{siteSettings.contact.address2}</p>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <Navigation className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Jhalrapatan Location</p>
                    <p className="text-sm text-gray-500">Branch Office</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Branch Office</span>
                  <span className="text-blue-600 font-semibold">Get Directions →</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Directions?</h3>
          <p className="mb-6 opacity-90">
            Call us for detailed directions to our clinic locations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${siteSettings.contact.phone1}`}
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {siteSettings.contact.phone1}
            </a>
            <a 
              href={`tel:${siteSettings.contact.phone2}`}
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {siteSettings.contact.phone2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;