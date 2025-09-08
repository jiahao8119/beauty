import React, { useState } from "react";
import { Download, Mail, Sparkles, Gift } from "lucide-react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="pt-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold text-gray-900 font-bold px-6 py-3 rounded-full text-lg mb-8">
            <Gift className="w-6 h-6" />
            FREE Bonus Gift!
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Get Your FREE Skin Glow Guide
          </h2>

          <p className="text-2xl mb-8 opacity-90">
            Unlock the secrets to radiant skin with our exclusive 20-page guide
          </p>

          {/* Benefits of the Guide */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Daily Skincare Routine
              </h3>
              <p className="text-sm opacity-80">
                Step-by-step morning and evening routines
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Download className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ingredient Guide</h3>
              <p className="text-sm opacity-80">
                What to look for and what to avoid
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Tips</h3>
              <p className="text-sm opacity-80">
                Professional secrets from dermatologists
              </p>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">
                  Download Your Free Guide Now
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-gold/30"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap"
                  >
                    Get My Free Guide
                  </button>
                </div>
                <p className="text-sm opacity-80">
                  No spam, unsubscribe anytime. Your email is 100% secure.
                </p>
              </form>
            ) : (
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-lg">
                  Check your email for the download link to your free Skin Glow
                  Guide!
                </p>
              </div>
            )}
          </div>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-8">
            {/* <button className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
              Shop Now - Transform Your Skin
            </button> */}
            <div className="text-3xl opacity-90">
              <span className="font-bold">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <footer className="w-full bg-primary-700 text-white py-4 text-center text-sm opacity-90">
        <div>
          © {new Date().getFullYear()} anggunskin.com. All rights reserved.
          Developed by{" "}
          <a
            href="https://blinkcodedev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gold"
          >
            BlinkCodeDev.com
          </a>
          .
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;
