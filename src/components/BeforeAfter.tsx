import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    {
      before: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Jessica M.",
      timeframe: "After 2 weeks"
    },
    {
      before: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Maria L.",
      timeframe: "After 1 month"
    },
    {
      before: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Amanda K.",
      timeframe: "After 3 weeks"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results from Real Women</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations our customers have achieved with just a few weeks of consistent use
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-beige-50 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before</h3>
                <div className="relative">
                  <img 
                    src={transformations[currentSlide].before}
                    alt="Before transformation"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Day 1
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">After</h3>
                <div className="relative">
                  <img 
                    src={transformations[currentSlide].after}
                    alt="After transformation"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {transformations[currentSlide].timeframe}
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="text-center mt-8">
              <h4 className="text-xl font-semibold text-gray-900">{transformations[currentSlide].name}</h4>
              <p className="text-gray-600 mt-2">"I can't believe the difference! My skin is so much brighter and smoother."</p>
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Get Your Transformation Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;