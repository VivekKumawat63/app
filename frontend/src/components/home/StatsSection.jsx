import React from 'react';
import { stats } from '../../data/mockData';

const StatsSection = () => {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">{stats.patients}</div>
            <div className="text-xl font-semibold">Satisfied Patients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">{stats.social}</div>
            <div className="text-xl font-semibold">Social</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold">{stats.experience}</div>
            <div className="text-xl font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;