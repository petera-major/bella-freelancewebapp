import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";


export default function BookingForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4xam6zr', 'template_gc98s9a', form.current, '4KStykSwQRGtRFNpw')
      .then(() => {
        alert('✨ Your inquiry was sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <a href="/" className="text-sm text-gray-600 hover:text-gray-800 mb-4 inline-block">
          ← Back to Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-playfair text-black mb-2">
            Book Your Consultation
          </h1>
          <div className="flex justify-center mb-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Let’s begin your confidence journey — complete the form below to book or inquire.
          </p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-pink-100 space-y-5"
          >
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your full name"
              className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your.email@example.com"
              className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="user_phone"
              placeholder="(555) 123-4567"
              className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Select Service *</label>
            <select
              name="service"
              required
              className="w-full border border-yellow-400 rounded-lg px-4 py-2 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="">Choose a service</option>
              <option>Fat Dissolving Injections</option>
              <option>Body Contouring</option>
              <option>Skin Rejuvenation</option>
              <option>Lymphatic Drainage</option>
              <option>Wood Theraphy</option>
              <option>Weight Loss Programs</option>
              <option>Laser Lipo</option>
              <option>Body Cavitation</option>

            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Preferred Date / Time *</label>
            <input
              type="text"
              name="preferred_time"
              required
              placeholder="mm/dd/yyyy, --:-- --"
              className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Notes / Questions</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Share any questions or special requests..."
              className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-md hover:shadow-lg transition-shadow"
          >
            Submit Inquiry
          </motion.button>

          <Link to="/" className="inline-block mt-6 text-sm text-gray-600 hover:text-black">
          ← Back to Home
        </Link>

          <p className="text-xs text-center text-gray-500 mt-2 italic">
            24-hour cancellation notice required. Deposits are non-refundable but applied to your remaining balance.
          </p>
        </motion.form>
      </div>
    </div>
  );
}
