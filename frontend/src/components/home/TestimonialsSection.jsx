import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wide text-teal-600 font-semibold mb-4">
            TESTIMONIALS
          </h2>
          <h3 className="text-2xl font-bold text-gray-800">
            हमारे Patients का इलाज के बारे में क्या कहना है?
          </h3>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-xl border-2 border-teal-100">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <p className="font-semibold text-gray-800 text-lg">— {testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;