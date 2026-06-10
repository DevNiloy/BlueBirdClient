import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ShieldAlert,
  Send,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

// --- Framer Motion Animations ---
const fadeInContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const premiumFadeInY = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Technical Specification",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your email processing logic here
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans overflow-x-hidden antialiased min-h-screen pb-24">
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto pt-24 pb-12 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight">
            Connect with Our Experts
          </h1>
          <p className="text-slate-600 max-w-3xl text-base md:text-lg leading-relaxed font-normal">
            Precision and reliability are the cornerstones of our service. Reach
            out to our technical team for product specifications, logistics
            coordination, or safety inquiries.
          </p>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeInContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {/* LEFT & CENTER COLUMNS: GENERAL INQUIRY FORM */}
          <motion.div
            // @ts-ignore
            variants={premiumFadeInY}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#0c2340] mb-8 tracking-tight">
              General Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5DA1]/20 focus:border-[#2D5DA1] transition-all bg-slate-50/50"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Company Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="j.doe@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5DA1]/20 focus:border-[#2D5DA1] transition-all bg-slate-50/50"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Subject Dropdown */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5DA1]/20 focus:border-[#2D5DA1] transition-all bg-slate-50/50 appearance-none cursor-pointer text-slate-700 font-medium"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option>Technical Specification</option>
                      <option>Commercial Sourcing Quote</option>
                      <option>Logistics & Delivery Status</option>
                      <option>Compliance & Certification</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Organization Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Chemical Labs Inc."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5DA1]/20 focus:border-[#2D5DA1] transition-all bg-slate-50/50"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Detail your requirements here..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5DA1]/20 focus:border-[#2D5DA1] transition-all bg-slate-50/50 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0c2340] hover:bg-[#16335a] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                Send Request
                <Send
                  size={14}
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: HEADQUARTERS & IMMEDIATE ASSISTANCE */}
          <div className="space-y-8">
            {/* Global Headquarters Card */}
            <motion.div
              // @ts-ignore
              variants={premiumFadeInY}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="bg-[#0c2340] text-white p-6 space-y-1">
                <h3 className="font-bold text-lg tracking-tight">
                  Global Headquarters
                </h3>
                <p className="text-slate-400 text-xs tracking-wider uppercase font-semibold">
                  ISO 9001:2015 Certified Sourcing Office
                </p>
              </div>

              {/* Premium Vector/Styled Map Element */}
              <div className="h-48 bg-slate-900 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D5DA1]/20 via-transparent to-black/50" />

                {/* Animated Map Locator Target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#2D5DA1]/30 animate-ping" />
                  <div className="bg-[#2D5DA1] text-white p-3 rounded-2xl shadow-xl z-10 relative border border-white/20">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Motijheel C/A, Dhaka
                </div>
              </div>

              {/* Address & Hours Content */}
              <div className="p-6 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-[#2D5DA1] bg-blue-50 p-2.5 rounded-xl border border-blue-100/50 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-bold text-slate-900">
                      Blue Bird Business Link
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      47, Dilkusha (Zaman Chamber) 5th Floor,
                      <br />
                      Motijheel, Dhaka-1000, BANGLADESH
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                  <div className="text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h4 className="font-bold text-slate-900">Office Hours</h4>
                    <p className="text-slate-600 font-medium">
                      Sat - Thu: 09:00 - 18:00 BST
                    </p>
                    <p className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      Closed on Public Holidays
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Immediate Assistance (WhatsApp Callout) */}
            <motion.div
              // @ts-ignore
              variants={premiumFadeInY}
              className="bg-emerald-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[220px] group"
            >
              <div className="absolute -right-12 -bottom-12 w-44 h-44 bg-emerald-500 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

              <div className="space-y-3 z-10">
                <div className="bg-white/10 p-3 rounded-2xl w-fit border border-white/10">
                  <MessageSquare size={22} />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Immediate Assistance
                </h3>
                <p className="text-emerald-100 text-sm font-normal leading-relaxed">
                  Connect directly with a procurement specialist via WhatsApp
                  for instant stock availability, inventory status and lead
                  times.
                </p>
              </div>

              <a
                href="https://wa.me/8801621120670"
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full py-3.5 bg-white text-emerald-700 font-bold text-xs uppercase tracking-widest rounded-xl text-center shadow-md hover:bg-emerald-50 transition-colors z-10"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* 3. LOWER CARDS SECTION: SPECIFIC TEAMS */}
      <section className="max-w-7xl mx-auto mt-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sales & Procurement Communications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="text-[#2D5DA1] bg-blue-50 p-3 rounded-2xl w-fit border border-blue-100/50">
                <Mail size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Sales & Procurement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For wholesale indents, specialized pricing tiers, indent
                contracts and global supply chains queries.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-1.5 text-sm">
              <a
                href="mailto:contact@bbbl.com.bd"
                className="block text-[#2D5DA1] font-bold hover:underline"
              >
                contact@bbbl.com.bd
              </a>
              <a
                href="mailto:bird0521blue@gmail.com"
                className="block text-[#2D5DA1] font-bold hover:underline"
              >
                bird0521blue@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Technical & Commercial Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-2xl w-fit border border-indigo-100/50">
                <Phone size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Technical Support & Desk
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                COA specifications, regulatory documentation profiles,
                industrial sampling requests, and custom safety advisory.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 space-y-1.5 text-sm">
              <a
                href="mailto:bbbl.lifescience@gmail.com"
                className="block text-indigo-600 font-bold hover:underline"
              >
                bbbl.lifescience@gmail.com
              </a>
              <div className="text-slate-600 font-semibold space-y-0.5">
                <p>P: 01621120670</p>
                <p>P: 01688625909</p>
              </div>
            </div>
          </motion.div>

          {/* Compliance & Safety Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-100 p-8 rounded-3xl border border-slate-200/60 flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-3">
              <div className="text-slate-700 bg-slate-200/80 p-3 rounded-2xl w-fit border border-slate-300/40">
                <ShieldAlert size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2340] tracking-tight">
                Regulatory Compliance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All communications and material transactions are secured and
                protocol logs are preserved. We strictly adhere to global
                chemical safety and documentation frameworks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider group cursor-pointer">
              <span>View Safety Guidelines</span>
              <ArrowUpRight
                size={16}
                className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
