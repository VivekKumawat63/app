import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { treatments } from '../data/mockData';
import { Search } from 'lucide-react';

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTreatments = treatments.filter(treatment =>
    treatment.titleHindi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Treatments</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            विभिन्न स्वास्थ्य समस्याओं के लिए प्रभावी होम्योपैथिक उपचार
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
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
                    
                    {/* Symptoms */}
                    <div className="flex flex-wrap gap-2">
                      {treatment.symptoms.slice(0, 3).map((symptom, index) => (
                        <span key={index} className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                          {symptom}
                        </span>
                      ))}
                    </div>
                    
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

          {filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No treatments found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book an online consultation with Dr. Arpit Agrawal today
          </p>
          <Button 
            asChild 
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Treatments;