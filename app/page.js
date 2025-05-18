import HeroSection from "@/components/Banner";
import CompanyDetailsSection from "@/components/CompanyDetails";
import { OwnerDetailsSection } from "@/components/OwnerDetails";
import { VisionGoalsSection } from "@/components/VisionAndGoals";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-white to-green-50">
      <HeroSection />
      <CompanyDetailsSection />
      <VisionGoalsSection />
      <OwnerDetailsSection />
    </div>
  );
};

export default HomePage;
