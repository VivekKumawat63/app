import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { treatmentProcess } from '../../data/mockData';
import { Star } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            हमारा प्लान कैसे काम करता है ?
          </h2>
          <h3 className="text-3xl font-bold text-teal-700">
            घर बैठे Online इलाज की Steps
          </h3>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {treatmentProcess.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
                      <Star className="w-8 h-8" fill="currentColor" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Step connector */}
              {index < treatmentProcess.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-300 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
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

export default ProcessSection;