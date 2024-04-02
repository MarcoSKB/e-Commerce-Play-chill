import Image from "next/image";

const Announcement = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-5 w-full h-max pt-[54px] overflow-hidden z-[1]">
      <div className="relative flex flex-col w-full p-5 sm:p-7 lg:p-10 rounded-2xl [background:_linear-gradient(131deg,_#1DBE53_-11.11%,_#ACE238_73.42%)]">
        <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold max-w-[280px] md:max-w-[320px] lg:max-w-[370px] text-white mb-3 md:mb-5 z-10">
          Play now Minecraft: Windows edition
        </h3>
        <span className="flex items-center gap-5 text-lg sm:text-xl md:text-2xl font-extrabold mb-5 sm:mb-10 lg:mb-20 z-10">
          4 999 ${" "}
          <span className="text-lg sm:text-xl md:text-xl text-[#FFE817]">
            -25%
          </span>
          <span className="text-lg sm:text-xl md:text-xl opacity-50">
            6 999 $
          </span>
        </span>
        <div className="flex mt-auto text-lg font-extrabold z-10">
          <button
            type="button"
            className="bg-white bg-opacity-10 rounded-2xl px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-5 transition-transform hover:scale-90"
          >
            Buy
          </button>
          <button
            type="button"
            className="px-6 lg:px-[18px] py-2 lg:py-5 transition-transform hover:scale-90"
          >
            To favorites
          </button>
        </div>
        <Image
          width={262}
          height={374}
          quality={70}
          className="absolute bottom-[26px] lg:bottom-[40px] right-0 md:right-[14px] w-[150px] lg:w-[262px] motion-reduce:animate-bounce"
          src="/images/minecraft.png"
          alt="Minecraft picture"
        />
      </div>
      <div className="relative flex flex-col w-full p-5 sm:p-7 lg:p-10 rounded-2xl [background:_linear-gradient(131deg,_#FF3D23_-11.11%,_#FDA828_73.42%)]">
        <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold max-w-[220px] md:max-w-[250px] lg:max-w-[320px] text-white mb-3 md:mb-5 z-10">
          Play Minecraft dangerous now
        </h3>
        <span className="flex items-center gap-5 text-lg sm:text-xl md:text-2xl font-extrabold mb-5 sm:mb-10 lg:mb-20 z-10">
          4 999 ${" "}
          <span className="text-lg sm:text-xl md:text-xl text-[#FFE817]">
            -25%
          </span>
          <span className="text-lg sm:text-xl md:text-xl opacity-50">
            6 999 $
          </span>
        </span>
        <div className="flex mt-auto text-lg font-extrabold z-10">
          <button
            type="button"
            className="bg-white bg-opacity-10 rounded-2xl px-6 lg:px-10 py-2 sm:py-3 lg:py-5 transition-transform hover:scale-90"
          >
            Buy
          </button>
          <button
            type="button"
            className="px-6 lg:px-[18px] py-2 sm:px-8 lg:py-5 transition-transform hover:scale-90"
          >
            To favorites
          </button>
        </div>
        <Image
          width={397}
          height={400}
          quality={70}
          className="absolute bottom-0 right-[-64px] sm:right-[0px] md:right-[-100px] lg:right-[-124px] w-[200px] sm:w-[250px] lg:w-[400px] z-[1]"
          src="/images/minecraft-dungeons-01.png"
          alt="Minecraf Dungeon picture"
        />
      </div>
    </div>
  );
};

export default Announcement;
