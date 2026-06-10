// // import { ShoppingCart, Heart, Star } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const ProductCard = ({ product }: { product: any }) => {
// //   // Backend image path jodi absolute na hoy, tobe base URL add korte hote pare
// //   const imageUrl = product.image?.startsWith("http")
// //     ? product.image
// //     : `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}${product.image}`;

// //   console.log(product.slug);

// //   return (
// //     <Link to={`/product/${product?.slug || product?._id}`}>
// //       <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-50 transition-all hover:shadow-2xl h-full flex flex-col">
// //         <div className="relative aspect-square overflow-hidden bg-gray-50">
// //           {product.stock === "out-of-stock" && (
// //             <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase">
// //               Out of Stock
// //             </span>
// //           )}
// //           <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm z-10 transition-colors">
// //             <Heart size={18} />
// //           </button>
// //           <img
// //             src={imageUrl}
// //             alt={product.name}
// //             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //           />
// //         </div>

// //         <div className="p-6 flex flex-col flex-1">
// //           {/* 🎯 FIXED: Object render na kore string (name) render kora hoyeche */}
// //           <p className="text-[#1F5E3B] text-[10px] font-black tracking-widest uppercase mb-1 opacity-70">
// //             {product.category?.name || "General"}
// //           </p>

// //           <h3 className="font-bold text-[#1A2E1A] text-md mb-2 line-clamp-2 h-12">
// //             {product.name}
// //           </h3>

// //           <div className="flex items-center gap-1 mb-4 text-[#FACC15]">
// //             <Star size={12} fill="currentColor" />
// //             <span className="text-[10px] font-bold text-gray-800">
// //               {product.ratings?.average || 0}
// //             </span>
// //             <span className="text-[10px] text-gray-400 font-medium">
// //               ({product.ratings?.count || 0})
// //             </span>
// //           </div>

// //           <div className="flex justify-between items-center mt-auto">
// //             <div>
// //               <p className="text-xl font-black text-[#1A2E1A]">
// //                 ¥{product.price}
// //               </p>
// //               {product.discountPrice && (
// //                 <p className="text-xs text-gray-400 line-through">
// //                   ¥{product.discountPrice}
// //                 </p>
// //               )}
// //             </div>
// //             <button className="bg-[#1F5E3B] text-white p-3 rounded-2xl hover:bg-[#16432a] transition-all shadow-lg">
// //               <ShoppingCart size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // };

// // export default ProductCard;
// import { ShoppingCart, Zap, FileText } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const ProductCard = ({ product }: { product: any }) => {
//   const navigate = useNavigate();

//   // Backend image path logic
//   const imageUrl = product.image?.startsWith("http")
//     ? product.image
//     : `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5001"}${product.image}`;

//   // প্রথম ভেরিয়েন্টের ডাটা (Price & Stock)
//   const defaultVariant = product.variants?.[0] || {};

//   // ডাইনামিক স্টক চেক
//   const isOutOfStock =
//     product.stockStatus === "out of stock" || defaultVariant.stockQuantity <= 0;

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     // এখানে আপনার কার্ট লজিক কল করুন
//     console.log("Added to cart:", product.name);
//   };

//   const handleBuyNow = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     // কার্টে অ্যাড করে সরাসরি চেকআউট/কার্ট পেজে পাঠানো
//     console.log("Buying now:", product.name);
//     navigate("/cart"); // অথবা /checkout
//   };

//   return (
//     <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md h-full flex flex-col">
//       <Link
//         to={`/product/${product?.slug || product?._id}`}
//         className="flex-1 flex flex-col"
//       >
//         {/* Product Image & Badges */}
//         <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
//           {/* Dynamic Stock Status Badge */}
//           <span
//             className={`absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded z-10 uppercase tracking-tighter text-white ${
//               isOutOfStock ? "bg-red-600" : "bg-[#1A2E1A]"
//             }`}
//           >
//             {isOutOfStock ? "Out of Stock" : "In Stock"}
//           </span>

//           {/* Featured/BestSeller Badge */}
//           {(product.featured || product.bestSeller) && (
//             <span className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded z-10 uppercase">
//               {product.featured ? "Featured" : "Top Seller"}
//             </span>
//           )}

//           <img
//             src={imageUrl}
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="p-4 flex flex-col flex-1">
//           <div className="flex justify-between items-start mb-1">
//             <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
//               {product.category?.name || "Chemicals"}
//             </p>
//             {product.brand && (
//               <p className="text-slate-400 text-[10px] font-bold uppercase">
//                 {product.brand}
//               </p>
//             )}
//           </div>

//           <h3 className="font-bold text-slate-800 text-base mb-1 line-clamp-1 group-hover:text-[#10B981] transition-colors">
//             {product.name}
//           </h3>

//           <p className="text-slate-500 text-xs line-clamp-2 mb-3 leading-relaxed h-8">
//             {product.desc ||
//               "High-purity industrial grade solution for professional applications."}
//           </p>

//           <div className="flex items-baseline gap-1 mb-4">
//             <span className="text-lg font-black text-slate-900">
//               ${defaultVariant.price || product.price || "0.00"}
//             </span>
//             <span className="text-[10px] font-bold text-slate-400 uppercase">
//               / {defaultVariant.sku || "Unit"}
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* Action Buttons Section */}
//       <div className="p-4 pt-0 mt-auto border-t border-slate-50">
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <button
//             onClick={handleAddToCart}
//             disabled={isOutOfStock}
//             className="flex items-center justify-center gap-1.5 border border-[#10B981] text-[#10B981] py-2 rounded-lg font-bold text-[11px] hover:bg-emerald-50 transition-all disabled:opacity-50 disabled:border-slate-300 disabled:text-slate-400"
//           >
//             <ShoppingCart size={14} />
//             ADD TO CART
//           </button>

//           <button
//             onClick={handleBuyNow}
//             disabled={isOutOfStock}
//             className="flex items-center justify-center gap-1.5 bg-[#10B981] text-white py-2 rounded-lg font-bold text-[11px] hover:bg-[#059669] transition-all shadow-sm disabled:bg-slate-300"
//           >
//             <Zap size={14} fill="currentColor" />
//             BUY NOW
//           </button>
//         </div>

//         {/* Quote Link (Optional - small link for B2B feel) */}
//         <button className="w-full mt-2 text-center text-[10px] font-bold text-slate-400 hover:text-[#10B981] flex items-center justify-center gap-1">
//           <FileText size={12} /> GET A FORMAL QUOTE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { ShoppingCart, Zap, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // image fix
  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5001"}${
        product.image
      }`;

  // default variant
  const defaultVariant = product.variants?.[0];

  // stock check
  const isOutOfStock =
    product.stockStatus === "out of stock" ||
    (defaultVariant?.stockQuantity ?? 0) <= 0;

  // shared cart item builder
  const buildCartItem = () => {
    if (!defaultVariant) return null;

    return {
      id: product._id,
      variantId: defaultVariant._id,
      name: product.name,
      unit: defaultVariant.unit || "Unit",
      price: defaultVariant.price || product.price || 0,
      qty: 1,
      img: product.image,
      slug: product.slug,
    };
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item = buildCartItem();
    if (!item) return;

    dispatch(addToCart(item));
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item = buildCartItem();
    if (!item) return;

    dispatch(addToCart(item));
    navigate("/cart"); // or "/checkout"
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md h-full flex flex-col">
      <Link
        to={`/product/${product?.slug || product?._id}`}
        className="flex-1 flex flex-col"
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
          <span
            className={`absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded z-10 uppercase text-white ${
              isOutOfStock ? "bg-red-600" : "bg-[#1A2E1A]"
            }`}
          >
            {isOutOfStock ? "Out of Stock" : "In Stock"}
          </span>

          {(product.featured || product.bestSeller) && (
            <span className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded z-10 uppercase">
              {product.featured ? "Featured" : "Top Seller"}
            </span>
          )}

          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* INFO */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1">
            <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
              {product.category?.name || "Category"}
            </p>

            {product.brand && (
              <p className="text-slate-400 text-[10px] font-bold uppercase">
                {product.brand}
              </p>
            )}
          </div>

          <h3 className="font-bold text-slate-800 text-base mb-1 line-clamp-1 group-hover:text-[#10B981]">
            {product.name}
          </h3>

          <p className="text-slate-500 text-xs line-clamp-2 mb-3 h-8">
            {product.desc ||
              "High quality product for professional use and industrial applications."}
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black text-slate-900">
              ${defaultVariant?.price || product.price || 0}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              / {defaultVariant?.unit || "Unit"}
            </span>
          </div>
        </div>
      </Link>

      {/* ACTIONS */}
      <div className="p-4 pt-0 mt-auto border-t border-slate-50">
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="flex items-center justify-center gap-1.5 border border-[#10B981] text-[#10B981] py-2 rounded-lg font-bold text-[11px] hover:bg-emerald-50 disabled:opacity-50"
          >
            <ShoppingCart size={14} />
            ADD TO CART
          </button>

          <button
            onClick={handleBuyNow}
            disabled={isOutOfStock}
            className="flex items-center justify-center gap-1.5 bg-[#10B981] text-white py-2 rounded-lg font-bold text-[11px] hover:bg-[#059669] disabled:bg-slate-300"
          >
            <Zap size={14} />
            BUY NOW
          </button>
        </div>

        <button className="w-full mt-2 text-center text-[10px] font-bold text-slate-400 hover:text-[#10B981] flex items-center justify-center gap-1">
          <FileText size={12} /> GET A FORMAL QUOTE
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
