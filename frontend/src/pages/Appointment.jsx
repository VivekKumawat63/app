import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    problem: '',
    previousTreatment: '',
    symptoms: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Appointment Booked Successfully!",
      description: "You will receive a WhatsApp message with appointment details shortly.",
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      age: '',
      gender: '',
      problem: '',
      previousTreatment: '',
      symptoms: '',
      preferredTime: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            घर बैठे पाइए विशेषज्ञ होम्योपैथिक इलाज। डॉ. अर्पित अग्रवाल से करवाइए अपना परामर्श।
          </p>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fill Form & Pay ₹200</h3>
              <p className="text-gray-600">Complete the appointment form and make the consultation payment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Doctor Consultation</h3>
              <p className="text-gray-600">Dr. Arpit will call you for detailed case taking and analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Medicine Delivery</h3>
              <p className="text-gray-600">Personalized medicines delivered free to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    Book Your Consultation
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age *
                        </label>
                        <Input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('gender', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Health Information */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Main Health Problem *
                      </label>
                      <Input
                        type="text"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Skin problems, Hair fall, Acidity, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Detailed Symptoms *
                      </label>
                      <Textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Please describe your symptoms in detail..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Treatment Taken
                      </label>
                      <Textarea
                        name="previousTreatment"
                        value={formData.previousTreatment}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any previous treatments, medicines, or consultations..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Consultation Time
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg"
                    >
                      {isSubmitting ? 'Processing...' : 'Book Appointment & Pay ₹200'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="shadow-lg border-2 border-teal-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Consultation Fee
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-teal-600 mb-2">₹200</div>
                    <p className="text-sm text-gray-600">One-time registration fee</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Detailed consultation</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Personalized treatment</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Free medicine delivery</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Follow-up support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-teal-600 mr-3" />
                      <div>
                        <p className="font-medium">+91-7733844557</p>
                        <p className="font-medium">+91-7737092577</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-teal-600 mr-3" />
                      <p className="text-sm">agrawalhomeoclinic.jhalawar@gmail.com</p>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <div className="text-sm">
                        <p>In front of Jain Opticals, Purani Jail Road, Jhalawar</p>
                        <p className="mt-1">In front of Kirti Tiles, Chandragupt Nagar, Jhalrapatan</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Times */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Available Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <Badge variant="secondary">Emergency Only</Badge>
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

export default Appointment;