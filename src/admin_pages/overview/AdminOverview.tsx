import {
  Package,
  Clock,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Loader2,
  Truck,
  XCircle,
  BarChart3,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetDashboardStatsQuery,
  useGetAllOrdersQuery,
} from "@/redux/features/admin/adminOrderApi";

const StatCard = ({ title, value, icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <div
        className={`p-3 rounded-lg ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}
      >
        {icon}
      </div>
      <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold bg-emerald-50 px-2 py-1 rounded">
        <TrendingUp size={10} /> {trend}%
      </div>
    </div>
    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">
      {title}
    </p>
    <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
      {value || 0}
    </h3>
  </div>
);

const AdminOverview = () => {
  const navigate = useNavigate();
  const { locale } = useParams();

  const { data: statsData, isLoading: statsLoading } =
    useGetDashboardStatsQuery(undefined);
  const { data: ordersData, isLoading: ordersLoading } =
    useGetAllOrdersQuery(undefined);

  const stats = statsData?.data;
  const recentOrders = ordersData?.data?.slice(0, 5) || [];

  if (statsLoading || ordersLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#0F172A]" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700 p-8 bg-[#F8FAFC]">
      {/* ১. Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 font-medium text-sm mt-1">
            Real-time operational insights and performance metrics.
          </p>
        </div>
      </div>

      {/* ২. Top Stats (Revenue & Products) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0F172A] p-8 rounded-2xl text-white flex justify-between items-center shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700"></div>
          <div className="relative z-10">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
              Total Revenue
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              ¥{stats?.totalRevenue?.toLocaleString()}
            </h2>
          </div>
          <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 relative z-10">
            <BarChart3 size={32} className="text-emerald-400" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 flex justify-between items-center shadow-sm hover:shadow-md transition-all group">
          <div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
              Current Inventory
            </p>
            <h2 className="text-4xl font-bold text-[#0F172A] tracking-tight">
              {stats?.totalProducts}{" "}
              <span className="text-sm font-semibold text-slate-400 ml-1 uppercase">
                Items
              </span>
            </h2>
          </div>
          <div className="h-16 w-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-100 transition-colors">
            <Package size={32} className="text-[#0F172A]" />
          </div>
        </div>
      </div>

      {/* ৩. Order Status Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Pending"
          value={stats?.orders?.pending}
          icon={<Clock className="text-amber-600" />}
          color="bg-amber-600"
          trend="02"
        />
        <StatCard
          title="Confirmed"
          value={stats?.orders?.confirmed}
          icon={<CheckCircle2 className="text-blue-600" />}
          color="bg-blue-600"
          trend="12"
        />
        <StatCard
          title="Shipped"
          value={stats?.orders?.shipped}
          icon={<Truck className="text-indigo-600" />}
          color="bg-indigo-600"
          trend="08"
        />
        <StatCard
          title="Delivered"
          value={stats?.orders?.delivered}
          icon={<CheckCircle2 className="text-emerald-600" />}
          color="bg-emerald-600"
          trend="15"
        />
        <StatCard
          title="Cancelled"
          value={stats?.orders?.cancelled}
          icon={<XCircle className="text-rose-600" />}
          color="bg-rose-600"
          trend="01"
        />
      </div>

      {/* ৪. Recent Order List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 flex justify-between items-center border-b border-slate-100">
          <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-tight">
            Recent Transactions
          </h2>
          <button
            onClick={() => navigate(`/${locale}/admin/orders`)}
            className="text-[#2563EB] font-bold text-xs flex items-center gap-2 hover:underline transition-all"
          >
            View All Orders <ArrowRight size={14} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[10px] uppercase tracking-widest bg-slate-50/50">
                <th className="py-4 pl-8 font-bold">Trace ID</th>
                <th className="py-4 font-bold">Client</th>
                <th className="py-4 font-bold">Status</th>
                <th className="py-4 text-right pr-8 font-bold">Valuation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order: any) => (
                <tr
                  key={order._id}
                  onClick={() =>
                    navigate(`/${locale}/admin/orders/${order._id}`)
                  }
                  className="group hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <td className="py-5 pl-8">
                    <span className="font-mono text-[11px] font-semibold text-slate-400 group-hover:text-[#2563EB]">
                      #{order._id.slice(-6).toUpperCase()}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#1E293B] text-sm">
                        {order.user?.name || "Guest User"}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {new Date(order.createdAt).toLocaleDateString(
                          undefined,
                          { dateStyle: "medium" },
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="py-5">
                    <span
                      className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider border ${
                        order.status === "Pending"
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : order.status === "Shipped"
                            ? "bg-indigo-50 text-indigo-700 border-indigo-100"
                            : order.status === "Delivered"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : order.status === "Cancelled"
                                ? "bg-rose-50 text-rose-700 border-rose-100"
                                : "bg-blue-50 text-blue-700 border-blue-100"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-5 text-right pr-8">
                    <span className="font-bold text-[#0F172A] text-sm">
                      ¥{order.totalPrice.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
