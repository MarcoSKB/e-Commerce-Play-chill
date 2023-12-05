const StoreReviewBanner = () => {
  return (
    <div className="relative w-full h-[600px] mb-[56px]">
      <img
        className="absolute w-full h-full object-cover rounded-[20px] z-[1]"
        src="/images/five-stars-bg.jpg"
        alt="Five stars background image"
      />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-[20px] py-[30px] px-[60px] text-5xl font-extrabold z-[2] border-[2px] border-solid border-[#3087FA] border-opacity-70 backdrop-blur-xl [background:_linear-gradient(58deg,_#06030F_-1.11%,_rgba(6,_3,_15,_0.28)_110.78%)]">
        Store Reviews
      </div>
    </div>
  );
};

export default StoreReviewBanner;
