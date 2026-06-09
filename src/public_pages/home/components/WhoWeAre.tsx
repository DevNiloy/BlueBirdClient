import { motion } from "framer-motion";
import { Globe, Network, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// যদি আপনি Next.js ব্যবহার করেন তবে Link ইমপোর্ট করুন, অন্যথায় standard react-router-dom এর Link ব্যবহার করতে পারেন।

// --- Framer Motion Animation Variants ---
const dynamicStagger = (delay = 0, staggerChildren = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      staggerChildren,
      delayChildren: delay + 0.05,
    },
  },
});

const premiumFadeInY = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function WhoWeAre() {
  const industries = [
    "Pharmaceuticals",
    "Food & Beverage",
    "Cosmetics",
    "Textiles",
    "Animal Feed",
    "Industrial Chemicals",
    "Machinery & Equipment",
    "Brand Positioning",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-b border-slate-200/60 relative overflow-hidden">
      {/* Decorative Subtle Background Shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-slate-50 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Core Focus */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#2D5DA1] flex items-center gap-2">
                <Globe size={14} /> Corporate Profile
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] tracking-tight leading-tight">
                Who We Are
              </h2>
              <div className="w-12 h-[3px] bg-[#2D5DA1] rounded-full mt-3" />
            </motion.div>

            <motion.p
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-normal"
            >
              <strong className="text-[#0c2340] font-bold">
                Blue Bird Business Link
              </strong>{" "}
              is a trusted sourcing partner and technical support organization
              representing leading production units across the pharmaceutical,
              food, cosmetics, textile, and related industries in Bangladesh. We
              specialize in sourcing APIs, excipients, impurities, reagents,
              specialty chemicals, machinery, and industrial materials for
              diverse manufacturing sectors.
            </motion.p>

            <motion.p
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify font-normal opacity-90"
            >
              Headquartered in Dhaka, Bangladesh, we maintain a strong and
              expanding presence across Asia, Europe, and the Pacific region,
              positioning ourselves as a reliable global sourcing and supply
              solutions provider.
            </motion.p>

            {/* Premium CTA Button to About Page */}
            <motion.div
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-2"
            >
              <Link to={"about"}>
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c2340] text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-md transition-all duration-300 cursor-pointer group"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#2D5DA1",
                    boxShadow: "0 10px 20px -10px rgba(45, 93, 161, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Full Details
                  <ArrowRight
                    size={14}
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.span>
              </Link>
            </motion.div>

            {/* Global Network Mini Badge */}
            <motion.div
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4"
            >
              <div className="p-2.5 bg-blue-50 text-[#2D5DA1] rounded-xl shrink-0">
                <Network size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0c2340]">
                  Global Footprint
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Expanding presence across Asia, Europe & Pacific region.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Team Strength & Industry Grid */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              //@ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-4"
            >
              <h3 className="text-base md:text-lg font-bold text-[#0c2340] flex items-center gap-2">
                <Users size={18} className="text-[#2D5DA1]" /> Elite Ecosystem &
                Talent
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal text-justify">
                Our team consists of young, experienced, and dynamic
                professionals with strong expertise in market intelligence,
                product sourcing, technical evaluation, client relationship
                management, and supply chain coordination. Through profound
                industry knowledge and collaborative teamwork, we continuously
                deliver value-driven solutions to our partners.
              </p>
              <p className="text-slate-500 text-[11px] md:text-xs italic leading-relaxed font-normal bg-white p-3 rounded-xl border border-slate-100">
                "We maintain direct relationships with manufacturers,
                refineries, mill owners, and authorized mandates to ensure
                competitive pricing, consistent quality, and timely delivery."
              </p>
            </motion.div>

            {/* Supported Industries Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                Supported Sourcing Industries
              </h4>
              <motion.div
                variants={dynamicStagger(0.02, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    //@ts-ignore
                    variants={premiumFadeInY}
                    whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                    className="flex items-center gap-2 p-3 bg-white border border-slate-200/70 rounded-xl shadow-2xs transition-all"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-blue-600 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-xs font-bold text-slate-700 tracking-tight">
                      {industry}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
