import HeroSection from "./components/HeroSection";

import { useGetMeQuery } from "@/redux/features/authApi";
import CategoriesGrid from "./components/CategoriesGrid";
import WhyChooseUs from "./components/WhyChooseUs";
// import OurTeam from "./components/OurTeam";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  const { data } = useGetMeQuery(undefined);
  console.log(data);

  return (
    <div>
      <HeroSection />
      <CategoriesGrid />
      <WhyChooseUs />
      <WhoWeAre />
    </div>
  );
}
