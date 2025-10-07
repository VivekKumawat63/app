import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { treatments } from '../../data/mockData';

// Animation keyframes for floating elements
const floatingAnimation = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
`;

const TreatmentGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-3">🩺</span>
            <h2 className="text-3xl font-bold text-teal-700">Book Online Treatment</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            घर बैठे पाइए विशेषज्ञ डॉक्टर से इलाज। हमारे अनुभवी होम्योपैथिक डॉक्टर से करवाइए अपना इलाज।
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.titleEnglish}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {treatment.titleHindi}
                    </h3>
                    <p className="text-teal-600 font-medium">
                      {treatment.titleEnglish}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {treatment.description}
                  </p>
                  
                  <Button 
                    asChild 
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <Link to={`/treatments/${treatment.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Treatments */}
        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3"
          >
            <Link to="/treatments">
              All Treatment &gt;
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;