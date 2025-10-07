import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information.
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                      We collect information you provide directly to us, such as when you create an account, 
                      book an appointment, or contact us for support.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Personal identification information (Name, email address, phone number)</li>
                      <li>Health information relevant to your treatment</li>
                      <li>Payment information for consultation fees</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-600 mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Provide medical consultation and treatment</li>
                      <li>Process appointments and payments</li>
                      <li>Send treatment-related communications</li>
                      <li>Improve our services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
                    <p className="text-gray-600 mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                    <p className="text-gray-600 mb-4">
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
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

export default PrivacyPolicy;