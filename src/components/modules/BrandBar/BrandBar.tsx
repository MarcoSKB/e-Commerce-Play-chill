import Image from "next/image";

const BrandBar = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 max-h-[40px] my-14 opacity-50">
      <Image
        src="/images/brands/paypal-logo.png"
        width={150}
        height={40}
        alt="Paypal brand logo"
      />
      <Image
        src="/images/brands/mastercard-logo.png"
        width={65}
        height={40}
        alt="Mastercard brand logo"
      />
      <Image
        src="/images/brands/visa-logo.png"
        width={123}
        height={40}
        alt="Visa brand logo"
      />
      <Image
        src="/images/brands/webmoney-logo.png"
        width={168}
        height={40}
        alt="Webmoney brand logo"
      />
    </div>
  );
};

export default BrandBar;
