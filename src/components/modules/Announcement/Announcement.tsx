import Image from "next/image";

const Announcement = () => {
  return (
    <div className="flex gap-5 w-full h-max pt-[54px]">
      <div className="relative flex flex-col max-w-[50%] w-full p-10 rounded-2xl [background:_linear-gradient(131deg,_#1DBE53_-11.11%,_#ACE238_73.42%)]">
        <h3 className="text-4xl font-extrabold max-w-[370px] text-white mb-5 z-10">
          Play now Minecraft: Windows edition
        </h3>
        <span className="flex items-center gap-5 text-2xl font-extrabold mb-20 z-10">
          4 999 $ <span className="text-xl text-[#FFE817]">-25%</span>
          <span className="text-xl opacity-50">6 999 $</span>
        </span>
        <div className="flex mt-auto text-lg font-extrabold z-10">
          <button
            type="button"
            className="bg-white bg-opacity-10 rounded-2xl px-10 py-5 transition-transform hover:scale-90"
          >
            Buy
          </button>
          <button
            type="button"
            className="px-[18px] py-5 transition-transform hover:scale-90"
          >
            To favorites
          </button>
        </div>
        <Image
          width={262}
          height={374}
          quality={70}
          className="absolute top-[-54px] right-[14px] motion-reduce:animate-bounce"
          src="/images/minecraft.png"
          alt="Minecraft picture"
        />
      </div>
      <div className="relative flex flex-col max-w-[50%] w-full p-10 rounded-2xl [background:_linear-gradient(131deg,_#FF3D23_-11.11%,_#FDA828_73.42%)]">
        <h3 className="text-4xl font-extrabold max-w-[380px] text-white mb-5 z-10">
          Play Minecraft dangerous now
        </h3>
        <span className="flex items-center gap-5 text-2xl font-extrabold mb-20 z-10">
          4 999 $ <span className="text-xl text-[#FFE817]">-25%</span>
          <span className="text-xl opacity-50">6 999 $</span>
        </span>
        <div className="flex mt-auto text-lg font-extrabold z-10">
          <button
            type="button"
            className="bg-white bg-opacity-10 rounded-2xl px-10 py-5 transition-transform hover:scale-90"
          >
            Buy
          </button>
          <button
            type="button"
            className="px-[18px] py-5 transition-transform hover:scale-90"
          >
            To favorites
          </button>
        </div>
        <Image
          width={397}
          height={400}
          quality={70}
          className="absolute top-[-43px] right-[-124px]"
          src="/images/minecraft-dungeons-01.png"
          alt="Minecraf Dungeon picture"
        />
      </div>
    </div>
  );
};

export default Announcement;
