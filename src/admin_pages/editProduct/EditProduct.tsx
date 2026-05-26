import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Package,
  Upload,
  Trash2,
  Image as ImageIcon,
  Save,
  Loader2,
  ArrowLeft,
  Settings,
} from "lucide-react";
import Swal from "sweetalert2";
import { useGetCategoriesQuery } from "@/redux/features/admin/category";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "@/redux/features/admin/products";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Basic Information State
  const [formData, setFormData] = useState<any>({
    title: "",
    desc: "",
    category: "",
    subCategory: "",
    brand: "",
    stockStatus: "available",
    bestSeller: false,
    featured: false,
  });

  // Variants State
  const [variants, setVariants] = useState<any[]>([
    { price: "", discountPrice: "", stockQuantity: "", sku: "" },
  ]);

  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const { data: product, isLoading: isProductLoading } =
    useGetProductDetailsQuery(id as string);
  const { data: categories } = useGetCategoriesQuery();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  // Sync Product Data into States
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        desc: product.desc || "",
        category: product.category?._id || "",
        subCategory: product.subCategory?._id || "",
        // @ts-ignore
        brand: product.brand || "",
        // @ts-ignore
        stockStatus: product.stockStatus || "available",
        bestSeller: product.bestSeller || false,
        // @ts-ignore
        featured: product.featured || false,
      });

      if (product.variants && product.variants.length > 0) {
        setVariants(
          product.variants.map((v: any) => ({
            price: v.price || "",
            discountPrice: v.discountPrice || "",
            stockQuantity: v.stockQuantity || "",
            sku: v.sku || "",
          })),
        );
      }

      setExistingImages(product.images || []);
    }
  }, [product]);

  const handleVariantChange = (index: number, field: string, value: string) => {
    const updatedVariants = [...variants];
    updatedVariants[index] = {
      ...updatedVariants[index],
      [field]: value,
    };
    setVariants(updatedVariants);
  };

  const filteredSubCategories = useMemo(() => {
    if (!formData.category || !categories) return [];
    const selectedCat = categories.find(
      (c: any) => c._id === formData.category,
    );
    return selectedCat ? selectedCat.subcategories : [];
  }, [formData.category, categories]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length + existingImages.length > 5) {
      return Swal.fire({
        icon: "error",
        title: "Limit Exceeded",
        text: "Max 5 images allowed!",
      });
    }
    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const removeExistingImage = (imgUrl: string) => {
    setExistingImages(existingImages.filter((url) => url !== imgUrl));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    // ✅ FormData Append Logic with ObjectId Fix
    Object.entries(formData).forEach(([key, value]) => {
      // যদি subCategory খালি স্ট্রিং হয়, তবে সেটি পাঠাবো না (যাতে BSON Error না আসে)
      if (key === "subCategory" && value === "") return;
      data.append(key, `${value}`);
    });

    data.append("variants", JSON.stringify(variants));
    data.append("existingImages", JSON.stringify(existingImages));

    images.forEach((file) => data.append("images", file));

    try {
      await updateProduct({ id: id as string, formData: data }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Product Updated!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/admin/all-product");
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err?.data?.message || "Something went wrong",
      });
    }
  };

  if (isProductLoading)
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="animate-spin text-[#10B981]" size={40} />
      </div>
    );

  return (
    <div className="p-4 lg:p-10 bg-[#F8FAFC] min-h-screen" translate="no">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white border rounded-lg hover:bg-slate-50 transition-all"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Edit Product</h1>
            <p className="text-slate-500 text-sm">
              Update pricing, variants and metadata.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-6">
            {/* General Info */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b pb-3">
                <Settings size={18} className="text-emerald-500" />
                <h3 className="font-bold text-slate-700">
                  General Information
                </h3>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({ ...formData, desc: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </section>

            {/* Pricing & Variants */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 border-b pb-3 mb-5">
                <Package size={18} className="text-emerald-500" />
                <h3 className="font-bold text-slate-700">
                  Pricing & Inventory
                </h3>
              </div>
              <div className="space-y-4">
                {variants.map((variant, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">
                        Price
                      </label>
                      <input
                        type="number"
                        value={variant.price}
                        onChange={(e) =>
                          handleVariantChange(index, "price", e.target.value)
                        }
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 mt-1 outline-none font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">
                        Discount Price
                      </label>
                      <input
                        type="number"
                        value={variant.discountPrice}
                        onChange={(e) =>
                          handleVariantChange(
                            index,
                            "discountPrice",
                            e.target.value,
                          )
                        }
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 mt-1 outline-none font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">
                        Stock
                      </label>
                      <input
                        type="number"
                        value={variant.stockQuantity}
                        onChange={(e) =>
                          handleVariantChange(
                            index,
                            "stockQuantity",
                            e.target.value,
                          )
                        }
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 mt-1 outline-none font-semibold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 border-b pb-3 mb-5">
                <ImageIcon size={18} className="text-emerald-500" />
                <h3 className="font-bold text-slate-700">Gallery (Max 5)</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {existingImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200"
                  >
                    <img
                      src={`${import.meta.env.VITE_API_URL}${src}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(src)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                {previews.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-xl overflow-hidden border-2 border-emerald-100"
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                ))}
                {existingImages.length + images.length < 5 && (
                  <label className="aspect-square border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50">
                    <Upload className="text-slate-300" size={24} />
                    <input
                      type="file"
                      multiple
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">
                  Category
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                      subCategory: "",
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-semibold"
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat: any) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name || cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">
                  Sub-Category
                </label>
                <select
                  value={formData.subCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, subCategory: e.target.value })
                  }
                  disabled={!formData.category}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-semibold disabled:opacity-50"
                >
                  <option value="">Select Sub-Category</option>
                  {filteredSubCategories?.map((sub: any) => (
                    <option key={sub._id} value={sub._id}>
                      {sub.name || sub.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {["available", "out of stock"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, stockStatus: status })
                      }
                      className={`py-2 rounded-lg text-[10px] font-bold uppercase ${formData.stockStatus === status ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {["bestSeller", "featured"].map((key) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData[key]}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.checked })
                      }
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span className="text-xs font-bold text-slate-600 uppercase">
                      {key}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <button
              type="submit"
              disabled={isUpdating}
              className="w-full bg-[#10B981] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#059669] transition-all flex items-center justify-center gap-2 disabled:bg-slate-300"
            >
              {isUpdating ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Save size={20} />
              )}
              {isUpdating ? "SAVING..." : "UPDATE PRODUCT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
