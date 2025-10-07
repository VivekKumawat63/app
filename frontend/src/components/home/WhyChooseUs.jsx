import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { whyChooseUs } from '../../data/mockData';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            क्यों चुनें Agrawal Homeopathic Clinic
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <span className="text-2xl group-hover:grayscale">{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6">
            We're welcoming new patients and can't wait to meet you!
          </p>
          <Button 
            asChild 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full"
          >
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;