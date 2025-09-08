import React from 'react';
import { Award } from 'lucide-react';

const Trust = () => {
  const mediaLogos = [
    { name: "Vogue", logo: "VOGUE" },
    { name: "Elle", logo: "ELLE" },
    { name: "Allure", logo: "ALLURE" },
    { name: "Harper's Bazaar", logo: "BAZAAR" },
    { name: "Cosmopolitan", logo: "COSMO" },
    { name: "Marie Claire", logo: "SKII" }
  ];

  const certifications = [
    "FDA Approved Facility",
    "Cruelty-Free Certified",
    "Dermatologist Tested",
    "Vegan Society Approved"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Beauty Experts Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Featured in top beauty publications and trusted by industry professionals
          </p>
        </div>

        {/* Media Features - Auto Sliding Carousel */}
        <div className="mb-16 ">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">As Featured In</h3>
          <div className="overflow-hidden w-full p-6">
            <div
              className="flex items-center gap-8 animate-slide-logos text-md font-semibold text-gray-800"
              style={{ width: 'max-content' }}
            >
              {[...mediaLogos, ...mediaLogos].map((media, index) => (
                <div
                  key={index}
                  className="text-center min-w-[140px] group"
                  style={{ flex: '0 0 140px' }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-200 border-4 border-transparent bg-clip-padding media-logo-border">
                    <div className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
                      {media.logo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-8 h-8 text-gold" />
            <h3 className="text-2xl font-semibold text-gray-900">Our Certifications & Standards</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-beige-50 rounded-2xl"
              >
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Our commitment to quality and safety is unwavering. Every product is crafted in FDA-approved facilities 
              and undergoes rigorous testing to ensure the highest standards.
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;