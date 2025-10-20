import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-16 text-center bg-white">
      <motion.h2
        className="text-3xl font-serif mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Our Philosophy
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-700">
        At Bella, we believe that beauty is a form of self-love. Our philosophy blends science and artistry 
        to bring out your natural radiance through safe, effective, and personalized treatments.
      </p>
    </section>
  );
}
