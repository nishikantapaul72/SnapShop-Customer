import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/layout/Footer";
import FlashSales from "../components/home/FlashSales";
import CategorySection from "../components/home/CategorySection";
import TopRatedProducts from "../components/home/TopRatedProducts";
import PromoBanner from "../components/home/PromoBanner";
import ProductsSection from "../components/home/ProductsSection";
import NewArrivals from "../components/home/NewArrivals";
import FeaturesSection from "../components/home/FeaturesSection";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <main className="z-10 flex w-full max-w-[1305px] mx-auto flex-col px-4 max-md:max-w-full">
        <HeroSection />
        <FlashSales />
        <div className="border w-[1170px] shrink-0 max-w-full h-px mt-[60px] border-black border-solid max-md:mt-10" />
        <CategorySection />
        <div className="border w-[1170px] shrink-0 max-w-full h-px mt-[70px] border-black border-solid max-md:mt-10" />
        <TopRatedProducts />
        <PromoBanner />
        <ProductsSection />
        <NewArrivals />
        <FeaturesSection />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/6faf58fa75bba98bf3dc438ecc0325f23b3057e5?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[46px] mr-[89px] mt-[62px] max-md:mr-2.5 max-md:mt-10"
          alt="Scroll to top"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
