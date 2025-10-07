import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">AD Design LLC</h2>
                <p className="text-gray-400">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We specialize in creating cutting-edge digital solutions that help businesses thrive in the modern marketplace. From web development to digital marketing, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/AD_Design_LLC" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ad-design-llc" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/ADDesignLLC" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.338v21.324C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.717-1.796 1.767v2.318h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.662V1.338C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Web App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Digital Consultation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="http://aaron-portfolio-seven.vercel.app" target='_blank' className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AD Design LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;