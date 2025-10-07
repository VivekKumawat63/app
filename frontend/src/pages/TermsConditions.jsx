import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="prose max-w-none space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
                    <p className="text-gray-600">
                      By accessing and using Agrawal Homeo Clinic's services, you accept and agree to be bound by the 
                      terms and provision of this agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Consultation</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Online consultations are provided by qualified homeopathic practitioners</li>
                      <li>Treatment recommendations are based on information provided by patients</li>
                      <li>Patients must provide accurate health information</li>
                      <li>Emergency cases should seek immediate medical attention</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Consultation fee of ₹200 is required for appointment booking</li>
                      <li>Medicine costs are communicated after consultation</li>
                      <li>Payments are secure and processed through authorized gateways</li>
                      <li>Refunds are subject to our refund policy</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
                    <p className="text-gray-600">
                      Agrawal Homeo Clinic shall not be liable for any indirect, incidental, special, consequential, 
                      or punitive damages resulting from your use of our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
                    <p className="text-gray-600">
                      All content on this website, including text, graphics, logos, and images, is the property of 
                      Agrawal Homeo Clinic and is protected by copyright laws.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-800 font-medium">Agrawal Homeo Clinic</p>
                      <p className="text-gray-600">Email: agrawalhomeoclinic.jhalawar@gmail.com</p>
                      <p className="text-gray-600">Phone: +91-7733844557</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 pt-6 border-t border-gray-200">
                    <p>Last updated: January 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;