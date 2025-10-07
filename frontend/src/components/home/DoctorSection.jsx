import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { doctorInfo } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';

const DoctorSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Appointment Request Sent!",
      description: "We will contact you shortly to confirm your appointment.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Info */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src={doctorInfo.image}
                alt={doctorInfo.name}
                className="w-80 h-96 object-cover rounded-2xl shadow-xl mx-auto lg:mx-0"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{doctorInfo.name}</h2>
              <p className="text-teal-600 font-semibold text-lg">
                {doctorInfo.qualifications}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {doctorInfo.about}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {doctorInfo.specialties.map((specialty, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-teal-500">
                    <p className="text-sm font-medium text-gray-800">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <Card className="shadow-xl border-2 border-teal-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Book An Appointment
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Describe your health concern"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
                  >
                    Submit
                  </Button>
                </form>
                
                <p className="text-center text-sm text-gray-600 mt-4">
                  Thanks for submitting! We'll contact you soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;