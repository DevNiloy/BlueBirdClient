import { useState } from "react";
const IMG_URL = import.meta.env.VITE_API_URL;

import {
  Plus,
  Layers,
  Image as ImageIcon,
  Trash2,
  GripVertical,
  ChevronDown,
  Info,
} from "lucide-react";

import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useCreateSubCategoryMutation,
  useDeleteCategoryMutation,
  useDeleteSubCategoryMutation,
} from "../../redux/features/admin/category";

const AddCategory = () => {
  // Category State
  const [catName, setCatName] = useState("");
  const [catImage, setCatImage] = useState<File | null>(null);

  // Sub Category State
  const [subName, setSubName] = useState("");
  const [selectedCatId, setSelectedCatId] = useState("");
  const [subImage, setSubImage] = useState<File | null>(null);

  // API Hooks
  const { data: categories } = useGetCategoriesQuery();

  const [createCategory, { isLoading: isCatCreating }] =
    useCreateCategoryMutation();

  const [createSubCategory, { isLoading: isSubCreating }] =
    useCreateSubCategoryMutation();

  const [deleteCategory] = useDeleteCategoryMutation();

  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  // ---------------- CREATE CATEGORY ----------------
  const handleCategorySubmit = async (e: any) => {
    e.preventDefault();

    if (!catName || !catImage) {
      return toast.error("Please fill all fields");
    }

    const formData = new FormData();

    formData.append("name", catName);
    formData.append("image", catImage);

    try {
      await createCategory(formData).unwrap();

      toast.success("Category Created Successfully");

      setCatName("");
      setCatImage(null);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create category");
    }
  };

  // ---------------- CREATE SUB CATEGORY ----------------
  const handleSubSubmit = async (e: any) => {
    e.preventDefault();

    if (!subName || !selectedCatId) {
      return toast.error("Please select category & sub-category name");
    }

    const formData = new FormData();

    formData.append("name", subName);
    formData.append("category", selectedCatId);

    if (subImage) {
      formData.append("image", subImage);
    }

    try {
      await createSubCategory(formData).unwrap();

      toast.success("Sub-category Added Successfully");

      setSubName("");
      setSelectedCatId("");
      setSubImage(null);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create sub-category");
    }
  };

  // ---------------- DELETE SUB CATEGORY ----------------
  const handleDeleteSubCategory = async (subCategoryId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This sub-category will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, Delete It!",
    });

    if (result.isConfirmed) {
      try {
        await deleteSubCategory(subCategoryId).unwrap();

        Swal.fire({
          title: "Deleted!",
          text: "Sub-category deleted successfully.",
          icon: "success",
        });
      } catch (err: any) {
        Swal.fire({
          title: "Error!",
          text: err?.data?.message || "Delete failed",
          icon: "error",
        });
      }
    }
  };

  // ---------------- DELETE CATEGORY ----------------
  const handleDeleteCategory = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Category?",
      text: "All sub-categories under this category will also be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#2563eb",
      confirmButtonText: "Yes, Delete It!",
    });

    if (result.isConfirmed) {
      try {
        await deleteCategory(id).unwrap();

        Swal.fire({
          title: "Deleted!",
          text: "Category deleted successfully.",
          icon: "success",
        });
      } catch (err: any) {
        Swal.fire({
          title: "Error!",
          text: err?.data?.message || "Failed to delete category",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 lg:p-10 font-sans">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 space-y-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0F172A] flex items-center gap-2">
              <Layers className="text-blue-600" size={24} />
              Category Management
            </h2>

            <p className="text-slate-500 text-sm">
              Organize and structure your product inventory
            </p>
          </div>

          {categories?.map((cat: any) => (
            <div
              key={cat._id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* CATEGORY HEADER */}
              <div className="bg-[#0F172A] p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <GripVertical
                    size={18}
                    className="text-slate-500 cursor-grab"
                  />

                  <img
                    src={`${IMG_URL}${cat.image}`}
                    className="w-8 h-8 rounded bg-white object-contain p-1"
                    alt=""
                  />

                  <span className="font-bold tracking-tight uppercase text-sm">
                    {cat.name}
                  </span>
                </div>

                <button
                  onClick={() => handleDeleteCategory(cat._id)}
                  className="p-1.5 hover:bg-rose-900 rounded text-rose-400 transition-colors cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* SUB CATEGORY TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="py-3 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Sub-Category Name
                      </th>

                      <th className="py-3 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        Status
                      </th>

                      <th className="py-3 px-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-50">
                    {cat.subcategories?.map((sub: any) => (
                      <tr
                        key={sub._id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 flex items-center gap-3">
                          <GripVertical size={14} className="text-slate-300" />

                          <div className="flex items-center gap-2">
                            {sub.image && (
                              <img
                                src={`${IMG_URL}${sub.image}`}
                                className="w-6 h-6 object-contain"
                                alt=""
                              />
                            )}

                            <span className="text-sm font-bold text-slate-700">
                              {sub.name}
                            </span>
                          </div>
                        </td>

                        <td className="py-4 px-6 text-center">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                            Active
                          </span>
                        </td>

                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDeleteSubCategory(sub._id)}
                            className="text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}

                    {cat.subcategories?.length === 0 && (
                      <tr>
                        <td
                          colSpan={3}
                          className="py-6 px-6 text-center text-slate-400 text-xs italic"
                        >
                          No sub-categories linked.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-5 space-y-8">
          {/* ADD CATEGORY */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-md font-bold text-[#0F172A] mb-6 flex items-center gap-2">
              <Layers size={18} className="text-blue-600" />
              Add Primary Category
            </h3>

            <form onSubmit={handleCategorySubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Category Name
                </label>

                <input
                  type="text"
                  placeholder="e.g., Electronics"
                  className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-lg outline-none"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Category Icon
                </label>

                <label className="flex items-center gap-4 p-4 bg-[#F8FAFC] border border-dashed border-slate-300 rounded-lg cursor-pointer">
                  <ImageIcon className="text-slate-400" size={20} />

                  <span className="text-xs text-slate-500 font-bold">
                    {catImage ? catImage.name : "Select File"}
                  </span>

                  <input
                    type="file"
                    hidden
                    onChange={(e: any) => setCatImage(e.target.files[0])}
                  />
                </label>
              </div>

              <button
                disabled={isCatCreating}
                className="w-full bg-[#0F172A] text-white py-3.5 rounded-lg font-bold text-sm cursor-pointer"
              >
                {isCatCreating ? "Creating..." : "Create Primary Category"}
              </button>
            </form>
          </section>

          {/* ADD SUB CATEGORY */}
          <section className="bg-[#EDF2F7] p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-md font-bold text-[#0F172A] mb-6 flex items-center gap-2">
              <Plus size={18} className="text-blue-600" />
              Add Sub-category
            </h3>

            <form onSubmit={handleSubSubmit} className="space-y-5">
              {/* Parent Category */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Parent Category
                </label>

                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg appearance-none outline-none font-medium text-sm cursor-pointer"
                    onChange={(e) => setSelectedCatId(e.target.value)}
                    value={selectedCatId}
                  >
                    <option value="">Select Parent...</option>

                    {categories?.map((cat: any) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    className="absolute right-4 top-3.5 text-slate-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Subcategory Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Sub-category Name
                </label>

                <input
                  type="text"
                  placeholder="e.g., Mobile Phones"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg outline-none font-medium text-sm"
                  value={subName}
                  onChange={(e) => setSubName(e.target.value)}
                />
              </div>

              {/* Image */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Sub Icon (Optional)
                </label>

                <input
                  type="file"
                  className="w-full text-xs text-slate-400 font-bold file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  onChange={(e: any) => setSubImage(e.target.files[0])}
                />
              </div>

              {/* Submit */}
              <button
                disabled={isSubCreating}
                className="w-full bg-[#4A5568] text-white py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all uppercase tracking-tight shadow-md cursor-pointer"
              >
                {isSubCreating ? "Linking..." : "Link Sub-category"}
              </button>
            </form>
          </section>

          {/* TIP BOX */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-blue-500 shadow-sm">
            <div className="flex gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 h-fit">
                <Info size={18} />
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Management Tip
                </h4>

                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  Organize categories properly for better product management and
                  filtering experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
