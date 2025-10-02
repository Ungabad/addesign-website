import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167007406_2eb0a0c9.webp",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"]
    },
    {
      title: "Web App Development", 
      description: "Scalable web applications with advanced functionality and seamless user interfaces.",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167009322_c3427441.webp",
      features: ["React/Vue.js", "Database Integration", "API Development", "Cloud Hosting"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that engage users and drive business growth.",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167020315_31e9ac48.webp",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase visibility and drive conversions.",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167011371_cd7c1c13.webp",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      title: "Digital Consultation",
      description: "Strategic guidance to help your business navigate the digital landscape successfully.",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167026895_f6e0f951.webp",
      features: ["Strategy Planning", "Technology Audit", "Growth Roadmap", "Team Training"]
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;