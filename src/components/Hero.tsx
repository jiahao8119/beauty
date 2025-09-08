import { useEffect, useRef, useState } from "react";
import { Star, Sparkles } from "lucide-react";

// Countdown target: 10 minutes from now
const COUNTDOWN_TARGET = new Date(Date.now() + 1000 * 60 * 10);

const Hero = () => {
  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState(
    COUNTDOWN_TARGET.getTime() - Date.now()
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(Math.max(COUNTDOWN_TARGET.getTime() - Date.now(), 0));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const minutes = String(Math.floor(timeLeft / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft % 60000) / 1000)).padStart(
    2,
    "0"
  );

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-beige-50 min-h-screen flex items-center">
      {/* Countdown Timer */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-white/95 border-2 border-gold text-gold font-extrabold px-10 py-4 rounded-full shadow-2xl flex items-center gap-3 text-2xl animate-pulse-gold">
          ⏰ Limited Offer Ends In:
          <span className="ml-3 font-mono">
            {minutes}:{seconds}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-medium px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              #1 Recommended by Dermatologists
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Glow
              </span>{" "}
              Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Transform your skin with our clinically proven serum. See visible
              results in just 7 days with our revolutionary formula.
            </p>
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                4.9/5 (2,847 reviews)
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/601133094116?text=Hi%2C%20I%20am%20interested%20in%20the%20Glow%20Serum!%20Please%20tell%20me%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg animate-pulse-gold flex items-center justify-center"
              >
                Whatsapp us Now
              </a>
              {/* <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transform hover:scale-105 transition-all duration-200">
                Learn More
              </button> */}
            </div>
          </div>
          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in">
            <div className="relative shine-img-wrapper">
              <img
                src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium Glow Serum"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shine-img"
              />
              <div className="absolute -top-0 -right-0 bg-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                NEW!
              </div>
              <div className="absolute bottom-0 -left-6 bg-white px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold text-primary-600">
                  7 Days
                </div>
                <div className="text-sm text-gray-600">Visible Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
