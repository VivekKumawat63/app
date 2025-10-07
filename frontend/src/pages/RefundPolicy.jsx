import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our refund and cancellation policies.
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Consultation Fee Refund</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Consultation fee of ₹200 is refundable if cancelled 24 hours before scheduled appointment</li>
                      <li>Same-day cancellations are not eligible for refund</li>
                      <li>No-show appointments are not eligible for refund</li>
                      <li>Technical issues from our side will result in full refund or rescheduling</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Medicine Refund Policy</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Unopened medicine packages can be returned within 7 days of delivery</li>
                      <li>Opened or used medicines cannot be returned due to safety regulations</li>
                      <li>Damaged or wrong medicines delivered will be replaced free of cost</li>
                      <li>Customer must provide delivery receipt for returns</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
                    <div className="bg-blue-50 p-6 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">How to Request a Refund:</h4>
                      <ol className="list-decimal pl-6 text-blue-700 space-y-2">
                        <li>Contact us within the eligible timeframe</li>
                        <li>Provide your appointment or order details</li>
                        <li>State the reason for refund request</li>
                        <li>Our team will review and process eligible refunds</li>
                      </ol>
                    </div>
                    <p className="text-gray-600">
                      Refunds will be processed to the original payment method within 7-10 business days.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Exceptions</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Personalized medicine kits prepared specifically for patients</li>
                      <li>Consultations that have been completed</li>
                      <li>Services availed during emergency consultations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact for Refunds</h2>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-800 font-medium">Refund Department</p>
                      <p className="text-gray-600">Email: agrawalhomeoclinic.jhalawar@gmail.com</p>
                      <p className="text-gray-600">Phone: +91-7733844557</p>
                      <p className="text-gray-600">WhatsApp: +91-7733844557</p>
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

export default RefundPolicy;