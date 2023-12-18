import Image from "next/image";
import { Container } from "@/src/components/elements";
import { FaqSection } from "@/src/components/modules";

const page = () => {
  return (
    <div className="relative py-20">
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
      <Container className="pt-[176px]">
        <div className="relative flex justify-between mb-[188px]">
          <h1 className="text-[64px] font-extrabold">Contacts and support</h1>
          <Image
            className="absolute top-[-235px] right-[-198px] -z-10"
            src="/images/support-img.png"
            alt="Advantage image"
            width={706}
            height={469}
          />
        </div>
        <div className="flex gap-5 mb-[67px]">
          <div className="flex items-center gap-5 justify-between w-full bg-black rounded-[20px] border-darkPurple border border-solid p-10">
            <div className="flex flex-col">
              <div className="opacity-70 text-xl font-medium">
                Technical support
              </div>
              <a
                className="font-semibold text-[38px] hover:text-blue transition-colors"
                href="mailto:Chillnplay.support@gmail.com"
              >
                Play.support@gmail.com
              </a>
            </div>
            <div className="w-[73px] h-[73px] py-[23px] px-[25px] rounded-[15px] bg-[#4885FC] bg-opacity-10">
              <img
                src="/icons/blue-file.svg"
                className="w-full h-full"
                alt="File icon"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-between w-full bg-black rounded-[20px] border-darkPurple border border-solid p-10">
            <div className="flex flex-col">
              <div className="opacity-70 text-xl font-medium">
                Commercial Mail
              </div>
              <a
                className="font-semibold text-[38px] hover:text-blue transition-colors"
                href="mailto:Chillnplay@gmail.com"
              >
                Chillnplay@gmail.com
              </a>
            </div>
            <div className="w-[73px] h-[73px] py-[23px] px-[25px] rounded-[15px] bg-[#4885FC] bg-opacity-10">
              <img
                src="/icons/blue-file.svg"
                className="w-full h-full"
                alt="File icon"
              />
            </div>
          </div>
        </div>
        <FaqSection />
      </Container>
    </div>
  );
};

export default page;
