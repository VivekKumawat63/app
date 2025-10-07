import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { specialFeatures, whyChooseUs } from '../data/mockData';

const AboutClinic = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Clinic</h1>
          <p className="text-xl max-w-3xl mx-auto">
            भारत का उन्नत होम्योपैथिक हेल्थ सेंटर बर्षों के अनुभव और भरोसे के साथ
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Agrawal Homeo Clinic has been serving the community for over 5 years with a commitment to 
                providing authentic homeopathic treatment. Founded with the vision of making quality healthcare 
                accessible to everyone, we have treated over 10,000 patients with natural, safe, and effective remedies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                  alt="Agrawal Homeo Clinic"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To provide holistic healthcare solutions through the science of homeopathy, 
                  treating not just the disease but the person as a whole. We believe in the 
                  body's natural ability to heal itself when given the right support.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Personalized treatment plans
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    No side effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Root cause treatment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Online consultation available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              हमारे Treatment की ख़ास बात
            </h2>
            <p className="text-xl text-gray-600">
              Agrawal Clinic Special होम्योपैथी क्या है ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Agrawal Homeopathic Clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Facilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Clinic</h3>
                <p className="text-gray-600">
                  Well-equipped clinic with modern facilities for patient comfort and accurate diagnosis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Online Consultation</h3>
                <p className="text-gray-600">
                  Connect with our doctors from anywhere in India through our online consultation platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Home Delivery</h3>
                <p className="text-gray-600">
                  Free home delivery of medicines across India with proper packaging and tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClinic;