import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#f9caca,_transparent_60%)]"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-playfair text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            At <span className="text-pink-600 font-semibold">Bella</span>, we believe that beauty is an expression of
            self-love and confidence. Our philosophy harmonizes{" "}
            <span className="text-yellow-600 font-medium">science</span> and{" "}
            <span className="text-pink-500 font-medium">artistry</span> to bring
            out your natural radiance—through safe, effective, and personalized
            treatments designed just for you.
          </p>

          <div className="flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
