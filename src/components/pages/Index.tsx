import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Navbar from "../Navbar";
import CategorySidebar from "../ui/CategorySidebar";
import HeroSlider from "../ui/HeroSlider";
import Footer from "../Footer";
import ProductsCarousel from "../ProductsCarousel";
import CategoryGrid from "../CategoryGrid";
import FeaturedBanner from "../FeaturedBanner";
import FeaturedProducts from "../FeaturedProducts";
import Services from "../Services";

const Index = () => {
  const { data: productsData, isLoading, error } = useProducts();
  const { data: discountedData } = useProducts({
    sortBy: "discountPercentage",
    order: "desc",
    limit: 10,
  });

  const { data: topRatedData } = useProducts({
    sortBy: "rating",
    order: "desc",
    limit: 10,
  });

  const [flashSaleEndDate] = useState(() => {
    // Set the flash sale to end exactly 3 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    return endDate;
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [error]);

  const flashSaleProducts = discountedData?.products || [];
  const topRatedProducts = topRatedData?.products || [];
  const allProducts = productsData?.products?.slice(0, 10) || [];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Categories sidebar with vertical divider */}
          <div className="hidden md:block border-r border-gray-500 pr-4 py-4">
            <CategorySidebar />
          </div>

          {/* Hero Slider */}
          <div className="md:col-span-3 py-5">
            <HeroSlider />
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e74c3c] mx-auto mb-4"></div>
            <p className="text-2xl">Loading products...</p>
          </div>
        ) : (
          <>
            {/* Flash Sales Section */}
            <ProductsCarousel
              title="Flash Sales"
              subtitle="Today's"
              products={flashSaleProducts}
              viewAllLink="/flash-sales"
              showTimer={true}
              flashSaleEndDate={flashSaleEndDate}
            />

            {/* Category Grid */}
            <CategoryGrid />

            {/* Top Rated Products */}
            <ProductsCarousel
              title="Top Rated Products"
              subtitle="This Month"
              products={topRatedProducts}
              viewAllLink="/top-rated"
            />

            <FeaturedBanner />

            {/* Explore Our Products */}
            <ProductsCarousel
              title="Our Products"
              subtitle="Explore Our Products"
              products={allProducts}
              viewAllLink="/products"
            />
            <FeaturedProducts />

            <Services />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
