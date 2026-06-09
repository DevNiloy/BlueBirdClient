import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { useRegisterMutation } from "@/redux/features/authApi";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(formData).unwrap();

      // Success SweetAlert
      Swal.fire({
        title: "Account Provisioned!",
        text: "Your registration was successful. Welcome to the platform!",
        icon: "success",
        confirmButtonColor: "#0c2340",
        iconColor: "#0c2340",
        didOpen: (modal) => {
          modal.style.borderRadius = "1rem";
        },
      });

      navigate("/login"); // Redirect to login page on success
    } catch (err: any) {
      // Error SweetAlert
      Swal.fire({
        title: "Provisioning Failed",
        text:
          err?.data?.message ||
          "Could not complete registration. Please try again.",
        icon: "error",
        confirmButtonColor: "#0c2340",
      });
    }
  };

  return (
    <div className="notranslate min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6 font-sans select-none">
      {/* Main Split Container matching image_e0d225.png */}
      <div className="max-w-5xl w-full bg-white rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px] border border-slate-200">
        {/* LEFT COLUMN: Premium Industrial / B2B Splash Showcase */}
        <div className="md:col-span-6 relative bg-[#0c2340] p-10 flex flex-col justify-between overflow-hidden">
          {/* Background image overlay matching login layout */}
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
            alt="Industrial Sourcing Framework"
            className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340]/95 via-[#13325c]/90 to-[#0c2340]/95 z-0" />

          {/* Typography Content */}
          <div className="relative z-10 space-y-4 my-auto max-w-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Precision in every compound.
            </h1>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal opacity-80">
              Access our secure industrial portal for enterprise chemical
              management and compliance documentation.
            </p>
          </div>

          {/* Meta Information Stats */}
          <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div className="space-y-0.5">
              <span className="block text-white font-black text-sm uppercase tracking-wide">
                100%
              </span>
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Compliance
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="block text-white font-black text-sm uppercase tracking-wide">
                24/7
              </span>
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Logistics
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Control & Registration Form */}
        <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Navigational Tabs Structure mirroring image_e0d225.png */}
            <div className="flex items-center gap-6 border-b border-slate-200 text-xs font-bold tracking-widest uppercase mb-10">
              <Link
                to="/login"
                className="pb-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                Login
              </Link>
              <span className="pb-3 relative text-[#0c2340] cursor-default">
                Register
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0c2340]" />
              </span>
            </div>

            {/* Context Title Stack */}
            <div className="space-y-1.5 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-[#0c2340]">
                Create Partner Account
              </h2>
              <p className="text-xs font-medium text-slate-500">
                Request secure organizational node credentials below.
              </p>
            </div>

            {/* Form Core Implementation */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field: Full Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded-xs focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <User
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                </div>
              </div>

              {/* Field: Business Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Business Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded-xs focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                </div>
              </div>

              {/* Field: Secure Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Secure Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded-xs focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <Lock
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                </div>
              </div>

              {/* Security Protocol Agreement Checkbox */}
              <div className="flex items-center gap-2 pt-1 pb-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  required
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="rounded-xs border-slate-300 text-[#0c2340] focus:ring-[#0c2340] cursor-pointer"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-[11px] text-slate-500 font-medium cursor-pointer select-none"
                >
                  I accept the organization's terms and security protocols.
                </label>
              </div>

              {/* Action Button CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0c2340] text-white py-3.5 rounded-xs font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#13325c] transition-all disabled:opacity-75"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <>
                    Provision Node <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer Branding Signature Section */}
          <div className="pt-6 border-t border-slate-200 text-center space-y-3 mt-8">
            <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Trusted by global leaders
            </span>
            <div className="flex justify-center items-center gap-6 opacity-20 filter grayscale select-none">
              <div className="h-4 w-12 bg-slate-500 rounded-full" />
              <div className="h-4 w-16 bg-slate-500 rounded-full" />
              <div className="h-4 w-14 bg-slate-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
