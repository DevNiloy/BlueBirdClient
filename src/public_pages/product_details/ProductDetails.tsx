import { useState, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Loader2,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Swal from "sweetalert2";

// API Hooks
import {
  useCreateReviewMutation,
  useGetProductBySlugQuery,
} from "@/redux/features/admin/products";
import { useGetMeQuery } from "@/redux/features/authApi";

const IMG_URL = import.meta.env.VITE_API_URL;

const ProductDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  // --- States ---
  const [quantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVarIndex, setSelectedVarIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // --- Data Fetching ---
  const { data: user } = useGetMeQuery(undefined);
  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useGetProductBySlugQuery(slug as string);
  const [createReview, { isLoading: isReviewSubmitting }] =
    useCreateReviewMutation();

  const isAdmin = user?.role === "ADMIN";

  // --- Memoized Values ---
  const images = useMemo(() => {
    return product?.images?.map((img: string) => `${IMG_URL}${img}`) || [];
  }, [product?.images]);

  const currentVariant = useMemo(() => {
    return product?.variants?.[selectedVarIndex] || null;
  }, [product?.variants, selectedVarIndex]);

  // --- Handlers ---
  // ProductDetails.tsx এর ভেতরের handleAddToCart ফাংশনটি এভাবে রিপ্লেস করুন:

  const handleAddToCart = useCallback(() => {
    if (!currentVariant || !product) return;

    dispatch(
      addToCart({
        id: product._id,
        // @ts-ignore
        variantId: currentVariant._id, // ভেরিয়েন্টের অবজেক্ট আইডি
        name: product.title,
        unit: currentVariant.unit, // ভেরিয়েন্টের ইউনিট (যেমন: 500ml)
        price: currentVariant.price, // ভেরিয়েন্টের স্পেসিফিক প্রাইস
        qty: quantity, // আপনার লোকাল স্টেটের কারেন্ট কোয়ান্টিটি
        img: images[0],
        slug: product.slug,
      }),
    );

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `Item (${currentVariant.unit}) added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  }, [currentVariant, product, quantity, images, dispatch]);

  // const handleReviewSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!comment) return Swal.fire("Error", "Please write a comment", "error");

  //   try {
  //     await createReview({ slug, rating, comment }).unwrap();
  //     Swal.fire("Success", "Review submitted successfully", "success");
  //     setComment("");
  //     refetch();
  //   } catch (err: any) {
  //     Swal.fire(
  //       "Error",
  //       err.data?.message || "Failed to submit review",
  //       "error",
  //     );
  //   }
  // };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment) return Swal.fire("Error", "Please write a comment", "error");
    if (!product?._id)
      return Swal.fire("Error", "Product identifier missing", "error");

    try {
      // slug-এর পরিবর্তে product._id পাস করুন
      await createReview({
        productId: product._id,
        rating,
        comment,
      }).unwrap();

      Swal.fire("Success", "Review submitted successfully", "success");
      setComment("");
      refetch();
    } catch (err: any) {
      Swal.fire(
        "Error",
        err.data?.message || "Failed to submit review",
        "error",
      );
    }
  };

  if (isLoading)
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white space-y-4">
        <Loader2 className="animate-spin text-slate-900" size={40} />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse text-slate-400">
          Loading Technical Specs
        </span>
      </div>
    );

  if (isError || !product)
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-black text-slate-200 uppercase italic tracking-tighter">
          Product Not Found
        </h2>
      </div>
    );

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[selectedImage]}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-3 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-black transition-colors">
            Products
          </Link>
          <ChevronRight size={10} />
          <span className="text-slate-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* --- LEFT: GALLERY --- */}
          <div className="lg:col-span-7">
            <div className="sticky top-10 space-y-6">
              <div
                className="aspect-square bg-slate-50 overflow-hidden cursor-zoom-in border border-slate-100 rounded-sm relative group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={images[selectedImage]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`min-w-[100px] h-[100px] border-2 transition-all p-1 ${i === selectedImage ? "border-slate-900" : "border-transparent opacity-40 hover:opacity-100"}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="lg:col-span-5">
            <div className="mb-8 space-y-3">
              <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
                CAS NO:
                {product ? "Technical Grade" : ""}
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                {product.title}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={
                        s <= (product.ratings?.average || 0)
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        s <= (product.ratings?.average || 0)
                          ? ""
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                  ({product.ratings?.count || 0} Reviews)
                </span>
              </div>
            </div>

            {/* Responsive Description Section */}
            <div className="space-y-4 mb-10 overflow-hidden">
              <h4 className="font-bold text-[#1A2E1A] text-sm uppercase tracking-widest">
                Description
              </h4>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-gray-500 text-sm leading-relaxed break-words whitespace-normal font-sans">
                  {product?.desc ||
                    "No description available for this product."}
                </p>
              </div>
            </div>

            {/* Variant Selector */}
            <div className="mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">
                Select Packaging
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.variants?.map((v: any, idx: number) => (
                  <button
                    key={v._id}
                    onClick={() => setSelectedVarIndex(idx)}
                    className={`flex flex-col p-5 border-2 transition-all text-left group ${selectedVarIndex === idx ? "border-slate-900 bg-slate-900" : "border-slate-100 hover:border-slate-200 bg-white"}`}
                  >
                    <span
                      className={`text-sm font-black uppercase tracking-tight ${selectedVarIndex === idx ? "text-white" : "text-slate-900"}`}
                    >
                      {v.unit}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase ${selectedVarIndex === idx ? "text-slate-400" : "text-slate-300"}`}
                    >
                      {v.stockQuantity > 0
                        ? `${v.stockQuantity} in stock`
                        : "Out of stock"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="mb-10">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-black tracking-tighter italic text-slate-950">
                  ৳{currentVariant?.price?.toLocaleString() || "0"}
                </span>
                {currentVariant && currentVariant?.discountPrice > 0 && (
                  <span className="text-slate-300 line-through text-xl font-bold italic">
                    ৳{currentVariant?.discountPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={
                  isAdmin || currentVariant?.stockStatus !== "available"
                }
                className="w-full h-16 bg-slate-950 hover:bg-black text-white rounded-none font-black text-xs uppercase tracking-[0.2em] transition-transform active:scale-95 gap-3"
              >
                <ShoppingCart size={18} /> Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* --- REVIEWS & RATINGS SECTION --- */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-10 flex items-center gap-3">
                Customer Reviews{" "}
                <Badge variant="outline" className="rounded-full">
                  {product.reviews?.length || 0}
                </Badge>
              </h3>
              <div className="space-y-10">
                {product.reviews?.length > 0 ? (
                  product.reviews.map((rev: any, i: number) => (
                    <div key={i} className="border-b border-slate-50 pb-8">
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="font-black text-sm uppercase tracking-tight">
                            {rev.userName || "Verified Buyer"}
                          </p>
                          <div className="flex text-yellow-400 mt-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                size={12}
                                fill={s <= rev.rating ? "currentColor" : "none"}
                                className={
                                  s <= rev.rating ? "" : "text-slate-200"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase">
                          {new Date(rev.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-slate-50 p-10 text-center rounded-sm">
                    <MessageSquare
                      className="mx-auto text-slate-200 mb-4"
                      size={40}
                    />
                    <p className="text-slate-400 text-xs font-black uppercase">
                      No reviews yet.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-10 bg-slate-50 p-8 rounded-sm">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6">
                  Write a Review
                </h3>
                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                      Your Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setRating(num)}
                          className={`transition-colors ${num <= rating ? "text-yellow-400" : "text-slate-200"}`}
                        >
                          <Star
                            size={24}
                            fill={num <= rating ? "currentColor" : "none"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                      Your Comment
                    </label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your experience..."
                      className="min-h-[120px] rounded-none border-slate-200 bg-white"
                    />
                  </div>
                  <Button
                    disabled={isReviewSubmitting || isAdmin}
                    className="w-full bg-slate-900 hover:bg-black text-white font-black uppercase text-[10px] tracking-widest h-12 rounded-none"
                  >
                    {isReviewSubmitting ? "Submitting..." : "Post Review"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
