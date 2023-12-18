import Image from "next/image";
import { Container } from "@/src/components/elements";
import { advantagesData } from "@/src/data/advantagesData";
import { AdvantageCard } from "./components";

const page = () => {
  return (
    <main className="relative py-20">
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
      <Container>
        <div className="flex justify-between mb-[-63px]">
          <h1 className="text-[64px] font-extrabold mt-[100px]">
            Our advantages
          </h1>
          <Image
            className="mr-[-32px]"
            src="/images/advantages-img.png"
            alt="Advantage image"
            width={456}
            height={431}
          />
        </div>
        <div className="grid grid-cols-3 gap-8 mb-[137px]">
          {advantagesData.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              iconURL={advantage.iconURL}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default page;
