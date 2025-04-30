import { createContext, useContext } from "react";

export type WishlistItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  getWishlistCount: () => number;
  clearWishlist: () => void;
};

export const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  getWishlistCount: () => 0,
  clearWishlist: () => {},
});

export const useWishlist = () => useContext(WishlistContext);
