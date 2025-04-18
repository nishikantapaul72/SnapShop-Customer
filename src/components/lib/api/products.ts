export interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchProducts = async (params?: {
  skip?: number;
  limit?: number;
}): Promise<ProductsResponse> => {
  const { skip = 0, limit = 30 } = params || {};
  const response = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const fetchProduct = async (id: number): Promise<DummyProduct> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

// Adapter to convert DummyProduct to our app's Product type
export const adaptProduct = (dummyProduct: DummyProduct) => {
  return {
    id: dummyProduct.id.toString(),
    name: dummyProduct.title,
    price: dummyProduct.price,
    originalPrice:
      dummyProduct.price * (1 + dummyProduct.discountPercentage / 100),
    discountPercentage: Math.round(dummyProduct.discountPercentage),
    image: dummyProduct.thumbnail,
    category: dummyProduct.category,
    rating: dummyProduct.rating,
    isFlashSale: dummyProduct.discountPercentage > 15,
    isTopRated: dummyProduct.rating >= 4.5,
    isNew: dummyProduct.id > 95, // Assuming products with IDs > 95 are new
  };
};
