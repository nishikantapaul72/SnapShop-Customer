const Footer = () => {
  return (
    <div className="justify-end items-stretch bg-black flex w-full flex-col overflow-hidden pt-20 pb-6 max-md:max-w-full">
      <div className="self-center flex gap-[40px_87px] justify-center flex-wrap max-md:max-w-full">
        <div className="flex flex-col items-stretch text-neutral-50 w-[217px]">
          <div>
            <div className="w-[118px] max-w-full whitespace-nowrap">
              <div className="w-full text-2xl font-bold tracking-[0.72px] leading-none">
                Exclusive
              </div>
              <div className="text-xl font-medium leading-[1.4] mt-6">
                Subscribe
              </div>
            </div>
            <div className="text-base font-normal mt-6">
              Get 10% off your first order
            </div>
          </div>
          <div className="items-center rounded border border-white flex max-w-full w-[217px] gap-8 text-base font-normal mt-4 pl-4 py-3">
            <div className="opacity-40 self-stretch my-auto">
              Enter your email
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/83fffdbe6cde4c18e617e33a0135e0a531d3cc5d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Send"
            />
          </div>
        </div>
        <div className="text-neutral-50 w-[175px]">
          <div className="text-xl font-medium leading-[1.4]">Support</div>
          <div className="max-w-full w-[175px] text-base font-normal mt-6">
            <div className="leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="mt-4">exclusive@gmail.com</div>
            <div className="mt-4">+88015-88888-9999</div>
          </div>
        </div>
        <div className="text-neutral-50">
          <div className="text-xl font-medium leading-[1.4]">Account</div>
          <div className="text-base font-normal mt-6">
            <div>My Account</div>
            <div className="mt-4">Login / Register</div>
            <div className="mt-4">Cart</div>
            <div className="mt-4">Wishlist</div>
            <div className="mt-4">Shop</div>
          </div>
        </div>
        <div className="text-neutral-50">
          <div className="text-xl font-medium leading-[1.4]">Quick Link</div>
          <div className="text-base font-normal mt-6">
            <div>Privacy Policy</div>
            <div className="mt-4">Terms Of Use</div>
            <div className="mt-4">FAQ</div>
            <div className="mt-4">Contact</div>
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <div>
            <div className="text-neutral-50 text-xl font-medium leading-[1.4]">
              Download App
            </div>
            <div className="mt-6">
              <div className="text-neutral-50 text-xs font-medium opacity-70">
                Save $3 with App New User Only
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/3bfa5d15458c0c634a6de6148abf484ddbd6e459?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-20 self-stretch shrink-0 my-auto"
                  alt="QR Code"
                />
                <div className="self-stretch w-[110px] my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/ca5e53f1e48c67cfc651a663608a3628cd518a09?placeholderIfAbsent=true"
                    className="aspect-[2.75] object-contain w-[110px] max-w-full"
                    alt="App Store"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/3752dcd2fc617a1d1387df05b5db073dabc1ae86?placeholderIfAbsent=true"
                    className="aspect-[2.75] object-contain w-[110px] max-w-full mt-1"
                    alt="Google Play"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/e9da0afe6582e9dee2a2c88753e3cd07107437a5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Facebook"
            />
            <div className="flex w-6 shrink-0 h-6"></div>
            <div className="flex w-6 shrink-0 h-6"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ab8c877a4a9642edada9d74ce78f9bf1/675febadc305552cf1a198afac39129e8d916a73?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          <div className="opacity-40 border bg-white min-h-px w-full border-white border-solid max-md:max-w-full" />
        </div>
        <div className="flex items-center gap-3 text-base text-white font-normal mt-4">
          <div className="self-stretch flex min-w-60 items-center gap-1.5 my-auto">
            <div className="self-stretch flex w-5 shrink-0 h-5 my-auto"></div>
            <div className="self-stretch my-auto">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
