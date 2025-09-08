import React, { useState } from 'react';

interface OfferModalProps {
  open: boolean;
  onClose: () => void;
}

const OfferModal: React.FC<OfferModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full flex overflow-hidden relative animate-scale-in">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Left: Image */}
        <div className="w-1/2 bg-gradient-to-br from-primary-100 to-gold/20 flex items-center justify-center p-6 hidden md:flex">
          <img
            src="/src/public/logo/beauty.webp"
            alt="Special Offer"
            className="rounded-2xl shadow-lg max-h-72 object-cover"
          />
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2 text-primary-700">Get Your Exclusive Offer Now!</h3>
          <p className="mb-4 text-gray-600">Enter your email to unlock a special deal just for you.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold text-gray-900"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-200 shadow-lg"
              >
                Get My Offer
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-green-600 text-3xl mb-2">✔</div>
              <div className="text-lg font-semibold">Check your email for your special offer!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
