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
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-semibold px-4 py-2 rounded-full text-sm mb-4 mx-auto">
            <Sparkles className="w-4 h-4" /> Trusted by 2,800+ Happy Customers
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Reveal Your Most Radiant Skin—Guaranteed</h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto font-medium">
            Join thousands who have transformed their skin with Glow Serum. Clinically proven, dermatologist recommended, and loved by real people like you.
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 italic text-lg text-center">“I saw visible results in just a week! My skin is glowing and feels so much healthier. Highly recommend to anyone!”</p>
            <div className="mt-2 text-sm text-gray-500">— Aina, Verified Customer</div>
          </div>
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
          <a
            href="https://wa.me/601133094116?text=Hi%2C%20I%20want%20to%20order%20the%20Glow%20Serum%20now!%20Is%20the%20special%20offer%20still%20available%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-4 rounded-full font-extrabold text-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg animate-pulse-gold inline-block"
          >
            Claim My Glow Now — Limited Time!
          </a>
          <div className="mt-3 text-sm text-gray-500">
            100% Money-Back Guarantee. No risk, all reward.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;