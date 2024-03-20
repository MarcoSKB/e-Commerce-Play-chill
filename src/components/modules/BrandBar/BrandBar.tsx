import Image from "next/image";

const BrandBar = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-2 md:gap-3 my-5 md:my-8 xl:my-14 opacity-50">
      <div className="relative h-[18px] md:h-[30px] xl:h-[40px] w-full max-w-[68px] md:max-w-[120px] xl:max-w-[150px] z-0">
        <Image
          className="object-contain"
          src="/images/brands/paypal-logo.png"
          alt="Paypal brand logo"
          fill
        />
      </div>
      <div className="relative h-[18px] md:h-[30px] xl:h-[40px] w-full max-w-[68px] md:max-w-[120px] xl:max-w-[150px] z-0">
        <Image
          className="object-contain"
          src="/images/brands/mastercard-logo.png"
          alt="Mastercard brand logo"
          fill
        />
      </div>
      <div className="relative h-[18px] md:h-[30px] xl:h-[40px] w-full max-w-[68px] md:max-w-[120px] xl:max-w-[150px] z-0">
        <Image
          className="object-contain"
          src="/images/brands/visa-logo.png"
          alt="Visa brand logo"
          fill
        />
      </div>
      <div className="relative h-[18px] md:h-[30px] xl:h-[40px] w-full max-w-[68px] md:max-w-[120px] xl:max-w-[150px] z-0">
        <Image
          className="object-contain"
          src="/images/brands/webmoney-logo.png"
          alt="Webmoney brand logo"
          fill
        />
      </div>
    </div>
  );
};

export default BrandBar;
