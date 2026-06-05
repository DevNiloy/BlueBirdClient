import { motion } from "framer-motion";
import {
  ShieldCheck,
  Coins,
  Truck,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Framer Motion Variant Presets ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const premiumFadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function WhyChooseUs() {
  // Stats Data
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Products Sourced" },
    { value: "1000+", label: "Happy Clients" },
    { value: "99%", label: "Quality Assurance" },
  ];

  // Features Data
  const features = [
    {
      icon: <ShieldCheck size={24} className="text-[#2D5DA1]" />,
      title: "Premium Quality",
      desc: "We ensure the highest industry purity and regulatory certifications in every component delivered.",
      bgColor: "bg-blue-50 border-blue-100/50",
    },
    {
      icon: <Coins size={24} className="text-emerald-600" />,
      title: "Competitive Price",
      desc: "Direct tie-ups with global refineries allow us to match the best commercial bulk pricing rates.",
      bgColor: "bg-emerald-50 border-emerald-100/50",
    },
    {
      icon: <Truck size={24} className="text-amber-600" />,
      title: "On-time Delivery",
      desc: "End-to-end multimodal logistics infrastructure guaranteeing safe, hazmat-compliant shipments.",
      bgColor: "bg-amber-50 border-amber-100/50",
    },
    {
      icon: <Headphones size={24} className="text-indigo-600" />,
      title: "Customer Support",
      desc: "Our regulatory technical help desk is operational around the clock to address any dynamic query.",
      bgColor: "bg-indigo-50 border-indigo-100/50",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* 1. TOP STATS BAR */}
      <div className="bg-[#0c2340] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1 pt-6 md:pt-0"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold tracking-wide text-slate-400 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CORE FEATURES GRID */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
              We are committed to providing the absolute best quality chemical
              distribution workflows.
            </p>
            <div className="w-12 h-[3px] bg-[#2D5DA1] mx-auto rounded-full mt-2" />
          </div>

          {/* Cards Frame */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, idx) => (
              <motion.div
                // @ts-ignore
                variants={premiumFadeInUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 30px -10px rgba(0,0,0,0.04)",
                }}
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm transition-all flex flex-col space-y-4 group"
              >
                {/* Icon Wrap */}
                <div
                  className={`p-3 rounded-xl border w-fit transition-colors duration-300 ${item.bgColor}`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#2D5DA1] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM CTA BANNER WITH TINTED PREMIUM INDUSTRIAL BACKGROUND */}
      <div className="relative bg-slate-950 text-white py-14 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Realistic High-Quality Chemical Laboratory background element */}
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&q=80&w=1200"
          alt="Premium Laboratory Research Flask Equipment"
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 h-full object-cover object-center z-0 opacity-20 md:opacity-35 mix-blend-luminosity select-none pointer-events-none"
        />

        {/* Dynamic Overlay Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/95 to-transparent z-10" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-20">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Need Bulk Order or Custom Solution?
            </h3>
            <p className="text-slate-300 text-sm md:text-base font-normal tracking-wide">
              We are here to streamline your business supply chain bottlenecks.
              Request a specialized commercial indent outline today.
            </p>
          </div>

          <Link to={"contact"}>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs uppercase tracking-widest text-white rounded-xl shadow-lg shadow-emerald-900/20 transition-all group shrink-0"
            >
              Contact Us Now
              <ArrowRight
                size={14}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
}
