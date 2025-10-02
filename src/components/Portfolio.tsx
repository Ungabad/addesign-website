import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web-dev",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167013227_95d4587e.webp",
      description: "Modern e-commerce solution with advanced features"
    },
    {
      title: "Healthcare App",
      category: "mobile",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167022248_d2b7d4a0.webp",
      description: "Patient management mobile application"
    },
    {
      title: "SaaS Dashboard",
      category: "web-app",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167015284_e0e87f51.webp",
      description: "Analytics dashboard for business intelligence"
    },
    {
      title: "Restaurant Website",
      category: "web-dev",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167007406_2eb0a0c9.webp",
      description: "Elegant restaurant website with online ordering"
    },
    {
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167024125_4d32ea66.webp",
      description: "Cross-platform fitness tracking application"
    },
    {
      title: "CRM System",
      category: "web-app",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167009322_c3427441.webp",
      description: "Customer relationship management platform"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;