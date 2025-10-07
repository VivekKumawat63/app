import React from 'react';
import Hero from '../components/home/Hero';
import TreatmentGrid from '../components/home/TreatmentGrid';
import ProcessSection from '../components/home/ProcessSection';
import SpecialFeatures from '../components/home/SpecialFeatures';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DoctorSection from '../components/home/DoctorSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TreatmentGrid />
      <ProcessSection />
      <SpecialFeatures />
      <StatsSection />
      <DoctorSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
};

export default Home;