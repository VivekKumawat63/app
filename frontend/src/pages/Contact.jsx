import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Youtube, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { siteSettings } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            हमसे जुड़ें और पाएं बेहतर स्वास्थ्य की जानकारी। हम आपकी सेवा में हमेशा तैयार हैं।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    Get in Touch
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                        <p className="text-gray-600">{siteSettings.contact.phone1}</p>
                        <p className="text-gray-600">{siteSettings.contact.phone2}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">{siteSettings.contact.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Clinic Addresses</h4>
                        <p className="text-gray-600 mb-2">{siteSettings.contact.address1}</p>
                        <p className="text-gray-600">{siteSettings.contact.address2}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sunday: Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    Follow Us
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href={siteSettings.social.youtube}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-6 h-6 text-red-600" />
                      <span className="font-medium text-gray-700">YouTube</span>
                    </a>

                    <a 
                      href={siteSettings.social.whatsapp}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <span className="font-medium text-gray-700">WhatsApp</span>
                    </a>

                    <a 
                      href={siteSettings.social.instagram}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-pink-50 hover:border-pink-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-6 h-6 text-pink-600" />
                      <span className="font-medium text-gray-700">Instagram</span>
                    </a>

                    <a 
                      href={siteSettings.social.facebook}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-6 h-6 text-blue-600" />
                      <span className="font-medium text-gray-700">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg bg-teal-50 border-teal-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For urgent medical consultations, book an appointment directly.
                  </p>
                  <Button 
                    asChild 
                    className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                  >
                    <a href="/appointment">Book Appointment Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Find Our Clinics
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Jhalawar Clinic
                </h3>
                <p className="text-gray-600 mb-4">
                  {siteSettings.contact.address1}
                </p>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map View - Jhalawar Location</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Jhalrapatan Clinic
                </h3>
                <p className="text-gray-600 mb-4">
                  {siteSettings.contact.address2}
                </p>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map View - Jhalrapatan Location</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;