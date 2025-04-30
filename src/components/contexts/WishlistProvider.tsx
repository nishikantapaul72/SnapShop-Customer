import { useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import { WishlistContext, WishlistItem } from "./WishlistContext";

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: WishlistItem) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        toast.success(`${product.title} added to your wishlist.`);
        return [
          ...prevWishlist,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          },
        ];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prevWishlist) => {
      const item = prevWishlist.find((item) => item.id === productId);
      const updatedWishlist = prevWishlist.filter(
        (item) => item.id !== productId
      );

      if (item) {
        toast.info(`${item.title} removed from your wishlist.`);
      }

      return updatedWishlist;
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.warn("Wishlist cleared: All items have been removed.");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlistCount,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}; 