import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface SidebarFilterProps {
  categories: Array<{ id: string | number; name: string }>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const SidebarFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: SidebarFilterProps) => {
  return (
    <div className="space-y-10">
      {/* Category List */}
      <div>
        <h3 className="font-bold text-[#1E293B] mb-4 text-sm uppercase tracking-wider">
          Categories
        </h3>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory("")}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === ""
                ? "bg-[#455F87] text-white shadow-md" // Active Category
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Categories
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id.toString())}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat.id.toString()
                  ? "bg-[#455F87] text-white shadow-md" // Active Category
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Slider Section */}
      <div className="bg-[#F8FAFC] p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <h3 className="font-bold text-[#1E293B] mb-6">Price Range</h3>
        <Slider
          value={priceRange}
          min={0}
          max={15000}
          step={100}
          onValueChange={(val) => setPriceRange(val as [number, number])}
          // UI Slider এর ভেতরের কালার ওভাররাইড (যদি স্লাইডার ডিফল্ট গ্রিন থাকে)
          className="mb-6 [&_[role=slider]]:bg-[#455F87] [&_[role=slider]]:border-[#455F87] [&_.relative]:bg-[#455F87]/20"
        />
        <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
          <span>¥{priceRange[0]}</span> <span>¥{priceRange[1]}</span>
        </div>
        <Button className="w-full bg-[#455F87] hover:bg-[#364b6b] text-white rounded-xl font-bold h-12 mt-6 transition-all shadow-sm">
          Apply Filter
        </Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
