import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Globe,
  Leaf,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

// --- Framer Motion Keyframes & Transitions ---
const dynamicStagger = (delay = 0, staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      staggerChildren,
      delayChildren: delay + 0.1,
    },
  },
});

const premiumFadeInY = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordSplit = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const floatingAnimation = {
  y: ["0%", "-3%", "0%", "3%", "0%"],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function About() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-x-hidden antialiased [text-rendering:optimizeLegibility]">
      {/* 1. HERO SECTION WITH IMAGE BACKGROUND */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-start py-32 px-6 md:px-12 bg-slate-950 text-white overflow-hidden">
        {/* Real High-Quality Industry/Chemical Sourcing Background Image */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1800"
          alt="Advanced Laboratory and Industrial Quality Control"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40 mix-blend-luminosity select-none pointer-events-none"
        />

        {/* Sophisticated Dark Gradient & Tint Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/95 via-[#1b3a66]/85 to-[#2D5DA1]/70 z-10" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-10"></div>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2D5DA1]/30 blur-[120px] z-10" />

        <motion.div
          variants={dynamicStagger(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="container mx-auto z-20 space-y-8"
        >
          <motion.span
            // @ts-ignore
            variants={premiumFadeInY}
            className="inline-block bg-white/10 text-blue-100 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold shadow-inner"
          >
            Global Sourcing & Technical Analysis Partner
          </motion.span>

          <motion.h1
            variants={dynamicStagger(0.2, 0.15)}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-5xl"
          >
            {/* ssss */}
            {[
              "Precision",
              "in",
              "Sourcing,",
              "Excellence",
              "in",
              "Supply",
              "Chain.",
            ].map((word, index) => (
              <motion.span
                key={index}
                // @ts-ignore
                variants={wordSplit}
                className={`inline-block mr-3 ${index === 3 || index === 6 ? "text-blue-300" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            // @ts-ignore
            variants={premiumFadeInY}
            className="text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed tracking-tight drop-shadow-sm"
          >
            For years, Blue Bird Business Link has been the vanguard of
            industrial chemical, API, and excipient solutions in
            Bangladesh—merging technical expertise with global logistical
            mastery.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OUR FOUNDATION SECTION */}
      <section className="max-w-7xl mx-auto py-28 px-6 md:px-12">
        <motion.div
          // @ts-ignore
          variants={premiumFadeInY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#0c2340] border-l-4 pl-4 border-[#2D5DA1] tracking-tight">
            Our Foundation
          </h2>
        </motion.div>

        <motion.div
          variants={dynamicStagger(0.2, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Left Block: Our Mission */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100/70 flex flex-col justify-between space-y-8 relative overflow-hidden group"
          >
            <div className="space-y-5 z-10">
              <motion.div
                // @ts-ignore
                animate={floatingAnimation}
                className="bg-blue-50 p-4 rounded-full w-fit text-[#2D5DA1] border border-blue-100 shadow-sm"
              >
                <Rocket size={30} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-3xl font-bold tracking-tight text-[#0c2340]">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal text-base">
                To empower domestic and global industries with high-purity
                chemical components, APIs, and excipients while adhering to
                strict quality and compliance standards. We don't just source
                materials; we engineer the building blocks of modern industrial
                growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 z-10">
              {[
                "Sourcing Powerhouse",
                "Quality Assurance",
                "Global Logistics",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-slate-50 text-slate-700 px-5 py-2.5 rounded-full text-xs font-semibold border border-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Dark Block: Global Vision */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            className="bg-[#1b3a66] text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2D5DA1]/20 rounded-full blur-[70px]" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-[#2D5DA1]/30 rounded-full blur-[40px] group-hover:scale-110 transition-transform duration-700" />

            <div className="space-y-5 z-10">
              <h3 className="text-xl font-bold tracking-widest uppercase text-blue-300">
                Global Vision
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed font-normal tracking-tight">
                Setting the benchmark for a sustainable and transparent chemical
                supply chain that links top-tier global manufacturers directly
                to major industrial sectors across Bangladesh and beyond.
              </p>
            </div>
            <div className="pt-10 border-t border-blue-900/60 z-10">
              <div className="text-5xl font-extrabold text-white tracking-tighter">
                5+ Sectors
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider mt-2 font-medium">
                Pharma, Food, Cosmetic, Textile & Feeds
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. CORE HIGHLIGHTS */}
        <motion.div
          variants={dynamicStagger(0.3, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12"
        >
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -15px rgba(45, 93, 161, 0.12)",
            }}
            className="bg-white p-9 rounded-3xl shadow-sm border border-slate-100/70 space-y-4 group transition-all"
          >
            <motion.div
              // @ts-ignore
              animate={floatingAnimation}
              className="text-[#2D5DA1]"
            >
              <Globe size={26} strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-xl font-bold tracking-tight text-[#0c2340]">
              Sourcing Powerhouse
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Deep-rooted expertise in navigating complex international trade
              landscapes, acting as a trusted partner for top global refineries
              and mills.
            </p>
          </motion.div>

          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -15px rgba(45, 93, 161, 0.12)",
            }}
            className="bg-white p-9 rounded-3xl shadow-sm border border-slate-100/70 space-y-4 group transition-all"
          >
            <motion.div
              // @ts-ignore
              animate={floatingAnimation}
              className="text-emerald-600"
            >
              <ShieldCheck size={26} strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-xl font-bold tracking-tight text-[#0c2340]">
              Third-Party Certified
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every shipment undergoes rigorous third-party quality checks and
              arrives with verified Test Certificates to ensure absolute
              authenticity.
            </p>
          </motion.div>

          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -15px rgba(45, 93, 161, 0.12)",
            }}
            className="bg-white p-9 rounded-3xl shadow-sm border border-slate-100/70 space-y-4 group transition-all"
          >
            <motion.div
              // @ts-ignore
              animate={floatingAnimation}
              className="text-blue-500"
            >
              <Leaf size={26} strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-xl font-bold tracking-tight text-[#0c2340]">
              Eco-Friendly Initiative
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Committed to reducing carbon footprints through optimized
              multimodal logistics and shifting towards biodegradable packaging
              solutions.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. EVOLUTION OF EXCELLENCE (Timeline Section) */}
      <section className="bg-slate-100 py-28 px-6 md:px-12 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Premium Real Logistics Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-[480px] bg-slate-950 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#1b3a66]/30 backdrop-blur-[0.5px] z-10" />

            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
              alt="Global Supply Chain and Maritime Logistics Infrastructure"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
            />

            <div className="absolute bottom-10 left-10 z-20 space-y-2">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-blue-300 font-semibold tracking-wider uppercase text-xs"
              >
                Logistics & Supply
              </motion.p>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white text-3xl font-extrabold tracking-tight"
              >
                Global Infrastructure
              </motion.h4>
            </div>
          </motion.div>

          {/* Right Side: Timeline Steps */}
          <div className="space-y-12">
            <motion.div
              // @ts-ignore
              variants={premiumFadeInY}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-[#0c2340]">
                Evolution of Excellence
              </h2>
            </motion.div>

            <motion.div
              variants={dynamicStagger(0.2, 0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[3px] before:bg-blue-100"
            >
              {[
                {
                  title: "Global Sourcing Hub",
                  desc: "Established a rock-solid distribution and sourcing network across the Asia, Europe, and Pacific regions.",
                },
                {
                  title: "End-to-End Supply Chain",
                  desc: "Managing thorough workflows from reputed manufacturers directly to the customer's doorstep with zero communication gaps.",
                },
                {
                  title: "Trusted Technical Partner",
                  desc: "Operating as a premier sourcing agent and technical analysis firm for leading production units in Bangladesh.",
                },
              ].map((step, idx) => (
                <motion.div
                  // @ts-ignore
                  variants={premiumFadeInY}
                  key={idx}
                  className="flex gap-8 relative group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2D5DA1] flex items-center justify-center z-10 ring-4 ring-slate-100 shadow transition-all duration-300 group-hover:scale-110">
                    <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-90 transition-transform" />
                  </div>
                  <div className="space-y-2 bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex-1 relative overflow-hidden transition-all group-hover:border-blue-200">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/40 rounded-full blur-2xl z-0" />
                    <h4 className="font-extrabold text-[#0c2340] text-lg tracking-tight z-10 relative">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed z-10 relative">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TEAM GRIDS SECTION */}
      <section className="max-w-7xl mx-auto py-28 px-6 md:px-12">
        <motion.div
          // @ts-ignore
          variants={premiumFadeInY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0c2340]">
            Leadership & Technical Experts
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base font-normal tracking-tight leading-relaxed">
            Driving industrial standards with collective decades of global
            engineering and pharmaceutical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={dynamicStagger(0.2, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            {
              name: "Suman Kanti Das (M. Pharm)",
              role: "Chief Executive Officer",
              head: "Technical Head",
              exp: "18 Years Experience",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
              bio: "Expert in QC generic formulations, sterile dosages, and macro-forecast inventory structures.",
            },
            {
              name: "Md. Rajwan Mia (M.Sc. Physics)",
              role: "Chief Administrative Officer",
              head: "Logistics Head",
              exp: "17 Years Experience",
              image:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
              bio: "Specialist in food & garments industry operations, licensing, and BIAA/IRC/ERC customs documentation.",
            },
            {
              name: "Sogan Ghosh (B.Com. Hons)",
              role: "Director",
              head: "Global Sourcing Head",
              exp: "15 Years Experience",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
              bio: "Vast knowledge of procurement management in multinational corporations and macro-scale business developments.",
            },
            {
              name: "Md. Shamsul Arefin (B.Sc. EEE)",
              role: "Technical Director",
              head: "Engineering",
              exp: "12 Years Experience",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
              bio: "Heads the engineering division, machinery installation protocols, maintenance, and facility testing commissions.",
            },
            {
              name: "Md. Salahuddin Patwary (M. Pharm)",
              role: "Technical Director",
              head: "Pharma Division",
              exp: "17 Years Experience",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
              bio: "Core leader in QA systems, WHO-GMP alignment guidelines, validations master plans, and row material inspections.",
            },
          ].map((member, idx) => (
            <motion.div
              // @ts-ignore
              variants={premiumFadeInY}
              whileHover={{
                y: -10,
                backgroundColor: "#fff",
                borderColor: "#bfdbfe",
                transition: { duration: 0.3 },
              }}
              key={idx}
              className="bg-white/80 p-8 rounded-3xl border border-slate-100 shadow-sm backdrop-blur-sm transition-all flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50/60 rounded-full blur-[25px] group-hover:bg-blue-100/50 transition-colors" />

              <div className="space-y-6 z-10">
                <div className="flex justify-between items-center pb-5 border-b border-slate-100">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#2D5DA1] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50">
                    {member.exp}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#2D5DA1] transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase mt-1 tracking-wider">
                    {member.role} • {member.head}
                  </p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-1 font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-100 z-10 flex items-center justify-between text-xs font-medium text-slate-400 hover:text-[#2D5DA1] cursor-pointer transition-colors overflow-hidden relative group">
                <span className="relative">
                  View Full Profile
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[1px] bg-[#2D5DA1] transition-all duration-300" />
                </span>
                <ArrowUpRight
                  size={15}
                  className="transform scale-100 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. CERTIFIED QUALITY ASSURANCE */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-200 via-[#2D5DA1]/30 to-blue-200" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-1"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Certified Compliance
            </p>
            <h3 className="text-xl font-extrabold text-[#0c2340] tracking-tight">
              Blue Bird Business Link
            </h3>
          </motion.div>

          <motion.div
            variants={dynamicStagger(0.2, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 border-slate-200 bg-slate-50 border p-6 rounded-3xl shadow-inner"
          >
            {[
              "WHO-GMP Guidelines",
              "ISO QMS Assurance",
              "BIAA Registered",
              "100% On-Time Delivery",
            ].map((badge, idx) => (
              <motion.div
                // @ts-ignore
                variants={wordSplit}
                key={idx}
                className="flex items-center gap-2.5 text-slate-600 font-semibold text-sm"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#2D5DA1] drop-shadow-sm"
                  strokeWidth={2}
                />
                <span className="tracking-tight">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
