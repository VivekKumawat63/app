import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteSettings, doctorInfo } from '../../data/mockData';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl font-bold text-teal-600">{siteSettings.contact.phone1}</div>
                <div className="text-4xl font-bold text-teal-600">{siteSettings.contact.phone2}</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
                  <p className="text-gray-600">{siteSettings.contact.phone1}, {siteSettings.contact.phone2}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">{siteSettings.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Clinic Address</h3>
                  <p className="text-gray-600 mb-1">{siteSettings.contact.address1}</p>
                  <p className="text-gray-600">{siteSettings.contact.address2}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM-8PM, Sat: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="text-center">
            <div className="relative">
              <img
                src={doctorInfo.image}
                alt={doctorInfo.name}
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            asChild 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;