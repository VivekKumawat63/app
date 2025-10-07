import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Cancellation Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understand our appointment cancellation and rescheduling policies.
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <Clock className="w-6 h-6 text-teal-600 mr-3" />
                      Appointment Cancellation Timeline
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <h4 className="font-semibold text-green-800">24+ Hours Before</h4>
                        </div>
                        <p className="text-green-700 text-sm">Full refund available</p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-center mb-2">
                          <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                          <h4 className="font-semibold text-yellow-800">6-24 Hours Before</h4>
                        </div>
                        <p className="text-yellow-700 text-sm">50% refund or reschedule</p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center mb-2">
                          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                          <h4 className="font-semibold text-red-800">Less than 6 Hours</h4>
                        </div>
                        <p className="text-red-700 text-sm">No refund, reschedule only</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Cancel Your Appointment</h2>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-3">
                      <li>
                        <strong>WhatsApp:</strong> Send a message to +91-7733844557 with your appointment details
                      </li>
                      <li>
                        <strong>Phone Call:</strong> Call +91-7733844557 or +91-7737092577 during working hours
                      </li>
                      <li>
                        <strong>Email:</strong> Send cancellation request to agrawalhomeoclinic.jhalawar@gmail.com
                      </li>
                    </ol>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Important:</strong> Please include your full name, phone number, and scheduled appointment 
                        date/time in your cancellation request.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Rescheduling Policy</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Appointments can be rescheduled up to 2 times without additional charges</li>
                      <li>Rescheduling must be requested at least 6 hours before the original appointment</li>
                      <li>New appointment must be within 30 days of original booking</li>
                      <li>Subject to doctor's availability</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Situations</h2>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">Medical Emergencies</h4>
                      <p className="text-orange-700 mb-3">
                        If you need to cancel due to a medical emergency, please inform us as soon as possible. 
                        We will work with you to reschedule or provide appropriate refund.
                      </p>
                      <p className="text-orange-700 text-sm">
                        <strong>Note:</strong> Medical emergencies should be addressed immediately at the nearest hospital 
                        or emergency care facility.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor Initiated Cancellations</h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>If doctor cancels due to emergency, full refund or priority rescheduling offered</li>
                      <li>Patients will be notified immediately via phone/WhatsApp</li>
                      <li>Alternative appointment slots will be provided</li>
                      <li>No penalties for doctor-initiated cancellations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-800 font-medium">Appointment Management</p>
                      <p className="text-gray-600">Phone: +91-7733844557, +91-7737092577</p>
                      <p className="text-gray-600">WhatsApp: +91-7733844557</p>
                      <p className="text-gray-600">Email: agrawalhomeoclinic.jhalawar@gmail.com</p>
                      <p className="text-gray-600 text-sm mt-2">Working Hours: Mon-Fri 9AM-8PM, Sat 9AM-6PM</p>
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

export default CancellationPolicy;