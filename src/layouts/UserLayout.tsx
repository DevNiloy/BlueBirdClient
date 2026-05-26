import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useGetMeQuery, useLogoutMutation } from "@/redux/features/authApi";
const IMG_URL = import.meta.env.VITE_API_URL;
import {
  LayoutDashboard,
  ShoppingBag,
  LogOut,
  Menu,
  X,
  Loader2,
  ChevronRight,
} from "lucide-react";

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // API Logout Mutation Hook
  const [logoutApi, { isLoading: isLoggingOut }] = useLogoutMutation();
  const { data: user } = useGetMeQuery(undefined);

  // --- Logout Handler ---
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1a1a1a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {
      try {
        await logoutApi(undefined).unwrap();
        localStorage.removeItem("token");

        Swal.fire({
          title: "Logged Out!",
          text: "See you again soon.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("/", { replace: true });
      } catch (error: any) {
        console.error("Logout Error:", error);
        localStorage.removeItem("token");
        navigate("/");

        Swal.fire({
          title: "Session Cleared",
          text: "You have been logged out.",
          icon: "info",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Orders", path: `/user` },
    {
      icon: <ShoppingBag size={18} />,
      label: "Profile",
      path: `/user/profile`,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F7F9] font-sans text-[#334155]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (bg-[#E9EBF0] থিম অনুযায়ী) */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#E9EBF0] border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6">
          {/* Logo Area */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <Link to={"/"}>
                <h1 className="text-xl font-bold text-[#1e293b] leading-tight">
                  Blue Bird
                </h1>
              </Link>
              <p className="text-[11px] text-gray-500 font-medium tracking-wide">
                User Panel
              </p>
            </div>
            <button
              className="lg:hidden text-gray-500 hover:bg-white/50 p-1 rounded-lg"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Menu (টেক্সট ও অ্যাক্টিভ ব্লু থিম সামঞ্জস্য করা হয়েছে) */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#2563eb] shadow-sm border border-gray-100"
                      : "text-[#64748b] hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={isActive ? "text-[#2563eb]" : "text-[#94a3b8]"}
                    >
                      {item.icon}
                    </span>
                    <span className="text-[13px] font-medium">
                      {item.label}
                    </span>
                  </div>
                  {isActive && <ChevronRight size={14} />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout at Bottom */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-[#64748b] hover:text-red-600 transition-colors text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isLoggingOut ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <LogOut size={18} />
            )}
            <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <h2 className="text-[14px] font-semibold text-[#1e293b] hidden sm:block">
              Welcome Back, {user?.name || "User"}
            </h2>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-[13px] font-semibold text-[#1e293b]">
                {user?.name || "User Name"}
              </p>
              <p className="text-[11px] text-gray-500">Customer Account</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shrink-0">
              {user?.image ? (
                <img
                  src={`${IMG_URL}${user.image}`}
                  alt="profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ) : (
                <span className="text-xs font-bold text-[#64748b]">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Content Outlet (bg-[#F8FAFC] থিম অনুযায়ী) */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#F8FAFC] animate-in fade-in duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
