import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/redux/features/authApi";

type AuthTab = "login" | "register";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("login");
  const navigate = useNavigate();

  // --- API Mutatons ---
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  // --- Form States ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const isLoading = isLoginLoading || isRegisterLoading;

  // --- Handlers ---
  const handleTabChange = (tab: AuthTab) => {
    if (isLoading) return;
    setActiveTab(tab);
    // Clear dynamic error states if any
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (activeTab === "login") {
      try {
        const user = await login({ email, password }).unwrap();

        Swal.fire({
          title: "Access Granted!",
          text: `Welcome back, ${user?.name || "Partner"}!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          iconColor: "#0c2340",
          didOpen: (modal) => {
            modal.style.borderRadius = "1.5rem";
          },
        });
        navigate("/");
      } catch (err: any) {
        Swal.fire({
          title: "Portal Access Failed",
          text:
            err?.data?.message ||
            "Invalid credentials. Please verify and try again.",
          icon: "error",
          confirmButtonColor: "#0c2340",
          confirmButtonText: "Acknowledge",
        });
      }
    } else {
      try {
        await register({ name: fullName, email, password }).unwrap();

        Swal.fire({
          title: "Account Provisioned!",
          text: "Your registration was successful. Welcome to the portal!",
          icon: "success",
          confirmButtonColor: "#0c2340",
          iconColor: "#0c2340",
        });

        // Auto switch to login tab on success
        setActiveTab("login");
        setFullName("");
      } catch (err: any) {
        Swal.fire({
          title: "Provisioning Failed",
          text:
            err?.data?.message ||
            "Could not complete registration. Please try again.",
          icon: "error",
          confirmButtonColor: "#0c2340",
        });
      }
    }
  };

  return (
    <div className="notranslate min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6 font-sans select-none">
      {/* Main Container mirroring image_e0d945.png split grid */}
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[640px] border border-slate-200/80">
        {/* LEFT COLUMN: Industrial / Chemical Branding Splash Showcase */}
        <div className="md:col-span-6 relative bg-slate-950 p-10 flex flex-col justify-between overflow-hidden">
          {/* High-quality industrial blend opacity overlay matching image_e0d945.png */}
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
            alt="Enterprise Manufacturing Sourcing Portal"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340]/95 via-[#13325c]/90 to-[#1e467a]/95 z-0" />

          {/* Core Headline & Subtext Contextual Stack */}
          <div className="relative z-10 space-y-4 my-auto max-w-sm">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Precision in every compound.
            </h1>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal opacity-90">
              Access our secure industrial portal for enterprise chemical
              management and compliance documentation.
            </p>
          </div>

          {/* Bottom Trust Meta Elements */}
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

        {/* RIGHT COLUMN: Interactive Control & Tab Routing Form Elements */}
        <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Top Operational Navigation Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-200 text-xs font-bold tracking-widest uppercase mb-10 pb-0">
              <button
                type="button"
                onClick={() => handleTabChange("login")}
                className={`pb-3 relative transition-all ${
                  activeTab === "login"
                    ? "text-[#0c2340]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Login
                {activeTab === "login" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0c2340]" />
                )}
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("register")}
                className={`pb-3 relative transition-all ${
                  activeTab === "register"
                    ? "text-[#0c2340]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                Register
                {activeTab === "register" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0c2340]" />
                )}
              </button>
            </div>

            {/* Static Context Header */}
            <div className="space-y-1.5 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-[#0c2340]">
                {activeTab === "login"
                  ? "Partner Portal"
                  : "Create Partner Account"}
              </h2>
              <p className="text-xs font-medium text-slate-500">
                {activeTab === "login"
                  ? "Authorized personnel only. Please sign in to continue."
                  : "Request secure organizational node credentials below."}
              </p>
            </div>

            {/* Form Fields Implementation */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {/* Conditional Display Field: Registration Client Name */}
              {activeTab === "register" && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
                      placeholder="Anisul Haque"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <User
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                      size={16}
                    />
                  </div>
                </div>
              )}

              {/* Dynamic Standard Input Field: Business Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  Business Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
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

              {/* Dynamic Standard Input Field: Secure Token Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                    Secure Password
                  </label>
                  {activeTab === "login" && (
                    <button
                      type="button"
                      className="text-[10px] text-slate-400 font-bold hover:text-[#0c2340] transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="w-full text-xs font-medium px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#0c2340] focus:ring-1 focus:ring-[#0c2340] transition-all outline-none text-slate-800 placeholder-slate-300"
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

              {/* Session Retention / Agreement Checkbox Option */}
              <div className="flex items-center gap-2 pt-1 pb-2">
                <input
                  type="checkbox"
                  id="auth-checkbox"
                  checked={stayLoggedIn}
                  onChange={(e) => setStayLoggedIn(e.target.checked)}
                  className="rounded border-slate-300 text-[#0c2340] focus:ring-[#0c2340] cursor-pointer"
                />
                <label
                  htmlFor="auth-checkbox"
                  className="text-[11px] text-slate-500 font-medium cursor-pointer select-none"
                >
                  {activeTab === "login"
                    ? "Stay logged in for this session"
                    : "I accept the organization's terms and security protocols."}
                </label>
              </div>

              {/* Submission Interactive Button CTA Element */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0c2340] text-white py-3.5 rounded font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#13325c] transition-all disabled:opacity-75"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <>
                    {activeTab === "login" ? "Access Portal" : "Provision Node"}
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Institutional Bottom Branding Footer Signature Area */}
          <div className="pt-6 border-t border-slate-200 text-center space-y-3 mt-8">
            <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Trusted by global leaders
            </span>
            <div className="flex justify-center items-center gap-6 opacity-20 filter grayscale">
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

export default AuthPage;
