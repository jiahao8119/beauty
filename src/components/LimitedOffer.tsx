import React, { useState, useEffect } from 'react';
import { Clock, Gift, Zap } from 'lucide-react';

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded-full text-lg mb-8 animate-pulse">
            <Gift className="w-6 h-6" />
            Limited Time Offer!
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Save 20% on Your First Order
          </h2>
          
          <p className="text-2xl mb-12 opacity-90">
            Join thousands of women who are already glowing! This exclusive discount ends soon.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-[80px]">
                <div className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Hours</div>
              </div>
            </div>
            <div className="text-3xl font-bold animate-pulse">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-[80px]">
                <div className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Minutes</div>
              </div>
            </div>
            <div className="text-3xl font-bold animate-pulse">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-[80px]">
                <div className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Seconds</div>
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold">Flash Sale Details</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-3"></div>
                <div>
                  <div className="font-semibold">20% Off First Order</div>
                  <div className="text-sm opacity-80">Use code: GLOW20</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-3"></div>
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm opacity-80">On orders over $35</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-3"></div>
                <div>
                  <div className="font-semibold">30-Day Guarantee</div>
                  <div className="text-sm opacity-80">Money back if not satisfied</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-3"></div>
                <div>
                  <div className="font-semibold">Free Skincare Guide</div>
                  <div className="text-sm opacity-80">$19 value included</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold hover:bg-yellow-500 text-gray-900 px-12 py-4 rounded-full font-bold text-xl transform hover:scale-105 transition-all duration-200 shadow-2xl animate-pulse-gold">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Claim 20% Discount Now
              </div>
            </button>
            <div className="text-lg opacity-90">
              Regular Price: <span className="line-through">RM 49</span> <span className="font-bold text-gold">RM 39.20</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;