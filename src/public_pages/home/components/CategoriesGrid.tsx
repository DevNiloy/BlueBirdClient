import { motion } from "framer-motion";
import { Factory, Sprout, Layers, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- Framer Motion Animations ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const premiumFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function CategoriesGrid() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2D5DA1]">
              Product Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] tracking-tight">
              Chemical Categories for{" "}
              <span className="text-[#2D5DA1]">Every Industry</span>
            </h2>
          </div>
          <Link
            to={"all_products"}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0c2340] hover:text-[#2D5DA1] transition-colors group border-b-2 border-slate-200 pb-1"
          >
            Explore All Solutions
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* CARD 1: MAIN FEATURED LARGE CARD (Lab & Analytical) */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeIn}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 min-h-[420px] flex flex-col justify-end p-8 md:p-10 group"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
              alt="Lab & Analytical Solutions"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/95 via-[#0c2340]/70 to-transparent" />

            <div className="relative z-10 space-y-4 max-w-xl">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                ISO 9001 Certified
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Lab & Analytical Solutions
              </h3>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal">
                High-purity reagents and precision analytical standards for
                advanced research, diagnostics, and pharmaceutical quality
                control environments.
              </p>
              <div className="pt-2">
                <Link
                  to={"contact"}
                  className="px-5 py-2.5 bg-white text-[#0c2340] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  Request Catalog
                </Link>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: VERTICAL CARD (Industrial Processing) */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeIn}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between group hover:border-[#2D5DA1]/20 transition-all"
          >
            <div className="space-y-4">
              <div className="text-[#2D5DA1] bg-blue-50 p-3 rounded-2xl w-fit border border-blue-100/50">
                <Factory size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Industrial
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bulk chemical processing agents, high-grade solvents, and
                specialty additives engineered for large-scale manufacturing
                operations.
              </p>
            </div>

            {/* Contextual Inner Small Image exactly like reference */}
            <div className="mt-6 rounded-2xl overflow-hidden h-32 relative bg-slate-100 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
                alt="Industrial Piping Setup"
                className="w-full h-full object-cover filter mix-blend-multiply opacity-80"
              />
            </div>
          </motion.div>

          {/* CARD 3: BOTTOM HORIZONTAL CARD (Agricultural) */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeIn}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between min-h-[240px] group hover:border-emerald-200 transition-all"
          >
            <div className="space-y-4">
              <div className="text-emerald-600 bg-emerald-50 p-3 rounded-2xl w-fit border border-emerald-100/50">
                <Sprout size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Agricultural
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sustainable fertilizers, protective crop agents, and specialized
                nutrients optimized for modern agronomy and high-yield farming.
              </p>
            </div>
            <a
              href="#agro"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider pt-4 group/btn"
            >
              Explore Agrochemicals
              <ArrowRight
                size={14}
                className="transform group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* CARD 4: BOTTOM HORIZONTAL CARD (Specialty Specs) */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeIn}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between min-h-[240px] group hover:border-indigo-200 transition-all"
          >
            <div className="space-y-4">
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-2xl w-fit border border-indigo-100/50">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Specialty Specs
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Custom chemical formulations and pure component blending
                engineered to meet unique and rigid industrial user
                specifications.
              </p>
            </div>
            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider pt-4 group/btn"
            >
              Custom Consultation
              <ArrowRight
                size={14}
                className="transform group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* CARD 5: BOTTOM HORIZONTAL CARD (Global Logistics) */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeIn}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col justify-between min-h-[240px] group hover:border-blue-200 transition-all"
          >
            <div className="space-y-4">
              <div className="text-slate-700 bg-slate-100 p-3 rounded-2xl w-fit border border-slate-200">
                <Truck size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Global Logistics
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hazmat-certified supply chain management with strict safety
                compliance measures and real-time tracking capabilities.
              </p>
            </div>
            <a
              href="#track"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider pt-4 group/btn"
            >
              Track Shipments
              <ArrowRight
                size={14}
                className="transform group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
