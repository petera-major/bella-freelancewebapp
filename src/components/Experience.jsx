import { motion } from "framer-motion";

const services = [
  { title: "Fat Dissolving Injections", text: "Lemon Bottle, Deoxycholic, DesoBody" },
  { title: "Body Contouring & Sculpting", text: "Personalized treatments for your goals" },
  { title: "Lymphatic Drainage & Post-Care Therapies", text: "Complete wellness support" },
  { title: "Weight Loss Programs", text: "Customized non-invasive programs to help you achieve lasting results and boost confidence"},
  { title: "Wood Therapy", text: "A natural sculpting technique that stimulates circulation, reduces cellulite, and enhances body tone"},
  { title: "Laser Lipo", text: "Gentle laser technology to target stubborn fat, tighten skin, and refine your body contours"}
];

export default function Experience() {
  return (
    <section className="py-16 bg-pink-100 text-center">
      <motion.h2
        className="text-3xl font-serif mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        ✨ The Bella Experience
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 border border-rose-200 rounded-lg shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <h3 className="font-semibold mb-2 text-lg">{s.title}</h3>
            <p className="text-gray-600">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}