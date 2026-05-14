import { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/redux/features/admin/products";

import { Edit, Trash2, Plus, Package, AlertCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductList = () => {
  // ✅ PAGINATION STATE
  const [page, setPage] = useState(1);
  const limit = 10;

  // ✅ API CALL WITH PAGE + LIMIT
  const { data, isLoading, isError } = useGetProductsQuery({
    page,
    limit,
  });

  const [deleteProduct] = useDeleteProductMutation();

  // ✅ DATA NORMALIZATION (Safe Access)
  const products = (data as any)?.data || [];
  const totalCount = (data as any)?.meta?.totalCount || 0;
  const totalPages = (data as any)?.meta?.totalPages || 1;

  // ✅ DELETE HANDLER
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "rounded-[24px]",
        confirmButton: "rounded-xl px-6 py-3",
        cancelButton: "rounded-xl px-6 py-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id).unwrap();
          toast.success("Product deleted successfully");
        } catch (err: any) {
          toast.error(err?.data?.message || "Failed to delete product");
        }
      }
    });
  };

  // ✅ LOADING STATE
  if (isLoading)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#10B981]"></span>
        <p className="text-slate-400 font-medium animate-pulse">
          Loading Inventory...
        </p>
      </div>
    );

  // ✅ ERROR STATE
  if (isError)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <div className="bg-rose-50 p-4 rounded-full mb-4">
          <AlertCircle className="text-rose-500" size={40} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Connection Error</h2>
        <p className="text-slate-500 max-w-xs mx-auto mt-2">
          Failed to load products. Please check your connection and try again.
        </p>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] p-6 lg:p-10 font-sans"
      translate="no"
    >
      {/* HEADER SECTION */}
      <div className="w-full mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="bg-[#0F172A] p-2 rounded-lg text-white">
                <Package size={22} />
              </div>
              <h1 className="text-2xl font-bold text-[#0F172A]">
                Inventory Management
              </h1>
            </div>
            <p className="text-slate-500 font-medium">
              Manage your marketplace stock and pricing
            </p>
          </div>

          <Link
            to="/admin/add-product"
            className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-100 transition-all active:scale-95 text-sm"
          >
            <Plus size={20} />
            ADD NEW PRODUCT
          </Link>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Package size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Products
              </p>
              <p className="text-2xl font-black text-slate-800">{totalCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div className="w-full mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="py-5 px-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Product info
                </th>
                <th className="py-5 px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Category
                </th>
                <th className="py-5 px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Pricing
                </th>
                <th className="py-5 px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Inventory
                </th>
                <th className="py-5 px-8 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {products.map((product: any) => (
                <tr
                  key={product._id}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                        <img
                          src={
                            product.images?.[0]?.startsWith("http")
                              ? product.images[0]
                              : `${import.meta.env.VITE_API_URL}${product.images?.[0]}`
                          }
                          alt=""
                          className="w-full h-full object-cover"
                          onError={(e) =>
                            (e.currentTarget.src =
                              "https://placehold.co/150x150?text=Product")
                          }
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm line-clamp-1">
                          {product.title}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">
                          SKU: {product._id?.slice(-8)}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-5 px-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">
                      {product.category?.name ||
                        product.category?.title ||
                        "Uncategorized"}
                    </span>
                  </td>

                  <td className="py-5 px-4">
                    <p className="font-bold text-slate-800">
                      ৳
                      {product.variants?.[0]?.price?.toLocaleString() ||
                        product.price?.toLocaleString() ||
                        "0"}
                    </p>
                  </td>

                  <td className="py-5 px-4">
                    <div className="flex flex-col">
                      {product.stockStatus === "available" ||
                      product.stockQuantity > 0 ? (
                        <span className="text-[10px] font-black text-emerald-500 uppercase">
                          In Stock
                        </span>
                      ) : (
                        <span className="text-[10px] font-black text-rose-400 uppercase">
                          Out of Stock
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-slate-400 italic">
                        {product.variants?.[0]?.stockQuantity ||
                          product.stockQuantity ||
                          0}{" "}
                        units available
                      </span>
                    </div>
                  </td>

                  <td className="py-5 px-8">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/admin/edit-product/${product._id}`}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 && (
          <div className="p-20 text-center">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-700">
              No Products Found
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Start by adding your first product to the inventory.
            </p>
          </div>
        )}

        {/* PAGINATION FOOTER */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Showing Page {page} of {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                    page === p
                      ? "bg-[#0F172A] text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
