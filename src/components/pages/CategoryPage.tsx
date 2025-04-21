import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../hooks/useProducts";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductCard from "../ui/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { data, isLoading, error } = useProductsByCategory(categoryName || "");
  const [formattedName, setFormattedName] = useState("");

  useEffect(() => {
    if (categoryName) {
      setFormattedName(
        categoryName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [categoryName]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{formattedName}</h1>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e74c3c] mx-auto mb-4"></div>
            <p className="text-xl">Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-xl text-red-500">
              Error loading products. Please try again later.
            </p>
          </div>
        ) : data && data.products && data.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
