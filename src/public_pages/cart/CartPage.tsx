import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Loader2,
  MapPin,
  Phone,
  Hash,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import type { RootState } from "@/redux/store";

import { useGetMeQuery } from "@/redux/features/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "@/redux/features/orderApi";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { data: user } = useGetMeQuery(undefined);
  const [placeOrder, { isLoading: isPlacingOrder }] = usePlaceOrderMutation();

  // Shipping States (Based on Order Model)
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // Totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const total = subtotal; // Grand total is exactly equal to subtotal now

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user)
      return Swal.fire(
        "Login Required",
        "Please login to securely place your order",
        "warning",
      );
    if (
      !shipping.address ||
      !shipping.city ||
      !shipping.postalCode ||
      !shipping.phone
    ) {
      return Swal.fire(
        "Missing Info",
        "Please complete all required shipping fields",
        "info",
      );
    }

    const orderData = {
      orderItems: cartItems.map((item) => ({
        name: item.name,
        qty: item.qty,
        image: item.img,
        price: item.price,
        product: item.id,
        variantId: item.variantId,
        unit: item.unit,
      })),
      shippingAddress: shipping,
      paymentMethod: "COD",
      totalPrice: total,
      userEmail: user.email,
    };

    try {
      // ১. ব্যাকএন্ডে অর্ডার প্লেস করা
      const res = await placeOrder(orderData).unwrap();
      const savedOrder = res.data; // ব্যাকএন্ড থেকে আসা ওর্ডার ডেটা

      // ২. হোয়াটসঅ্যাপ মেসেজের টেক্সট ফরম্যাট করা
      const itemsText = savedOrder.orderItems
        .map(
          (item: any, index: number) =>
            `${index + 1}. ${item.name} (${item.unit}) - Qty: ${item.qty} x ৳${item.price.toLocaleString()}`,
        )
        .join("\n");

      const message =
        `🚨 *New Order Confirmed!* 🚨\n\n` +
        `🆔 *Order ID:* ${savedOrder._id}\n` +
        `📧 *Email:* ${savedOrder.userEmail || "N/A"}\n` +
        `---------------------------------\n` +
        `📦 *Items:*\n${itemsText}\n` +
        `---------------------------------\n` +
        `💰 *Total:* ৳${savedOrder.totalPrice.toLocaleString()}\n\n` +
        `📍 *Shipping Destination:*\n` +
        `🏠 ${savedOrder.shippingAddress.address},\n` +
        `🏙️ ${savedOrder.shippingAddress.city} - ${savedOrder.shippingAddress.postalCode}\n` +
        `📞 Phone: ${savedOrder.shippingAddress.phone}\n\n` +
        `💳 *Method:* ${savedOrder.paymentMethod}`;

      // ৩. এনকোড করা লিঙ্ক তৈরি (আপনার নির্দিষ্ট হোয়াটসঅ্যাপ নাম্বার দিন, যেমন: 88017XXXXXXXX)
      const adminWhatsAppNumber = "8801621120670"; // কান্ট্রি কোডসহ কোনো '+' সাইন ছাড়া নাম্বার
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${encodeURIComponent(message)}`;

      // ৪. ইউজারকে সাকসেস অ্যালার্ট দেখানো
      Swal.fire({
        icon: "success",
        title: "Order Processed Successfully!",
        text: "Thank you for partnering with us. Opening WhatsApp to share order invoice...",
        confirmButtonColor: "#2D5DA1",
      }).then(() => {
        // ৫. স্যান্ডবক্স বা এপিআই ছাড়াই সরাসরি হোয়াটসঅ্যাপে রিডাইরেক্ট
        window.open(whatsappUrl, "_blank");

        dispatch(clearCart());
        navigate("/all_products");
      });
    } catch (err: any) {
      Swal.fire(
        "Error",
        err?.data?.message || "Order processing failed",
        "error",
      );
    }
  };

  return (
    <div className="notranslate md:mx-14 mx-4 py-16 bg-white min-h-[80vh] font-sans">
      <header className="mb-12 text-center md:text-left border-b border-slate-100 pb-6">
        <h1 className="text-4xl font-extrabold text-[#0c2340] mb-2 uppercase tracking-tight">
          Checkout Bag
        </h1>
        <p className="text-[#2D5DA1] font-bold text-xs uppercase tracking-widest">
          {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}{" "}
          Selected
        </p>
      </header>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Left: Cart Items & Shipping Form */}
          <div className="xl:col-span-8 space-y-12">
            {/* 1. Items List */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase text-[#0c2340] tracking-wider border-l-4 border-[#2D5DA1] pl-3 mb-6">
                1. Review Your Items
              </h3>
              <div className="divide-y divide-slate-100 border-b border-slate-100">
                {cartItems.map((item) => (
                  <motion.div
                    // ইউনিক কি হিসেবে প্রোডাক্ট আইডি ও ভেরিয়েন্ট আইডির কম্বিনেশন ব্যবহার
                    key={`${item.id}-${item.variantId}`}
                    layout
                    className="flex flex-wrap md:flex-nowrap items-center gap-6 py-6"
                  >
                    <img
                      src={`${import.meta.env.VITE_API_URL}${item.img}`}
                      className="w-20 h-20 rounded-2xl object-cover bg-slate-50 border border-slate-100"
                      alt={item.name}
                    />
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-extrabold text-[#0c2340] text-lg tracking-tight">
                        {item.name}
                      </h4>

                      {/* ভেরিয়েন্ট সাইজ বা ইউনিট ডিসপ্লে */}
                      <p className="text-xs font-bold text-blue-600 mt-1 uppercase tracking-wider">
                        Variant: {item.unit}
                      </p>

                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-2 py-1">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  variantId: item.variantId,
                                  delta: -1,
                                }),
                              )
                            }
                            className="p-1.5 text-slate-500 hover:text-[#2D5DA1] transition-colors"
                          >
                            <Minus size={12} strokeWidth={2.5} />
                          </button>
                          <span className="px-3 font-extrabold text-xs text-[#0c2340]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  variantId: item.variantId,
                                  delta: 1,
                                }),
                              )
                            }
                            className="p-1.5 text-slate-500 hover:text-[#2D5DA1] transition-colors"
                          >
                            <Plus size={12} strokeWidth={2.5} />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                id: item.id,
                                variantId: item.variantId,
                              }),
                            )
                          }
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right w-full md:w-auto">
                      <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                        Total Amount
                      </p>
                      <p className="font-extrabold text-xl text-[#0c2340] tracking-tight mt-0.5">
                        ৳{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Shipping Address Form */}
            <div className="space-y-6">
              <h3 className="text-xs font-extrabold uppercase text-[#0c2340] tracking-wider border-l-4 border-[#2D5DA1] pl-3">
                2. Shipping Destination
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50/60 p-8 rounded-[2rem] border border-slate-100">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider ml-1">
                    Full Mailing Address
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-3.5 text-slate-400"
                      size={18}
                    />
                    <Input
                      placeholder="Corporate building, Street route, Suite"
                      className="pl-12 h-12 rounded-xl bg-white border-slate-200 focus-visible:ring-[#2D5DA1] shadow-sm text-sm"
                      value={shipping.address}
                      onChange={(e) =>
                        setShipping({ ...shipping, address: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider ml-1">
                    City / State
                  </label>
                  <Input
                    placeholder="e.g. New York, London, Dhaka"
                    className="h-12 rounded-xl bg-white border-slate-200 focus-visible:ring-[#2D5DA1] shadow-sm text-sm"
                    value={shipping.city}
                    onChange={(e) =>
                      setShipping({ ...shipping, city: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider ml-1">
                    Postal / ZIP Code
                  </label>
                  <div className="relative">
                    <Hash
                      className="absolute left-4 top-3.5 text-slate-400"
                      size={18}
                    />
                    <Input
                      placeholder="Zip code reference number"
                      className="pl-12 h-12 rounded-xl bg-white border-slate-200 focus-visible:ring-[#2D5DA1] shadow-sm text-sm"
                      value={shipping.postalCode}
                      onChange={(e) =>
                        setShipping({ ...shipping, postalCode: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider ml-1">
                    Contact Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-3.5 text-slate-400"
                      size={18}
                    />
                    <Input
                      placeholder="Active communications standard line"
                      className="pl-12 h-12 rounded-xl bg-white border-slate-200 focus-visible:ring-[#2D5DA1] shadow-sm text-sm"
                      value={shipping.phone}
                      onChange={(e) =>
                        setShipping({ ...shipping, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary Sticky Card */}
          <div className="xl:col-span-4">
            <div className="bg-[#0c2340] text-white rounded-[2.5rem] p-8 sticky top-10 shadow-xl shadow-slate-900/10 border border-slate-800">
              <h2 className="text-base font-extrabold mb-8 uppercase tracking-widest flex justify-between items-center">
                Order Summary{" "}
                <span className="text-[9px] font-bold bg-[#2D5DA1] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  COD Basis
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-400 text-xs font-bold uppercase tracking-wider pb-4 border-b border-slate-800">
                  <span>Subtotal</span>
                  <span className="text-white font-extrabold">
                    ৳{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-extrabold uppercase tracking-wide text-slate-300">
                    Grand Total
                  </span>
                  <span className="text-3xl font-black text-emerald-400 tracking-tight">
                    ৳{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={isPlacingOrder}
                className="w-full bg-[#2D5DA1] hover:bg-[#204578] text-white rounded-2xl h-16 font-extrabold text-sm uppercase tracking-wider gap-3 transition-all active:scale-98 group border-none shadow-lg shadow-blue-900/20"
              >
                {isPlacingOrder ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Confirm Indent Order{" "}
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </Button>

              {/* Delivery Charge Notice Note */}
              <div className="mt-6 flex items-start gap-3 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mt-1 shrink-0" />
                <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide leading-relaxed">
                  Note: Delivery charge will be added based on your shipping
                  location.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="notranslate text-center py-28 bg-slate-50/50 rounded-[3rem] border border-slate-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 text-slate-300">
            <ShoppingBag size={36} strokeWidth={1.5} />
          </div>
          <p className="text-slate-400 font-extrabold uppercase tracking-[0.25em] text-xs mb-8">
            Your logistics bag is empty
          </p>
          <Button
            variant="outline"
            className="rounded-xl px-8 h-12 font-extrabold uppercase text-[11px] tracking-widest border-slate-200 text-[#0c2340] hover:bg-[#0c2340] hover:text-white hover:border-[#0c2340] transition-all shadow-sm"
            onClick={() => navigate("/")}
          >
            Continue Sourcing
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
