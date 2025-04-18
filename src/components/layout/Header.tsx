import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="justify-center bg-black flex w-full flex-col overflow-hidden text-sm text-neutral-50 px-[70px] py-3 max-md:max-w-full max-md:px-5">
        <div className="flex flex-wrap justify-between max-md:max-w-full">
          <div className="flex min-w-60 items-center gap-2 flex-wrap max-md:max-w-full">
            <div className="font-normal self-stretch w-[474px] my-auto max-md:max-w-full">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="text-center font-semibold leading-6 underline decoration-solid decoration-auto underline-offset-auto self-stretch my-auto">
              ShopNow
            </div>
          </div>
          <div className="flex items-center gap-[5px] font-normal whitespace-nowrap justify-center">
            <div className="self-stretch my-auto">English</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/ec304e356a963c73d625f007156bedce4a8074eb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Language selector"
            />
          </div>
        </div>
      </div>
      <div className="self-center flex items-center justify-between w-full px-[70px] gap-[40px] flex-wrap mt-10 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 gap-[40px_190px] text-black flex-wrap my-auto max-md:max-w-full">
          <div className="text-2xl font-bold whitespace-nowrap tracking-[0.72px] leading-none w-[118px] max-md:pr-[-8px]">
            <Link to="/" className="text-inherit">
              SnapShop
            </Link>
          </div>
          {/* Hide on mobile when visible is true, otherwise show on larger screens */}
          <div className="hidden sm:flex min-w-60 gap-[40px_48px] text-base font-normal text-center">
            <Link to="/home" className="whitespace-nowrap w-[50px]">
              Home
            </Link>
            <Link to="/contact" className="whitespace-nowrap w-[66px]">
              Contact
            </Link>
            <Link to="/about" className="whitespace-nowrap w-12">
              About
            </Link>
            <Link to="/signup" className="w-[61px]">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-6 my-auto">
          <div className="justify-center items-center rounded bg-neutral-100 self-stretch flex min-w-60 flex-col text-xs text-black font-normal my-auto pl-5 pr-3 py-[7px]">
            <div className="flex items-center gap-[34px] justify-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="opacity-50 self-stretch my-auto bg-transparent border-none outline-none"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/dced85d64ac4fa12ce99d1ed0ca371cdcdacf3e0?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="Search"
              />
            </div>
          </div>
          <div className="self-stretch flex items-center gap-4 justify-center my-auto">
            <Link to="/wishlist">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/b615eff0b42d5b4fb4719cd4704316df03c76c99?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
                alt="Wishlist"
              />
            </Link>
            <Link to="/cart">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/cf4c305e56a1a38184e49098392ce6ceb1e71f78?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
                alt="Cart"
              />
            </Link>
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer sm:hidden"
              alt=""
            />
          </div>
          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white shadow-lg z-50 transition-all ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <img
                  className="h-4 rotate-180"
                  src={assets.dropdown_icon}
                  alt=""
                />
                <p>Back</p>
              </div>
              <Link to="/home" className="whitespace-nowrap w-[50px]">
                Home
              </Link>
              <Link to="/contact" className="whitespace-nowrap w-[66px]">
                Contact
              </Link>
              <Link to="/about" className="whitespace-nowrap w-12">
                About
              </Link>
              <Link to="/signup" className="w-[61px]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-30 border bg-black min-h-px w-full mt-4 border-black border-solid max-md:max-w-full" />
    </>
  );
};

export default Header;
