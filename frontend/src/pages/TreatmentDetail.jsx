import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { treatments } from '../data/mockData';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = treatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Not Found</h2>
          <p className="text-gray-600 mb-6">The treatment you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/treatments">Back to Treatments</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20">
              <Link to="/treatments" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Treatments
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{treatment.titleHindi}</h1>
              <h2 className="text-2xl font-semibold mb-6 opacity-90">{treatment.titleEnglish}</h2>
              <p className="text-lg leading-relaxed opacity-90">
                {treatment.description}
              </p>
            </div>
            <div>
              <img
                src={treatment.image}
                alt={treatment.titleEnglish}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Symptoms */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-teal-600 mr-3" />
                      Common Symptoms
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {treatment.symptoms.map((symptom, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-gray-700">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment Approach */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Our Treatment Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {treatment.treatment}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-teal-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-teal-800 mb-2">Constitutional Treatment</h4>
                        <p className="text-teal-700 text-sm">
                          Personalized medicine based on your individual constitution and health history.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Anti-Miasmatic Therapy</h4>
                        <p className="text-blue-700 text-sm">
                          Advanced treatment targeting the root cause to prevent recurrence.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment Process */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Treatment Process
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Initial Consultation</h4>
                          <p className="text-gray-600 text-sm">Detailed case taking and symptom analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Remedy Selection</h4>
                          <p className="text-gray-600 text-sm">Personalized medicine selection based on your symptoms</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Follow-up Care</h4>
                          <p className="text-gray-600 text-sm">Regular monitoring and adjustment of treatment</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book Appointment */}
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Book Consultation
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-teal-600 mb-2">₹200</div>
                    <p className="text-sm text-gray-600">One-time consultation fee</p>
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white mb-4">
                    <Link to="/appointment">Book Now</Link>
                  </Button>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>45 minutes consultation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Free follow-up support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Home delivery of medicines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Treatment Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Chronic Conditions</Badge>
                    <Badge variant="secondary">Natural Healing</Badge>
                    <Badge variant="secondary">No Side Effects</Badge>
                    <Badge variant="secondary">Holistic Care</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Need Help?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600">
                      Contact us for any questions about this treatment.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Phone:</strong> +91-7733844557</p>
                      <p><strong>Email:</strong> agrawalhomeoclinic.jhalawar@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;