import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Orders = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-6">Your Order history</h1>
          <p className="text-xl text-gray-600 mb-8">Your have no orders yet</p>
          <Link
            to="/"
            className="bg-[#e74c3c] text-white px-8 py-3 rounded-md hover:bg-[#c0392b] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Orders;
