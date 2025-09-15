import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const Trust = () => {
  const mediaLogos = [
    { name: "Vogue", logo: "VOGUE" },
    { name: "Elle", logo: "ELLE" },
    { name: "Allure", logo: "ALLURE" },
    { name: "Harper's Bazaar", logo: "BAZAAR" },
    { name: "Cosmopolitan", logo: "COSMO" },
    { name: "Marie Claire", logo: "SKII" },
  ];

  const certifications = [
    "FDA Approved Facility",
    "Cruelty-Free Certified",
    "Dermatologist Tested",
    "Vegan Society Approved",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-beige-50 to-primary-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Trusted by Beauty Experts Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured in top beauty publications and certified by industry standards.
          </p>
        </div>

        {/* Media Logos */}
        <div className="overflow-hidden relative mb-20">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-3xl font-bold text-gray-800 hover:text-primary-600 transition-colors duration-300"
              >
                {media.logo}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-10 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-8 h-8 text-gold" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Certifications & Standards
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl shadow-sm"
              >
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Our commitment to quality and safety is unwavering. Every product is
              crafted in FDA-approved facilities and undergoes rigorous testing.
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
