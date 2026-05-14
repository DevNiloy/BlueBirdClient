import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination, PaginationContent } from "@/components/ui/pagination";
import SidebarFilter from "./components/SidebarFilter";
import ProductCard from "@/components/shared/ProductCard";
import { Loader2, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Redux Hooks
import { useGetCategoriesQuery } from "@/redux/features/admin/category";
import { useGetProductsQuery } from "@/redux/features/admin/products";

interface IProductResponse {
  success: boolean;
  data: any[];
  meta: {
    totalCount: number;
    totalPages: number;
    currentPage: string | number;
    limit: string | number;
  };
}

const AllProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL parameters
  const subCategory = searchParams.get("subCategory") || "";
  const category = searchParams.get("category") || "";
  const keyword = searchParams.get("keyword") || "";
  const page = Number(searchParams.get("page")) || 1;

  // Local states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState("newest");

  const { data: categoriesData } = useGetCategoriesQuery(undefined);

  const { data: apiResponse, isLoading: isProductsLoading } =
    useGetProductsQuery({
      category,
      subCategory,
      keyword,
      page,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sort:
        sortBy === "low"
          ? "priceLow"
          : sortBy === "high"
            ? "priceHigh"
            : "newest",
      limit: 12,
    }) as { data: IProductResponse | undefined; isLoading: boolean };

  const products = apiResponse?.data || [];
  const meta = apiResponse?.meta || { totalCount: 0, totalPages: 1 };

  const categories =
    categoriesData?.map((cat: any) => ({
      id: cat._id,
      name: cat.name,
    })) || [];

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set("page", newPage.toString());
      return prev;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans" translate="no">
      <div className="max-w-[1440px] mx-auto md:px-10 px-4 py-12">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1E293B] tracking-tight">
              {keyword ? `Search Results for "${keyword}"` : "Product Catalog"}
            </h1>
            <p className="text-slate-500 mt-1 text-sm font-medium">
              Showing {products.length} of {meta.totalCount} industrial
              solutions
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Sort by:
            </span>
            <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
              <SelectTrigger className="w-[200px] bg-white border-slate-200 shadow-sm rounded-lg font-bold text-[#455F87] focus:ring-[#455F87]">
                <SelectValue placeholder="Newest Arrivals" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-slate-200">
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="low">Price: Low to High</SelectItem>
                <SelectItem value="high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
              <SidebarFilter
                categories={categories}
                selectedCategory={category || subCategory}
                setSelectedCategory={(id) => {
                  setSearchParams({ category: id, page: "1" });
                }}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                // নোট: SidebarFilter এর ভেতরেও `#455F87` ব্যবহার করতে হবে
              />

              {/* Quality Box */}
              <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#455F87]"></div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="text-[#455F87]" size={16} />
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
                    Quality Assured
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  ISO Certified standards applied to all industrial grade
                  batches.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="lg:col-span-9">
            {isProductsLoading ? (
              <div className="flex flex-col justify-center items-center py-40 gap-4">
                <Loader2 className="animate-spin text-[#455F87]" size={48} />
                <p className="text-slate-400 font-bold animate-pulse">
                  Syncing Database...
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.length > 0 ? (
                    products.map((product: any) => (
                      <ProductCard
                        key={product._id}
                        product={{
                          ...product,
                          name: product.title,
                          image: product.images?.[0] || "",
                        }}
                      />
                    ))
                  ) : (
                    <div className="col-span-full py-32 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-center">
                      <div className="max-w-xs mx-auto">
                        <p className="text-slate-400 font-bold text-lg">
                          No Results Found
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6 rounded-xl font-bold border-[#455F87] text-[#455F87] hover:bg-slate-50"
                          onClick={() => setSearchParams({})}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {meta.totalPages > 1 && (
                  <div className="mt-16 flex justify-center">
                    <Pagination>
                      <PaginationContent className="gap-2">
                        <Button
                          variant="ghost"
                          disabled={page <= 1}
                          onClick={() => handlePageChange(page - 1)}
                          className="rounded-xl bg-white shadow-sm border border-slate-200 font-bold text-slate-600 hover:text-[#455F87]"
                        >
                          <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                        </Button>

                        <div className="flex items-center gap-1 mx-2">
                          {[...Array(meta.totalPages)].map((_, i) => (
                            <Button
                              key={i}
                              onClick={() => handlePageChange(i + 1)}
                              className={`w-10 h-10 rounded-xl font-bold transition-all ${
                                page === i + 1
                                  ? "bg-[#455F87] text-white shadow-md hover:bg-[#364b6b]"
                                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                              }`}
                            >
                              {i + 1}
                            </Button>
                          ))}
                        </div>

                        <Button
                          variant="ghost"
                          disabled={page >= meta.totalPages}
                          onClick={() => handlePageChange(page + 1)}
                          className="rounded-xl bg-white shadow-sm border border-slate-200 font-bold text-slate-600 hover:text-[#455F87]"
                        >
                          Next <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
