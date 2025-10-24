import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center justify-center text-center px-4">
      
      <header className="absolute top-4 right-6 flex items-center gap-3">
        <Link
          to="/login"
          className="text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-pink-100 px-4 py-2 rounded-full shadow-sm hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all"
        >
          Admin Login
        </Link>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-6xl font-serif mb-4 text-black">
          Welcome to <br />
          <span className="font-bold">
            Bella Aesthetics Contour & Wellness
          </span>
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Where luxury meets confidence. Step into a world of wellness and sophistication.
        </p>

        <Link
          to="/booking"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Book Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}
