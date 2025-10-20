import { motion } from "framer-motion";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const team = [
  { name: "Injector", role: "Certified Injector", image: team1 },
  { name: "Contour", role: "Body Contouring Specialist", image: team2 },
  { name: "Skincare", role: "Skincare Expert", image: team3 },
];

export default function Team() {
  return (
    <section className="py-20 bg-blush text-center">
      <h2 className="text-3xl font-serif mb-8"> Meet the Bella Team</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        Our Certified Injectors and Contouring Specialists bring experience and artistry to every treatment,
        ensuring safe, natural, and confidence-boosting results.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="w-48 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-gold shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
            <h3 className="font-semibold mt-3">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}