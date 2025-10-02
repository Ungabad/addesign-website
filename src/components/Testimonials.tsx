import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167031169_98f35c4f.webp",
      content: "AD Design transformed our digital presence completely. Their web development expertise and attention to detail exceeded our expectations. Our conversion rate increased by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthLab",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167033088_a8818c85.webp",
      content: "The mobile app they developed for us has been a game-changer. User engagement is through the roof, and the app store ratings are consistently 4.8+. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, RetailPro",
      image: "https://d64gsuwffb70l.cloudfront.net/68dac1f70bc549c15cdfd940_1759167034993_0280b378.webp",
      content: "Their digital marketing strategies delivered incredible results. We saw a 250% increase in organic traffic and 180% boost in lead generation within just 6 months.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 relative">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="absolute top-6 right-6 text-blue-400 opacity-20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;