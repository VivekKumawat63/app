import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { specialFeatures } from '../../data/mockData';

const SpecialFeatures = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Advanced Homeopathic Treatment घर बैठे
          </h2>
          <div className="flex justify-center mb-8">
            <div className="text-6xl">⭐</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {specialFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-200">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              One Time रजिस्ट्रेशन फ़ीस / परामर्श शुल्क @200/-
            </h3>
            <p className="text-gray-600 mb-6">
              दवाईयो का शुल्क डॉ. से परामर्श के बाद आपको बता दिया जायेगा, शुल्क का भुगतान होने के बाद दवाईया आपके बताये एड्रेस पर deliver कर दी जाएगी
            </p>
            <Button 
              asChild 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full"
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Treatment Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
              alt="Homeopathic Treatment"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
              alt="Online Consultation"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;