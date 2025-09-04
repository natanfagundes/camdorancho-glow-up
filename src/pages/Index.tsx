import { HeroSection } from "@/components/HeroSection";
import { CamerasGrid } from "@/components/CamerasGrid";
import { VipPlans } from "@/components/VipPlans";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CamerasGrid />
      <VipPlans />
      <Footer />
    </div>
  );
};

export default Index;