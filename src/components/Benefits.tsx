import React from 'react';
import { Leaf, Shield, Award, Beaker, Heart, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Vegan",
      description: "Plant-based ingredients that love your skin and the planet"
    },
    {
      icon: Shield,
      title: "Cruelty-Free",
      description: "Never tested on animals, certified by Leaping Bunny"
    },
    {
      icon: Award,
      title: "Dermatologist Tested",
      description: "Clinically proven safe for all skin types including sensitive"
    },
    {
      icon: Beaker,
      title: "Science-Backed",
      description: "Formulated with proven active ingredients and peptides"
    },
    {
      icon: Heart,
      title: "Gentle Formula",
      description: "Free from harsh chemicals, parabens, and sulfates"
    },
    {
      icon: Sparkles,
      title: "Instant Results",
      description: "See immediate hydration boost and glow after first use"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Glow Serum?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully crafted with the finest ingredients and backed by science to give you the radiant skin you deserve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-gold/20 rounded-2xl mb-6 group-hover:from-primary-200 group-hover:to-gold/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Shop Now - Experience the Difference
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;