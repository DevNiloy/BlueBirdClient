import React, { useState, useMemo, useEffect } from "react";
import {
  Package,
  Upload,
  Trash2,
  Plus,
  X,
  FileText,
  Layers,
} from "lucide-react";
import { toast } from "react-hot-toast";

import { useGetCategoriesQuery } from "@/redux/features/admin/category";
import { useCreateProductMutation } from "@/redux/features/admin/products";

interface Variant {
  id: string;
  unit: string;
  price: string;
  stockQuantity: string;
}

const AddProduct = () => {
  const initialState = {
    title: "",
    desc: "",
    category: "",
    subCategory: "",
    brand: "",
    bestSeller: false,
    stockStatus: "available",
    variants: [
      {
        id: crypto.randomUUID(),
        unit: "",
        price: "",
        stockQuantity: "",
      },
    ] as Variant[],
  };

  const [formData, setFormData] = useState(initialState);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // API Hooks
  const { data: categories } = useGetCategoriesQuery();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  // Cleanup previews on unmount
  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  // Filter Subcategories
  const filteredSubCategories = useMemo(() => {
    if (!formData.category || !categories) return [];

    const selectedCat = categories.find(
      (c: any) => c._id === formData.category,
    );

    return selectedCat?.subcategories || [];
  }, [formData.category, categories]);

  // =========================
  // Variant Handlers
  // =========================

  const addVariant = () => {
    setFormData((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          id: crypto.randomUUID(),
          unit: "",
          price: "",
          stockQuantity: "",
        },
      ],
    }));
  };

  const removeVariant = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.filter((variant) => variant.id !== id),
    }));
  };

  const handleVariantChange = (
    id: string,
    field: keyof Omit<Variant, "id">,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      variants: prev.variants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant,
      ),
    }));
  };

  // =========================
  // Image Handlers
  // =========================

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length + images.length > 5) {
      return toast.error("Max 5 images allowed");
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) => [...prev, ...newPreviews]);

    // reset input
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));

    setPreviews((prev) => {
      const updated = [...prev];

      const removedPreview = updated[index];

      if (removedPreview) {
        URL.revokeObjectURL(removedPreview);
      }

      updated.splice(index, 1);

      return updated;
    });
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) {
      return toast.error("Upload at least one image");
    }

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "variants") {
        data.append(key, String(value));
      }
    });

    // remove id before sending
    const cleanedVariants = formData.variants.map(({ id, ...rest }) => rest);

    data.append("variants", JSON.stringify(cleanedVariants));

    images.forEach((file) => {
      data.append("images", file);
    });

    try {
      await createProduct(data).unwrap();

      toast.success("Product published successfully!");

      setFormData(initialState);
      setImages([]);
      setPreviews([]);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 lg:p-10 font-sans">
      {/* Header */}
      <div className="w-full mx-auto mb-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#0F172A] p-2 rounded-lg text-white">
            <Plus size={20} />
          </div>

          <h1 className="text-2xl font-bold text-[#0F172A]">Add New Product</h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">
          {/* General */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <FileText className="text-slate-400" size={18} />

              <h2 className="text-lg font-bold text-slate-700">
                General Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Product Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Product Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.title}
                  placeholder="e.g. Premium Industrial Adhesive"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Brand */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Brand
                </label>

                <input
                  type="text"
                  value={formData.brand}
                  placeholder="e.g. 3M Japan"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      brand: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Category
                </label>

                <select
                  required
                  translate="no"
                  value={formData.category}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 outline-none"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                      subCategory: "",
                    }))
                  }
                >
                  <option value="">Select Category</option>

                  {categories?.map((cat: any) => (
                    <option key={cat._id} value={cat._id}>
                      {String(cat.name)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Sub-category
                </label>

                <select
                  translate="no"
                  value={formData.subCategory}
                  disabled={!formData.category}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 outline-none disabled:opacity-50"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subCategory: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Sub-Category</option>

                  {filteredSubCategories?.map((sub: any) => (
                    <option key={sub._id} value={sub._id}>
                      {String(sub.name || sub.title)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Description
              </label>

              <textarea
                rows={4}
                required
                value={formData.desc}
                placeholder="Detailed technical description..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    desc: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Variants */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="text-slate-400" size={18} />

                <h2 className="text-lg font-bold text-slate-700">
                  Pricing & Variants
                </h2>
              </div>

              <button
                type="button"
                onClick={addVariant}
                className="text-sm font-bold text-blue-600 flex items-center gap-1"
              >
                <Plus size={16} />
                Add Variant
              </button>
            </div>

            <div className="space-y-4">
              {formData.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="flex flex-wrap md:flex-nowrap gap-4 items-end bg-slate-50 p-4 rounded-xl"
                >
                  {/* Unit */}
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">
                      Unit
                    </label>

                    <input
                      type="text"
                      placeholder="500ml"
                      value={variant.unit}
                      className="w-full px-3 py-2 rounded-md border border-slate-200 outline-none bg-white"
                      onChange={(e) =>
                        handleVariantChange(variant.id, "unit", e.target.value)
                      }
                    />
                  </div>

                  {/* Price */}
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">
                      Price
                    </label>

                    <input
                      type="number"
                      placeholder="0.00"
                      value={variant.price}
                      className="w-full px-3 py-2 rounded-md border border-slate-200 outline-none bg-white"
                      onChange={(e) =>
                        handleVariantChange(variant.id, "price", e.target.value)
                      }
                    />
                  </div>

                  {/* Stock */}
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">
                      Stock Qty
                    </label>

                    <input
                      type="number"
                      placeholder="0"
                      value={variant.stockQuantity}
                      className="w-full px-3 py-2 rounded-md border border-slate-200 outline-none bg-white"
                      onChange={(e) =>
                        handleVariantChange(
                          variant.id,
                          "stockQuantity",
                          e.target.value,
                        )
                      }
                    />
                  </div>

                  {/* Remove */}
                  {formData.variants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVariant(variant.id)}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 space-y-8">
          {/* Images */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">
              Product Visuals
            </h3>

            <label className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all mb-4">
              <Upload className="text-slate-400 mb-3" size={24} />

              <p className="text-sm font-bold text-slate-600 text-center">
                Click to upload images
              </p>

              <input
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            <div className="grid grid-cols-3 gap-2">
              {previews.map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-lg overflow-hidden border border-slate-100"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white/80 p-1 rounded-md text-rose-500 shadow-sm"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase">
              Inventory Status
            </h3>

            <div className="flex gap-2">
              {["available", "out of stock"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      stockStatus: status,
                    }))
                  }
                  className={`flex-1 py-2 text-[10px] font-black uppercase rounded-lg border transition-all ${
                    formData.stockStatus === status
                      ? "bg-[#0F172A] text-white border-[#0F172A]"
                      : "bg-white text-slate-400 border-slate-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.bestSeller}
                className="w-4 h-4"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bestSeller: e.target.checked,
                  }))
                }
              />

              <span className="text-xs font-bold text-blue-700 uppercase">
                Mark as Best Seller
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            {isLoading ? (
              "PUBLISHING..."
            ) : (
              <>
                <Package size={18} />
                PUBLISH PRODUCT
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
