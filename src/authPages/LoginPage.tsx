import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { useLoginMutation } from "@/redux/features/authApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login({ email, password }).unwrap();

      // Success SweetAlert
      Swal.fire({
        title: "Access Granted!",
        text: `Welcome back, ${user?.name || "Partner"}!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        iconColor: "#0c2340",
        didOpen: (modal) => {
          modal.style.borderRadius = "1rem";
        },
      });

      navigate("/");
    } catch (err: any) {
      // Error SweetAlert
      Swal.fire({
        title: "Portal Access Failed",
        text:
          err?.data?.message || "Invalid email or password. Please try again.",
        icon: "error",
        confirmButtonColor: "#0c2340",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="notranslate min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6 font-sans select-none">
      {/* Main Split Container mirroring image_e0d225.png */}
      <div className="max-w-5xl w-full bg-white rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px] border border-slate-200">
        {/* LEFT COLUMN: Premium Industrial / B2B Splash Showcase */}
        <div className="md:col-span-6 relative bg-[#0c2340] p-10 flex flex-col justify-between overflow-hidden">
          {/* Background overlay graphic pattern */}
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

        {/* RIGHT COLUMN: Formal Form Content Area */}
        <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Navigational Tabs Structure */}
            <div className="flex items-center gap-6 border-b border-slate-200 text-xs font-bold tracking-widest uppercase mb-10">
              <span className="pb-3 relative text-[#0c2340] cursor-default">
                Login
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0c2340]" />
              </span>
              <Link
                to="/register"
                className="pb-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Context Title Stack */}
            <div className="space-y-1.5 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-[#0c2340]">
                Partner Portal
              </h2>
              <p className="text-xs font-medium text-slate-500">
                Authorized personnel only. Please sign in to continue.
              </p>
            </div>

            {/* Form Core Implementation */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Field: Business Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Business Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full text-xs font-medium px-4 py-3.5 bg-white border border-slate-300 rounded-xs focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                </div>
              </div>

              {/* Field: Secure Password (No Forgot Password Link) */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Secure Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="w-full text-xs font-medium px-4 py-3.5 bg-white border border-slate-300 rounded-xs focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    size={16}
                  />
                </div>
              </div>

              {/* Session State Retention Checkbox */}
              <div className="flex items-center gap-2 pt-1 pb-2">
                <input
                  type="checkbox"
                  id="stayLoggedIn"
                  checked={stayLoggedIn}
                  onChange={(e) => setStayLoggedIn(e.target.checked)}
                  className="rounded-xs border-slate-300 text-[#0c2340] focus:ring-[#0c2340] cursor-pointer"
                />
                <label
                  htmlFor="stayLoggedIn"
                  className="text-[11px] text-slate-500 font-medium cursor-pointer select-none"
                >
                  Stay logged in for this session
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
                    Access Portal <ArrowRight size={14} />
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

export default LoginPage;
