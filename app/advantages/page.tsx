import Image from "next/image";

const page = () => {
  return (
    <main className="relative py-20 min-h-[1200px]">
      <div className="absolute top-0 left-0 w-full h-full max-h-[670px] mix-blend-color-dodge overflow-hidden opacity-[0.95] -z-10">
        <Image
          priority
          src="/images/bg-space.png"
          className="w-full h-full object-cover"
          alt="Background image"
          width={1920}
          height={1080}
        />
        <div className="absolute bottom-0 left-0 w-full h-[278px] advantages-gradient"></div>
      </div>
      <h1 className="text-[64px] font-extrabold">Our advantages</h1>
    </main>
  );
};

export default page;
