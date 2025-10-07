import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { siteSettings, doctorInfo } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AH</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">AGRAWAL</h3>
                <p className="text-sm text-red-400 font-semibold">HOMEO CLINIC</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              भारत का उन्नत होम्योपैथिक हेल्थ सेंटर बर्षों के अनुभव और भरोसे के साथ!
            </p>
            <div className="flex space-x-4">
              <a href={siteSettings.social.youtube} className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={siteSettings.social.whatsapp} className="text-gray-400 hover:text-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={siteSettings.social.instagram} className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteSettings.social.facebook} className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-clinic" className="text-gray-300 hover:text-white transition-colors">About Clinic</Link></li>
              <li><Link to="/treatments" className="text-gray-300 hover:text-white transition-colors">Treatments</Link></li>
              <li><Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy" className="text-gray-300 hover:text-white transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-teal-400" />
                <div>
                  <p className="text-gray-300">{siteSettings.contact.phone1}</p>
                  <p className="text-gray-300">{siteSettings.contact.phone2}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-teal-400" />
                <p className="text-gray-300">{siteSettings.contact.email}</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-teal-400" />
                <div>
                  <p className="text-gray-300 text-sm">{siteSettings.contact.address1}</p>
                  <p className="text-gray-300 text-sm mt-1">{siteSettings.contact.address2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Agrawal Homeo Clinic. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed with ❤️ for better health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;