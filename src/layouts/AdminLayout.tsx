import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetMeQuery, useLogoutMutation } from "@/redux/features/authApi";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  // Settings,
  LogOut,
  Menu,
  // X,
  Loader2,
  ChevronRight,
  Database,
} from "lucide-react";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [logoutApi, { isLoading: isLoggingOut }] = useLogoutMutation();
  const { data: user } = useGetMeQuery(undefined);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of the admin panel!",
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
        navigate("/", { replace: true });
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  };

  // image_dc2d17.png অনুযায়ী মেনু আইটেম সাজানো হয়েছে
  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: `/admin` },
    {
      icon: <Package size={18} />,
      label: "Product Management",
      path: `/admin/all-product`,
      subPaths: [`/admin/add-product`, `/admin/all-product`],
    },
    { icon: <ShoppingBag size={18} />, label: "Orders", path: `/admin/orders` },
    {
      icon: <Database size={18} />,
      label: "Inventory",
      path: `/admin/add-categories`,
    }, // Category/Inventory logic
    { icon: <Users size={18} />, label: "Customers", path: `/admin/users` },
    // {
    //   icon: <Settings size={18} />,
    //   label: "Settings",
    //   path: `/admin/settings`,
    // },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F7F9] font-sans text-[#334155]">
      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#E9EBF0] border-r border-gray-200 transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6">
          <div className="mb-8">
            <Link to={"/"}>
              <h1 className="text-xl font-bold text-[#1e293b] leading-tight">
                Admin Panel
              </h1>
              <p className="text-[11px] text-gray-500 font-medium tracking-wide">
                Precision Control
              </p>
            </Link>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.path || item.subPaths?.includes(pathname);
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
            className="flex items-center gap-3 px-3 py-2.5 w-full text-[#64748b] hover:text-red-600 transition-colors text-[13px] font-medium"
          >
            {isLoggingOut ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <LogOut size={18} />
            )}
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
          <button
            className="lg:hidden p-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[13px] font-semibold text-[#1e293b]">
                {user?.name || "Admin"}
              </p>
              <p className="text-[11px] text-gray-500">Super Admin</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
              <img
                src={user?.image || "https://ui-avatars.com/api/?name=Admin"}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="flex-1 overflow-y-auto p-2 bg-[#F8FAFC]">
          {/* Page Title Section Like image_dc2d17.png */}

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
