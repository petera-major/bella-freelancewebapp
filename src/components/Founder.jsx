import { motion } from "framer-motion";
import founderPhoto from "../assets/bella.png";

export default function Founder() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center py-20 bg-white gap-10 px-6">
        <motion.div
          className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={founderPhoto}
            alt="Founder"
            className="w-full h-96 object-cover"
          />
        </motion.div>
  
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-2">Meet the Founder</h2>
          <h3 className="text-xl font-semibold text-gold mb-4">Ravelle</h3>
          <p className="text-gray-700 leading-relaxed">
            With over a decade of experience in aesthetic medicine, Ravelle founded
            Bella Aesthetics with a vision to create a sanctuary where women embrace
            their beauty with confidence, care, and self-love.
          </p>
        </motion.div>
      </section>
    );
  }
