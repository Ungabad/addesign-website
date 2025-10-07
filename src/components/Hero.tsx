import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167006314_7f5da15f.webp')`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="text-red-400 block">Digital Vision</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
            AD Design LLC delivers cutting-edge web development, mobile apps, and digital marketing solutions that drive real business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105" onClick={() => window.location.href = '#contact'}>
              Start Your Project
            </button>
            <button className="border-2 border-primary text-white hover:bg-primary hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" onClick={() => window.open('https://aaron-portfolio-seven.vercel.app/', '_blank')}>
              View Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">2+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;