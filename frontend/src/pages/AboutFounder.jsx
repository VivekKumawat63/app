import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { doctorInfo } from '../data/mockData';

const AboutFounder = () => {
  const achievements = [
    "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
    "Diploma in Nutritional Health Education",
    "PG Diploma in Psychological Counselling",
    "5+ Years of Clinical Experience",
    "10,000+ Successfully Treated Patients",
    "Specialized in Constitutional Homeopathy",
    "Expert in Anti-Miasmatic Treatment"
  ];

  const expertise = [
    "Chronic Disease Management",
    "Skin Disorders and Allergies",
    "Mental Health and Psychological Counseling",
    "Digestive and Metabolic Disorders", 
    "Respiratory Conditions",
    "Pediatric Homeopathy",
    "Women's Health Issues",
    "Men's Health Problems"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Meet Our Founder</h1>
              <h2 className="text-2xl font-semibold mb-4">{doctorInfo.name}</h2>
              <p className="text-lg opacity-90">
                {doctorInfo.qualifications}
              </p>
            </div>
            <div className="text-center">
              <img
                src={doctorInfo.image}
                alt={doctorInfo.name}
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  About Dr. Arpit Agrawal
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Dr. Arpit Agrawal is a distinguished homeopathic physician with a passion for holistic healing 
                  and patient-centered care. With extensive qualifications in homeopathic medicine, nutritional 
                  health, and psychological counseling, he brings a comprehensive approach to healthcare that 
                  addresses not just symptoms but the underlying causes of illness.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  His journey in homeopathy began with a deep belief in the body's natural ability to heal itself. 
                  Over the years, he has refined his skills in constitutional remedies and anti-miasmatic treatments, 
                  helping thousands of patients achieve lasting health improvements without the side effects 
                  commonly associated with conventional medicine.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Dr. Agrawal's approach combines classical homeopathic principles with modern understanding of 
                  nutrition and psychology, making him uniquely qualified to treat complex chronic conditions 
                  that require a multi-dimensional healing approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifications & Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Qualifications & Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((area, index) => (
                  <Badge key={index} variant="secondary" className="bg-teal-100 text-teal-800 px-3 py-2">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Treatment Philosophy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Root Cause Treatment
                  </h4>
                  <p className="text-gray-600">
                    Focus on identifying and treating the underlying cause rather than just managing symptoms.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Holistic Approach
                  </h4>
                  <p className="text-gray-600">
                    Treating the mind, body, and spirit together for complete wellness and lasting results.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💚</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Natural Healing
                  </h4>
                  <p className="text-gray-600">
                    Using gentle, natural remedies that work with the body's own healing mechanisms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To make quality homeopathic healthcare accessible to everyone across India through 
                  innovative online consultation services and personalized treatment approaches that 
                  address the root causes of illness.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, compassionate healthcare that combines the wisdom of 
                  homeopathy with modern understanding of nutrition and psychology, empowering 
                  patients to achieve lasting wellness naturally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounder;