import { motion } from "framer-motion";
import {
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  User,
  GraduationCap,
  Briefcase,
  Clock,
  Shield,
  Users,
  Settings,
  TrendingUp,
  Network,
  Layers,
  Sparkles,
} from "lucide-react";

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

const wordSplit = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const floatingAnimation = {
  y: ["0%", "-3%", "0%", "3%", "0%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function About() {
  // --- 1. What We Do Data ---
  const servicesAndStrengths = [
    {
      title: "Tailored Sourcing Solutions",
      desc: "Blue Bird Business Link delivers customized sourcing and technical support services designed to meet the specific requirements of each client and project.",
      icon: <Settings size={24} strokeWidth={1.5} />,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Strategic Brand Development Support",
      desc: "We actively promote and position our principals’ products in the Bangladesh market and beyond, supporting long-term business growth and market expansion opportunities without additional marketing burden on our partners.",
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Global Representative Network with Local Expertise",
      desc: "Our strong network of international representatives provides valuable regional insights and market intelligence. This ensures effective project coordination, continuous feedback, and reliable local support for our clients throughout the implementation process.",
      icon: <Network size={24} strokeWidth={1.5} />,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Standard and Customized Product Solutions",
      desc: "Our product portfolio is available in both standard and customized specifications. With strong logistics coordination and supply capability, we deliver large-volume requirements on time, helping us build long-term partnerships with leading domestic and international vendors.",
      icon: <Layers size={24} strokeWidth={1.5} />,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      title: "International Trade and Project Coordination Expertise",
      desc: "We facilitate commercial trade flows through import–export operations and manage international sourcing projects in close collaboration with our global partners.",
      icon: <Briefcase size={24} strokeWidth={1.5} />,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  // --- 2. Our Mission Data ---
  const missionPoints = [
    "Striving to continuously meet the growing and diverse needs of our customers through reliable and responsive service.",
    "Focusing on efficient and effective management of import and export operations to ensure the delivery of high-quality products at competitive costs, along with dependable services across our entire product range.",
    "We are working toward becoming a market leader within our targeted business segments through strategic planning and consistent performance.",
    "Ensuring strong supply chain management, sourcing from reputable manufacturers, and delivering to customers with excellence in operational execution.",
    "Building long-term value-based relationships with business partners to achieve sustainable and mutually beneficial growth.",
    "Maintaining a strong commitment to continuous learning, innovation, and technology adoption to create higher value, explore new market opportunities, reduce waste, and improve operational efficiency for maximizing productivity.",
    "Encouraging teamwork, creativity, and transparency within the organization, empowering our staff to contribute effectively in a collaborative and professional working environment.",
  ];

  // --- 3. Founder Members Data ---
  const founderMembers = [
    {
      name: "MD. RAJWAN MIA",
      degree: "B.Sc. (Hons), M.Sc. in Physics",
      role: "Chief Executive Officer (C.E.O.) ",
      experience: "17 Years",
      tags: ["Global Sourcing", "Machinery Import", "BIAA Compliance"],
      bio: "A dynamic, self-motivated, and self-made professional with a Master of Science in Physics. Holds 17 years of extensive experience in the food & beverage and garment industries (textile & dyeing sector) in Bangladesh. Expert in maintaining cordial relationships with top global manufacturers and executing machinery imports with proper systematic documentation (BIAA, Indenting License, IRC, ERC, TIN, BIN) following the Government regulations.",
    },
    {
      name: "MD. SHAMSUL AREFIN",
      degree: "B.Sc. in EEE",
      role: "Technical Director of Engineering (Co-Founder)",
      experience: "12 Years",
      tags: [
        "Machine Installation",
        "Testing Commission",
        "Pharma Infrastructure",
      ],
      bio: "Heads the engineering department at Blue Bird Business Link, possessing vast knowledge in engineering fields, especially machinery and equipment. Brings 12 years of core experience in the pharmaceutical industry as a technical manager, specializing in looking after import sites, complex machine installations, technical maintenance, and operational testing commissions.",
    },
    {
      name: "MD. ASRAFUZZAMAN SHOABE",
      degree: "B.Com",
      role: "Managing Partner (Co-Founder)",
      experience: "Founder",
      tags: [
        "Strategic Growth",
        "Engineering Operations",
        "Technical Segments",
      ],
      bio: "Managing Director of AR Lift & Escalators Limited (a sister concern of Blue Bird Business Link) and a major investor in BBBL, contributing significantly to the company’s strategic growth and development. He is responsible for overseeing and managing all engineering-related operations and technical product segments within the organization.",
    },
  ];

  // --- 4. Management Team Data ---
  const managementMembers = [
    {
      name: "ABU MD. SHOEB",
      degree: "M.Pharm",
      role: "Product Developer",
      experience: "18 Years",
      tags: ["QC Department", "Production Planning", "Sourcing Activities"],
      bio: "A fourth-generation entrepreneur with strong expertise in both domestic and international markets. Brings extensive professional experience in pharmaceutical and chemical products at a global level. With over 18 years of experience in the pharma industry, he has built a solid foundation in incoming raw materials testing, in-process quality inspections, finished products evaluation, forecast-based production planning, and continuous inventory control.",
    },
    {
      name: "MD. SALAHUDDIN PATWARY",
      degree: "M.Pharm",
      role: "Technical Director of the Pharma Division",
      experience: "17 Years",
      tags: ["Quality Assurance", "WHO-GMP Guidelines", "PPIC Sourcing"],
      bio: "Boasts 17 years of rich experience in the pharmaceutical industry of Bangladesh. Played core roles across Quality Assurance (Quality Management Systems, internal audits, validation master plans under WHO-GMP guidelines for raw materials, APIs & Excipients), dosage production lines (solids, liquids, semisolids), and precision Production Planning & Inventory Control based on yearly forecasts.",
    },
    {
      name: "MOHAMMAD BELAL HOSSAIN",
      degree: "MBA (Accounting)",
      role: "Head of Accounting",
      experience: "Senior",
      tags: ["Financial Strategy", "Risk Management", "Compliance Audit"],
      bio: "Leads the accounting function not just to record the past but to illuminate the future. Believes every number tells a story of revenue, risk, and opportunity. He ensures the financial narrative is highly accurate, compliant, and actionable, transforming excellent accounting from a structural burden into a core competitive advantage for the company's success.",
    },
    {
      name: "TANVIR HASAN RUPOM",
      degree: "B.Sc. in Genetic Engineering & Biotechnology",
      role: "Sr. Executive Officer",
      experience: "",
      tags: ["Pharma Relations", "HiMedia Products", "Marketing & Purchase"],
      bio: "Completed his degree from East West University and worked as a research associate at Dhaka University, gaining practical laboratory experience. Currently managing marketing activities, website management, and pharmaceutical client relations at BBBL Biotech Products, specializing in handling dehydrated culture media and HiMedia products to ensure proper client support.",
    },
    {
      name: "ASSIM WAKIF",
      degree: "B.Sc. in GEB & M.Sc. in Chemistry",
      role: "Executive Officer",
      experience: "Technical Coordination",
      tags: ["Lab Management", "Diagnostic Sourcing", "Business Development"],
      bio: "Earned his B.Sc. from East West University and M.Sc. in Chemistry and Chemical Technology from Jagannath University. Actively manages key operational areas including university labs, pharmaceutical labs, diagnostic centers, and marketing activities. His academic depth combined with lab experience contributes significantly to technical coordination.",
    },
    {
      name: "FEROZ AHMMED",
      degree: "B.Sc. (Hons), M.Sc. in Physics",
      role: "Head of Logistics",
      experience: "Logistics Chief",
      tags: ["Supply Chain", "Delivery Operations", "Service Reliability"],
      bio: "Serves as the Head of Logistics for AR Lift and Escalator Limited, Flamingo International, and Blue Bird Business Link. Highly skilled in logistics management with strong expertise developed through years of professional involvement. Efficiently manages delivery operations, ensuring smooth, timely, and organized execution across all three organizations.",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-x-hidden antialiased [text-rendering:optimizeLegibility]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-start py-28 px-6 md:px-12 bg-slate-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1800"
          alt="Advanced Supply Chain Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-30 mix-blend-luminosity select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/95 via-[#1b3a66]/90 to-[#2D5DA1]/75 z-10" />

        <motion.div
          variants={dynamicStagger(0.05, 0.1)}
          initial="hidden"
          animate="visible"
          className="container mx-auto z-20 space-y-6"
        >
          <motion.span
            // @ts-ignore
            variants={premiumFadeInY}
            className="inline-block bg-white/10 text-blue-200 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold shadow-inner"
          >
            Blue Bird Business Link
          </motion.span>

          <motion.h1
            variants={dynamicStagger(0.1, 0.1)}
            className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight max-w-5xl"
          >
            {[
              "Global",
              "Sourcing.",
              "Technical",
              "Excellence.",
              "Industrial",
              "Trust.",
            ].map((word, index) => (
              <motion.span
                key={index}
                // @ts-ignore
                variants={wordSplit}
                className={`inline-block mr-3 ${index % 2 !== 0 ? "text-blue-300" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            // @ts-ignore
            variants={premiumFadeInY}
            className="text-base md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed tracking-tight"
          >
            Connecting top-tier international manufacturers with Bangladesh's
            core industrial sectors through high-end engineering, pharma
            division mastery, and compliance leadership.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. WHAT WE DO: STRENGTHS & SERVICE CAPABILITIES */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12">
        <motion.div
          // @ts-ignore
          variants={premiumFadeInY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 space-y-2"
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#2D5DA1] flex items-center gap-2">
            <Sparkles size={14} /> Operational Spectrum
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] border-l-4 pl-4 border-[#2D5DA1] tracking-tight">
            Our Strengths & Service Capabilities
          </h2>
        </motion.div>

        <motion.div
          variants={dynamicStagger(0.05, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesAndStrengths.map((item, idx) => (
            <motion.div
              // @ts-ignore
              variants={premiumFadeInY}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(12, 35, 64, 0.08)",
              }}
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between transition-all group relative overflow-hidden"
            >
              <div className="space-y-5">
                <motion.div
                  // @ts-ignore
                  animate={floatingAnimation}
                  className={`p-3 rounded-2xl w-fit border shadow-sm transition-colors ${item.color}`}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-black tracking-tight text-[#0c2340] group-hover:text-[#2D5DA1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed text-justify font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-[#2D5DA1] transition-colors">
                <span>Core Pillar</span>
                <ArrowUpRight
                  size={13}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}

          {/* Core Sectors Info Card */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            className="bg-gradient-to-br from-[#0c2340] to-[#1b3a66] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#2D5DA1]/20 rounded-full blur-[40px]" />
            <div className="space-y-4 z-10">
              <span className="text-xs font-black tracking-widest uppercase text-blue-300">
                Market Alignment
              </span>
              <p className="text-slate-200 text-xs leading-relaxed font-normal">
                Facilitating absolute structural trade flows through
                comprehensive import-export frameworks.
              </p>
            </div>
            <div className="pt-8 border-t border-blue-900/50 z-10">
              <div className="text-3xl font-black text-white tracking-tighter">
                Strategic Sectors
              </div>
              <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-1 font-bold">
                Pharma, Garments, Textiles & Machinery
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FOUNDER MEMBERS SECTION */}
      <section className="bg-slate-100/50 border-y border-slate-200/60 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14 space-y-2"
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#2D5DA1] flex items-center gap-2">
              <Shield size={14} /> Executive Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] border-l-4 pl-4 border-[#2D5DA1] tracking-tight">
              Founder Members
            </h2>
          </motion.div>

          <motion.div
            variants={dynamicStagger(0.05, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {founderMembers.map((member, idx) => (
              <motion.div
                // @ts-ignore
                variants={premiumFadeInY}
                whileHover={{
                  y: -6,
                  boxShadow: "0 22px 40px -15px rgba(12, 35, 64, 0.1)",
                }}
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2D5DA1] to-blue-400" />

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-lg font-black tracking-tight text-[#0c2340] group-hover:text-[#2D5DA1] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <span className="flex items-center gap-1 bg-blue-50 text-[#2D5DA1] font-bold text-[10px] px-2.5 py-1 rounded-full border border-blue-100/70 shrink-0">
                        <Clock size={11} /> {member.experience}
                      </span>
                    </div>
                    <p className="text-xs font-extrabold text-amber-600 mt-1 flex items-center gap-1.5">
                      <Briefcase size={12} strokeWidth={2.5} /> {member.role}
                    </p>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <GraduationCap size={12} /> {member.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] uppercase font-bold tracking-wider bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-[1px] bg-slate-100 w-full" />

                  <p className="text-slate-600 text-xs leading-relaxed text-justify font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-[#2D5DA1] transition-colors">
                  <span>Board of Director</span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. MANAGEMENT TEAM SECTION */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14 space-y-2"
          >
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
              <Users size={14} /> Execution Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2340] border-l-4 pl-4 border-emerald-500 tracking-tight">
              Management Team
            </h2>
          </motion.div>

          <motion.div
            variants={dynamicStagger(0.04, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {managementMembers.map((member, idx) => (
              <motion.div
                // @ts-ignore
                variants={premiumFadeInY}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 35px -15px rgba(0, 0, 0, 0.05)",
                }}
                key={idx}
                className="bg-slate-50 p-7 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-bold tracking-tight text-[#0c2340] group-hover:text-emerald-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded shrink-0">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-500 mt-1">
                      {member.role}
                    </p>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5 flex items-center gap-1">
                      <GraduationCap size={12} className="text-slate-300" />{" "}
                      {member.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold tracking-tight bg-white text-slate-500 px-2 py-0.5 rounded border border-slate-200/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-[1px] bg-slate-200/60 w-full" />

                  <p className="text-slate-600 text-xs leading-relaxed text-justify font-normal opacity-90">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1">
                  <User size={10} /> Professional Segment
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. OUR MISSION SECTION (Timeline Staggered Layout) */}
      <section className="bg-slate-100 py-24 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-4">
            <div className="bg-blue-50 p-3.5 rounded-2xl w-fit text-[#2D5DA1] border border-blue-100 shadow-inner">
              <Rocket size={28} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#0c2340]">
              Our Mission
            </h2>
            <div className="w-12 h-[3px] bg-[#2D5DA1] rounded-full" />
            <p className="text-slate-500 text-xs leading-relaxed font-normal">
              Empowering core industries through robust execution, continuous
              modern learning frameworks, and transparent vendor-client
              ecosystems.
            </p>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              variants={dynamicStagger(0.1, 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-blue-200/60"
            >
              {missionPoints.map((point, idx) => (
                <motion.div
                  // @ts-ignore
                  variants={premiumFadeInY}
                  key={idx}
                  className="flex gap-6 relative group"
                >
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#2D5DA1] flex items-center justify-center z-10 shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#2D5DA1]">
                    <span className="text-[10px] font-black text-[#2D5DA1] group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex-1 relative overflow-hidden transition-all group-hover:border-blue-300 group-hover:shadow-md">
                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. BRAND COMPLIANCE FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-200 via-[#2D5DA1]/30 to-blue-200" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
              Corporate Governance
            </p>
            <h3 className="text-lg font-extrabold text-[#0c2340] tracking-tight">
              Blue Bird Business Link
            </h3>
          </div>

          <motion.div
            variants={dynamicStagger(0.1, 0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 border-slate-200 bg-slate-50 border p-4 rounded-2xl shadow-inner"
          >
            {[
              "BIAA Registered Enlistment",
              "100% Statutory Compliance",
              "Technical Core Management",
              "Sustainable Supply Flow",
            ].map((badge, idx) => (
              <motion.div
                // @ts-ignore
                variants={wordSplit}
                key={idx}
                className="flex items-center gap-2 text-slate-600 font-bold text-xs"
              >
                <CheckCircle2
                  size={15}
                  className="text-[#2D5DA1] drop-shadow-sm"
                  strokeWidth={2.5}
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
