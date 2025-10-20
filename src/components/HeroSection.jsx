import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-blush to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="text-4xl sm:text-6xl font-serif mb-4 text-black">
          Welcome to <br />
          <span className="font-bold">Bella Aesthetics Contour & Wellness</span>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Where luxury meets confidence. Step into a world of wellness and sophistication.
        </p>
        <Link
          to="/book"
          className="bg-gold text-black px-6 py-3 rounded-md shadow-md hover:bg-yellow-400 transition"
        >Book Your Consultation
        </Link>
      </motion.div>
    </section>
  );
}
