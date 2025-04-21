import { Search, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

interface RightNavButtonsProps {
  handleSearch: (e: React.FormEvent) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const RightNavButtons = ({ handleSearch, searchQuery, setSearchQuery }: RightNavButtonsProps) => {
  const { getCartItemCount } = useCart();
  const { getWishlistCount } = useWishlist();

  return (
    <div className="flex items-center gap-4">
      <form onSubmit={handleSearch} className="relative hidden md:block">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="border rounded-md pl-4 pr-10 py-2 w-64"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#e74c3c]"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      <Link to="/wishlist" className="relative group">
        <Heart className="w-6 h-6 group-hover:text-[#e74c3c] transition-colors" />
        {getWishlistCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#e74c3c] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {getWishlistCount()}
          </span>
        )}
      </Link>

      <Link to="/cart" className="relative group">
        <ShoppingCart className="w-6 h-6 group-hover:text-[#e74c3c] transition-colors" />
        {getCartItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#e74c3c] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {getCartItemCount()}
          </span>
        )}
      </Link>
    </div>
  );
};

export default RightNavButtons;
