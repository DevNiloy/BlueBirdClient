// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   GraduationCap,
//   Award,

//   User2,
// } from "lucide-react";

// // --- Framer Motion Scroll Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 },
//   },
// };

// const cardFadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function OurTeam() {
//   // Team Data Structure from corporate records
//   const teamMembers = [
//     {
//       name: "SUMAN KANTI DAS",
//       degree: "M. PHARM",
//       role: "Chief Executive Officer & Technical Head",
//       experience: "18 Years",
//       tags: ["QC Operations", "Dosage Formulation", "PPIC Sourcing"],
//       bio: "4th generation entrepreneur with immense knowledge of domestic and international markets. Highly experienced globally in Pharmaceutical and other chemical products. Spent 18 years leading QC processes (arrival materials, in-process, finished goods), solid/liquid/sterile production departments, and Production Planning & Inventory Control based on yearly forecasts.",
//     },
//     {
//       name: "MD. RAJWAN MIA",
//       degree: "M.Sc. in PHYSICS",
//       role: "Chief Administrative Officer & Logistics Head",
//       experience: "17 Years",
//       tags: ["Global Import", "Logistics & Supply Chain", "BIAA Compliance"],
//       bio: "Dynamic and self-motivated professional with a Master's in Physics. Holds 17 years of extensive experience in the Food & Beverage and Textile/Dyeing sectors in Bangladesh. Expert in maintaining strategic relationships with top-most global manufacturers and executing machinery imports with proper systematic documentations (BIAA, IRC, ERC, TIN, BIN) under Bangladesh government regulations.",
//     },
//     {
//       name: "SOGAN GHOSH",
//       degree: "B.Com. (HONS)",
//       role: "Director of Global Sourcing & Systems Management",
//       experience: "15 Years",
//       tags: [
//         "Global Procurement",
//         "Commodities Sourcing",
//         "Business Development",
//       ],
//       bio: "Leads the Global Sourcing wing at Blue Bird Business Link with vast expertise across domestic and international markets. Possesses 15 years of proven track record as Procurement Chief for top multinationals and as a Senior Business Developer driving international export-import operations.",
//     },
//     {
//       name: "MD. SHAMSUL AREFIN",
//       degree: "B.Sc. in EEE",
//       role: "Technical Director of Engineering",
//       experience: "12 Years",
//       tags: [
//         "Machine Installation",
//         "Testing Commission",
//         "Pharma Engineering",
//       ],
//       bio: "Heads the Engineering Province at Blue Bird Business Link. Brings 12 years of specialized infrastructure experience within the pharmaceutical sector, acting as Technical In-charge managing critical machinery imports, complex system installations, technical maintenance, and operational testing commissions.",
//     },
//     {
//       name: "MD. SALAHUDDIN PATWARY",
//       degree: "M. PHARM",
//       role: "Technical Director of Pharma Division",
//       experience: "17 Years",
//       tags: ["Quality Assurance", "WHO-GMP Guidelines", "QMS Validation"],
//       bio: "Boasts 17 years of rich experience in the pharmaceutical industry of Bangladesh. Played core roles across Quality Assurance (Quality Management Systems, internal audits, validation master plans under WHO-GMP guidelines for APIs & Excipients), dosage production lines, and precision inventory forecast planning.",
//     },
//   ];

//   return (
//     <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* SECTION HEADER */}
//         <div className="text-center space-y-4 mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2D5DA1] block"
//           >
//             Leadership & Expertise
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight"
//           >
//             Our Foundation & <span className="text-[#2D5DA1]">Core Team</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed"
//           >
//             Backed by decades of collective industrial oversight, our leadership
//             ensures stringent quality protocols and uncompromised regulatory
//             compliance.
//           </motion.p>
//           <div className="w-12 h-[3px] bg-[#2D5DA1] mx-auto rounded-full pt-1" />
//         </div>

//         {/* TEAM CARDS STAGGERED GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
//         >
//           {teamMembers.map((member, idx) => (
//             <motion.div
//               key={idx}
//                  // @ts-ignore
//               variants={cardFadeInUp}
//               whileHover={{
//                 y: -5,
//                 boxShadow: "0 20px 40px -15px rgba(12,35,64,0.06)",
//               }}
//               className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group transition-all duration-300"
//             >
//               {/* Top Accent Tech Stripe */}
//               <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 group-hover:bg-[#2D5DA1] transition-colors" />

//               {/* Avatar Icon Sideframe */}
//               <div className="flex flex-col items-center shrink-0 w-full md:w-auto">
//                 <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-slate-400 group-hover:text-[#2D5DA1] group-hover:bg-blue-50/50 transition-all shadow-inner relative">
//                   <User2 size={36} strokeWidth={1.5} />
//                   {/* Absolute Badge for Years of Experience */}
//                   <span className="absolute -bottom-2 -right-2 bg-[#0c2340] text-white font-extrabold text-[9px] px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">
//                     {member.experience} EXP
//                   </span>
//                 </div>
//               </div>

//               {/* Core Information Details */}
//               <div className="space-y-4 w-full">
//                 {/* Header Layer */}
//                 <div className="space-y-1">
//                   <div className="flex flex-wrap items-center gap-2">
//                     <h3 className="text-xl font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#2D5DA1] transition-colors">
//                       {member.name}
//                     </h3>
//                     <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
//                       <GraduationCap size={12} />
//                       {member.degree}
//                     </span>
//                   </div>

//                   <p className="text-sm font-bold text-slate-500 tracking-wide flex items-center gap-1.5">
//                     <Briefcase size={14} className="text-[#2D5DA1]/70" />
//                     {member.role}
//                   </p>
//                 </div>

//                 {/* Micro Expertise Pills */}
//                 <div className="flex flex-wrap gap-1.5">
//                   {member.tags.map((tag, tIdx) => (
//                     <span
//                       key={tIdx}
//                       className="text-[10px] font-semibold bg-blue-50/40 text-[#2D5DA1] border border-blue-100/40 px-2.5 py-0.5 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Bio Description Segment */}
//                 <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal text-justify pt-2 border-t border-slate-50">
//                   {member.bio}
//                 </p>

//                 {/* Footer Service Signoff Clause */}
//                 <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
//                   <Award size={13} />
//                   <span>Quality & On-Time Service Assured</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, User2 } from "lucide-react";

// --- Framer Motion Scroll Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardFadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurTeam() {
  // --- 1. Founders Team Data ---
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

  // --- 2. Management Team Data ---
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
      experience: "Biotech Specialist",
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

  // --- Reusable Card Component ---
  const TeamCard = ({ member }: { member: (typeof founderMembers)[0] }) => (
    <motion.div
      //@ts-ignore
      variants={cardFadeInUp}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -15px rgba(12,35,64,0.06)",
      }}
      className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 group-hover:bg-[#2D5DA1] transition-colors" />

      <div className="flex flex-col items-center shrink-0 w-full md:w-auto">
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-slate-400 group-hover:text-[#2D5DA1] group-hover:bg-blue-50/50 transition-all shadow-inner relative">
          <User2 size={32} strokeWidth={1.5} />
          <span className="absolute -bottom-2 -right-2 bg-[#0c2340] text-white font-extrabold text-[8px] px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap uppercase">
            {member.experience}
          </span>
        </div>
      </div>

      <div className="space-y-3 w-full">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg md:text-xl font-extrabold text-[#0c2340] tracking-tight group-hover:text-[#2D5DA1] transition-colors">
              {member.name}
            </h3>
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide">
              <GraduationCap size={11} />
              {member.degree}
            </span>
          </div>
          <p className="text-xs md:text-sm font-bold text-slate-500 tracking-wide flex items-center gap-1.5">
            <Briefcase size={13} className="text-[#2D5DA1]/70" />
            {member.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {member.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[9px] font-semibold bg-blue-50/40 text-[#2D5DA1] border border-blue-100/40 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal text-justify pt-2 border-t border-slate-50">
          {member.bio}
        </p>

        <div className="pt-1 flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
          <Award size={12} />
          <span>Quality & Service Assured</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-slate-50 py-20 px-4 md:px-12 lg:px-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* SECTION GLOBAL HEADER */}
        <div className="text-center space-y-3">
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
          <div className="w-12 h-[3px] bg-[#2D5DA1] mx-auto rounded-full pt-1" />
        </div>

        {/* --- SEGMENT 1: FOUNDERS TEAM --- */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-xl font-black text-[#0c2340] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D5DA1]" />
              Founder Team
            </h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
          >
            {founderMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </motion.div>
        </div>

        {/* --- SEGMENT 2: MANAGEMENT TEAM --- */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-2">
            <h3 className="text-xl font-black text-[#0c2340] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              Management Team
            </h3>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
          >
            {managementMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
