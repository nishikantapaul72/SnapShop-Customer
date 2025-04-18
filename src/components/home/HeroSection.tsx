import { useState } from "react";

const HeroSection = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="w-full max-w-[1170px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {/* Categories Section */}
        <div className="w-[21%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:mt-2">
            {/* Mobile Categories Toggle Button */}
            <button
              className="hidden max-md:flex items-center justify-between w-full p-3 bg-gray-100 rounded"
              onClick={() => setShowCategories(!showCategories)}
            >
              <span className="font-medium">Categories</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  showCategories ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Categories List */}
            <div
              className={`flex grow items-stretch gap-4 text-base text-black font-normal text-center max-md:${
                showCategories ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col mt-10 max-md:mt-2 w-full">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`${
                      index === 0 ? "" : "mt-4"
                    } cursor-pointer max-md:py-2 max-md:border-b max-md:border-gray-100`}
                  >
                    {category}
                  </div>
                ))}
              </div>
              <div className="border w-px shrink-0 h-96 border-black border-solid max-md:hidden" />
            </div>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-black grow overflow-hidden w-full mt-10 pl-16 max-md:pl-4 pt-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[37%] max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col self-stretch text-base text-neutral-50 my-auto max-md:mt-10 max-md:pb-6">
                  <div className="flex items-center gap-6 font-normal text-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/e52df0f55dd23cf8100796cadf627375e06a61cb?placeholderIfAbsent=true"
                      className="aspect-[0.82] object-contain w-10 self-stretch shrink-0 my-auto"
                      alt="Apple"
                    />
                    <div className="self-stretch w-[126px] my-auto">
                      iPhone 14 Series
                    </div>
                  </div>
                  <div className="text-5xl font-semibold leading-[60px] tracking-[1.92px] self-stretch mt-5 max-md:text-3xl max-md:leading-10">
                    Up to 10% off Voucher
                  </div>
                  <div className="flex items-center gap-2 font-medium text-center mt-[22px]">
                    <div className="self-stretch flex flex-col items-stretch w-[81px] my-auto">
                      <div>Shop Now</div>
                      <div className="border-neutral-50 border bg-neutral-50 min-h-px w-[81px] mt-1 border-solid" />
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/0fe83527999bb9ea3e8046c3185af07bc43d1163?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Arrow"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col relative min-h-[328px] max-md:min-h-[200px] w-full pt-[303px] pb-[11px] max-md:max-w-full max-md:mt-4 max-md:pt-[180px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/3472f2e0b5a1fd29624db7071995523d43ce4f6e?placeholderIfAbsent=true"
                    className="absolute h-full w-full object-cover object-center inset-0"
                    alt="iPhone"
                  />
                  <div className="relative flex items-center gap-3 justify-center max-md:mb-2">
                    <div className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 fill-white my-auto rounded-full" />
                    <div className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 fill-white my-auto rounded-full" />
                    <div className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 fill-white my-auto rounded-full" />
                    <div className="bg-[rgba(255,255,255,0.5)] self-stretch flex w-3 shrink-0 h-3 fill-white my-auto rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
