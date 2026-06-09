import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ShieldCheck,
  Building2,
} from "lucide-react";
import logo from "../../../public/BBBL_logo-removebg-preview.png";
export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-slate-300 pt-20 pb-8 px-6 md:px-12 lg:px-24 border-t border-slate-800/80 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/60">
          {/* COLUMN 1: BRAND IDENTITY & DESCRIPTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <img src={logo} className="h-48 w-54" alt="" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-normal tracking-wide">
              Our headquarters in Dhaka-Bangladesh with fair presence of
              recognition across the globe. We have morphed into a sourcing
              powerhouse in the Asia, Europe & Pacific region.
            </p>

            {/* Social / Recognition Badges exactly like reference */}
            <div className="flex gap-3 pt-2">
              <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-[#2D5DA1] transition-colors cursor-pointer">
                <Globe2 size={16} />
              </div>
              <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-[#2D5DA1] transition-colors cursor-pointer">
                <ShieldCheck size={16} />
              </div>
              <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-[#2D5DA1] transition-colors cursor-pointer">
                <Building2 size={16} />
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              {[
                "Safety Data Sheets",
                "Compliance Certificates",
                "Terms of Sale",
                "Privacy Policy",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              {[
                "Global Logistics",
                "Inventory Management",
                "Lab Consulting",
                "Waste Recovery",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: DYNAMIC CONTACT US INFOS */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm font-medium">
              {/* Mail Segment */}
              <div className="flex items-start gap-3 group">
                <Mail size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@bbbl.com.bd"
                  className="text-slate-400 hover:text-white transition-colors break-all"
                >
                  contact@bbbl.com.bd
                </a>
              </div>

              {/* Phone Segment */}
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <div className="text-slate-400 space-y-1">
                  <a
                    href="tel:+8801621120670"
                    className="hover:text-white transition-colors block"
                  >
                    +880 162 1120 670
                  </a>
                </div>
              </div>

              {/* Office Location Segment */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span className="text-slate-400 leading-relaxed">
                  47, Dilkusha (Zaman Chamber)
                  <br />
                  5th Floor, Motijheel, Dhaka-1000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} Blue Bird Business Link. All rights
            reserved. ISO 9001:2015 Certified.
          </div>
          <div className="flex gap-6">
            <a
              href="#security"
              className="hover:text-slate-400 transition-colors"
            >
              Security
            </a>
            <a
              href="#sitemap"
              className="hover:text-slate-400 transition-colors"
            >
              Sitemap
            </a>
            <a
              href="#accessibility"
              className="hover:text-slate-400 transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
