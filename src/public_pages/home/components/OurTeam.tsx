 
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
   
  User2,
} from "lucide-react";

// --- Framer Motion Scroll Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardFadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurTeam() {
  // Team Data Structure from corporate records
  const teamMembers = [
    {
      name: "SUMAN KANTI DAS",
      degree: "M. PHARM",
      role: "Chief Executive Officer & Technical Head",
      experience: "18 Years",
      tags: ["QC Operations", "Dosage Formulation", "PPIC Sourcing"],
      bio: "4th generation entrepreneur with immense knowledge of domestic and international markets. Highly experienced globally in Pharmaceutical and other chemical products. Spent 18 years leading QC processes (arrival materials, in-process, finished goods), solid/liquid/sterile production departments, and Production Planning & Inventory Control based on yearly forecasts.",
    },
    {
      name: "MD. RAJWAN MIA",
      degree: "M.Sc. in PHYSICS",
      role: "Chief Administrative Officer & Logistics Head",
      experience: "17 Years",
      tags: ["Global Import", "Logistics & Supply Chain", "BIAA Compliance"],
      bio: "Dynamic and self-motivated professional with a Master's in Physics. Holds 17 years of extensive experience in the Food & Beverage and Textile/Dyeing sectors in Bangladesh. Expert in maintaining strategic relationships with top-most global manufacturers and executing machinery imports with proper systematic documentations (BIAA, IRC, ERC, TIN, BIN) under Bangladesh government regulations.",
    },
    {
      name: "SOGAN GHOSH",
      degree: "B.Com. (HONS)",
      role: "Director of Global Sourcing & Systems Management",
      experience: "15 Years",
      tags: [
        "Global Procurement",
        "Commodities Sourcing",
        "Business Development",
      ],
      bio: "Leads the Global Sourcing wing at Blue Bird Business Link with vast expertise across domestic and international markets. Possesses 15 years of proven track record as Procurement Chief for top multinationals and as a Senior Business Developer driving international export-import operations.",
    },
    {
      name: "MD. SHAMSUL AREFIN",
      degree: "B.Sc. in EEE",
      role: "Technical Director of Engineering",
      experience: "12 Years",
      tags: [
        "Machine Installation",
        "Testing Commission",
        "Pharma Engineering",
      ],
      bio: "Heads the Engineering Province at Blue Bird Business Link. Brings 12 years of specialized infrastructure experience within the pharmaceutical sector, acting as Technical In-charge managing critical machinery imports, complex system installations, technical maintenance, and operational testing commissions.",
    },
    {
      name: "MD. SALAHUDDIN PATWARY",
      degree: "M. PHARM",
      role: "Technical Director of Pharma Division",
      experience: "17 Years",
      tags: ["Quality Assurance", "WHO-GMP Guidelines", "QMS Validation"],
      bio: "Boasts 17 years of rich experience in the pharmaceutical industry of Bangladesh. Played core roles across Quality Assurance (Quality Management Systems, internal audits, validation master plans under WHO-GMP guidelines for APIs & Excipients), dosage production lines, and precision inventory forecast planning.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2D5DA1] block"
          >
            Leadership & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight"
          >
            Our Foundation & <span className="text-[#2D5DA1]">Core Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed"
          >
            Backed by decades of collective industrial oversight, our leadership
            ensures stringent quality protocols and uncompromised regulatory
            compliance.
          </motion.p>
          <div className="w-12 h-[3px] bg-[#2D5DA1] mx-auto rounded-full pt-1" />
        </div>

        {/* TEAM CARDS STAGGERED GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
                 // @ts-ignore
              variants={cardFadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(12,35,64,0.06)",
              }}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group transition-all duration-300"
            >
              {/* Top Accent Tech Stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 group-hover:bg-[#2D5DA1] transition-colors" />

              {/* Avatar Icon Sideframe */}
              <div className="flex flex-col items-center shrink-0 w-full md:w-auto">
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-slate-400 group-hover:text-[#2D5DA1] group-hover:bg-blue-50/50 transition-all shadow-inner relative">
                  <User2 size={36} strokeWidth={1.5} />
                  {/* Absolute Badge for Years of Experience */}
                  <span className="absolute -bottom-2 -right-2 bg-[#0c2340] text-white font-extrabold text-[9px] px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">
                    {member.experience} EXP
                  </span>
                </div>
              </div>

              {/* Core Information Details */}
              <div className="space-y-4 w-full">
                {/* Header Layer */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#2D5DA1] transition-colors">
                      {member.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                      <GraduationCap size={12} />
                      {member.degree}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-slate-500 tracking-wide flex items-center gap-1.5">
                    <Briefcase size={14} className="text-[#2D5DA1]/70" />
                    {member.role}
                  </p>
                </div>

                {/* Micro Expertise Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold bg-blue-50/40 text-[#2D5DA1] border border-blue-100/40 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bio Description Segment */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal text-justify pt-2 border-t border-slate-50">
                  {member.bio}
                </p>

                {/* Footer Service Signoff Clause */}
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                  <Award size={13} />
                  <span>Quality & On-Time Service Assured</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
