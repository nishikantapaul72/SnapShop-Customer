import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import CountdownTimer from "../ui/CountdownTimer";
import { useQuery } from "@tanstack/react-query";
import { adaptProduct, fetchProducts } from "../lib/api/products";

const FlashSales = () => {
  const flashSaleEndDate = new Date();
  flashSaleEndDate.setDate(flashSaleEndDate.getDate() + 3);

  const { data, isLoading } = useQuery({
    queryKey: ["products", "flash-sales"],
    queryFn: async () => {
      const response = await fetchProducts({ limit: 10 });
      return response.products
        .filter((product) => product.discountPercentage > 15)
        .map(adaptProduct);
    },
  });

  if (isLoading) {
    return <div className="py-12 md:py-16">Loading flash sales...</div>;
  }

  return (
    <div className="self-stretch flex w-full flex-col items-stretch mt-[140px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-wrap justify-between max-md:max-w-full">
        <div className="flex min-w-60 gap-[40px_87px] flex-wrap max-md:max-w-full">
          <SectionHeading subtitle="Today's" title="Flash Sales" />
          <CountdownTimer targetDate={flashSaleEndDate} />
        </div>
        <div className="flex gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/d2f1b2d6249d5ccc6cfcf24813c1aae14971ae67?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[46px] shrink-0"
            alt="Previous"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/8271d935e46f125b1a3097a196b761daf33d8c5d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[46px] shrink-0"
            alt="Next"
          />
        </div>
      </div>
      <div className="overflow-x-auto flex w-full gap-[30px] mt-10">
        <div className="flex min-w-60 flex-col items-stretch w-[270px]">
          <div className="rounded bg-neutral-100 flex max-w-full w-[270px] gap-[3px] overflow-hidden pt-3 pb-[49px] px-3">
            <div className="flex flex-col text-xs text-neutral-50 font-normal whitespace-nowrap">
              <div className="rounded bg-[#DB4444] gap-2.5 px-3 py-1">-40%</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/63cea9471d479843748d56b86665ec7a56143c86?placeholderIfAbsent=true"
                className="aspect-[1.13] object-contain w-[172px] max-w-full mt-[11px]"
                alt="Gamepad"
              />
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/b454eea02b6717abd64a9fdef3b6cefb599a8e37?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px]"
                alt="Wishlist"
              />
              <div className="w-[34px] mt-2">
                <div className="bg-white flex w-full shrink-0 h-[34px] fill-white rounded-[50%]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-base font-medium mt-4">
            <div className="text-black self-stretch">HAVIT HV-G92 Gamepad</div>
            <div className="flex gap-3 whitespace-nowrap mt-2">
              <div className="text-[#DB4444]">$120</div>
              <div className="text-black opacity-50 line-through">$160</div>
            </div>
            <div className="flex gap-2 text-sm text-black font-semibold whitespace-nowrap mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/8cda283d174f19b5b1547fe96a68a3e9596ab80e?placeholderIfAbsent=true"
                className="aspect-[5] object-contain w-[100px] shrink-0"
                alt="Rating"
              />
              <div className="opacity-50 w-8">(88)</div>
            </div>
          </div>
        </div>
        <div className="flex min-w-60 flex-col items-stretch w-[270px]">
          <div className="rounded bg-neutral-100 w-full max-w-[270px] overflow-hidden pt-3">
            <div className="flex items-stretch mx-3 max-md:mx-2.5">
              <div className="z-10 flex flex-col text-xs text-neutral-50 font-normal whitespace-nowrap max-md:-mr-1.5">
                <div className="rounded bg-[#DB4444] gap-2.5 px-3 py-1">
                  -35%
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/5bab34a4c21d3bc9ca2a04e23a3fe558c46361aa?placeholderIfAbsent=true"
                  className="aspect-[1.89] object-contain w-[191px] max-w-full mt-[17px]"
                  alt="Keyboard"
                />
              </div>
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/b454eea02b6717abd64a9fdef3b6cefb599a8e37?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[34px]"
                  alt="Wishlist"
                />
                <div className="w-[34px] mt-2">
                  <div className="bg-white flex w-full shrink-0 h-[34px] fill-white rounded-[50%]" />
                </div>
              </div>
            </div>
            <div className="bg-black text-base text-white font-medium mt-[53px] px-[27px] py-[9px] rounded-[0px_0px_4px_4px] max-md:mt-10 max-md:px-5 text-center">
              Add To Cart
            </div>
          </div>
          <div className="flex flex-col text-base font-medium mt-4">
            <div className="text-black self-stretch">AK-900 Wired Keyboard</div>
            <div className="flex gap-3 whitespace-nowrap mt-2">
              <div className="text-[#DB4444]">$960</div>
              <div className="text-black opacity-50 line-through">$1160</div>
            </div>
            <div className="flex gap-2 text-sm text-black font-semibold whitespace-nowrap mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/55500910f7fda67e937673122aa77ab99e4599d2?placeholderIfAbsent=true"
                className="aspect-[5] object-contain w-[100px] shrink-0"
                alt="Rating"
              />
              <div className="opacity-50 w-8">(75)</div>
            </div>
          </div>
        </div>
        <div className="flex min-w-60 flex-col items-stretch w-[270px]">
          <div className="rounded bg-neutral-100 flex max-w-full w-[270px] gap-1 overflow-hidden pt-3 pb-[60px] px-3">
            <div className="flex flex-col text-xs text-neutral-50 font-normal whitespace-nowrap">
              <div className="rounded bg-[#DB4444] gap-2.5 px-3 py-1">-30%</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/d97b4dafa8a74e20189e295a32a2cdf990b939c0?placeholderIfAbsent=true"
                className="aspect-[1.32] object-contain w-[170px] max-w-full mt-[23px]"
                alt="Monitor"
              />
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/b454eea02b6717abd64a9fdef3b6cefb599a8e37?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px]"
                alt="Wishlist"
              />
              <div className="w-[34px] mt-2">
                <div className="bg-white flex w-full shrink-0 h-[34px] fill-white rounded-[50%]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-base font-medium mt-4">
            <div className="text-black self-stretch">
              IPS LCD Gaming Monitor
            </div>
            <div className="flex gap-3 whitespace-nowrap mt-2">
              <div className="text-[#DB4444]">$370</div>
              <div className="text-black opacity-50 line-through">$400</div>
            </div>
            <div className="flex gap-2 text-sm text-black font-semibold whitespace-nowrap mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/8cda283d174f19b5b1547fe96a68a3e9596ab80e?placeholderIfAbsent=true"
                className="aspect-[5] object-contain w-[100px] shrink-0"
                alt="Rating"
              />
              <div className="opacity-50 w-8">(99)</div>
            </div>
          </div>
        </div>
        <div className="flex min-w-60 flex-col items-stretch w-[270px]">
          <div className="rounded bg-neutral-100 flex w-full max-w-[270px] gap-5 overflow-hidden justify-between pt-3 pb-[35px] px-3">
            <div className="flex items-start gap-3.5 text-xs text-neutral-50 font-normal whitespace-nowrap">
              <div className="rounded bg-[#DB4444] gap-2.5 px-3 py-1">-25%</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/d67b23e2803ac2b6835eb13eec5c8665ab9dd132?placeholderIfAbsent=true"
                className="aspect-[0.59] object-contain w-[107px] shrink-0 max-w-full mt-[23px]"
                alt="Chair"
              />
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/b454eea02b6717abd64a9fdef3b6cefb599a8e37?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px]"
                alt="Wishlist"
              />
              <div className="w-[34px] mt-2">
                <div className="bg-white flex w-full shrink-0 h-[34px] fill-white rounded-[50%]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-base font-medium mt-4">
            <div className="text-black self-stretch">
              S-Series Comfort Chair{" "}
            </div>
            <div className="flex gap-3 whitespace-nowrap mt-2">
              <div className="text-[#DB4444]">$375</div>
              <div className="text-black opacity-50 line-through">$400</div>
            </div>
            <div className="flex gap-2 text-sm text-black font-semibold whitespace-nowrap mt-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/3d3cd88c05dd1e86c652a9cd0c4bb92a32aae7ee?placeholderIfAbsent=true"
                className="aspect-[5] object-contain w-[100px] shrink-0"
                alt="Rating"
              />
              <div className="opacity-50 w-8">(99)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center rounded bg-[#DB4444] gap-2.5 text-base text-neutral-50 font-medium mt-[60px] px-12 py-4 max-md:mt-10 max-md:px-5 cursor-pointer">
        View All Products
      </div>
    </div>
  );
};

export default FlashSales;
