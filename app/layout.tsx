import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";

import { Header, Footer } from "@/src/components/modules";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

const manrope = Manrope({
  weight: ["200", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin", "cyrillic"],
});

const toastOptions = {
  unstyled: true,
  classNames: {
    error:
      "flex gap-[8px] py-[18px] px-[24px] text-[#ff5252] text-[14px] rounded-[16px] bg-darkGray",
    success:
      "flex gap-[8px] py-[18px] px-[24px] text-green text-[14px] rounded-[16px] bg-darkGray",
    warning:
      "flex gap-[8px] py-[18px] px-[24px] text-[#FCD789] text-[14px] rounded-[16px] bg-darkGray",
    info: "flex gap-[8px] py-[18px] px-[24px] text-white text-[14px] rounded-[16px] bg-darkGray",
    title: "mt-[-4px]",
  },
};

export const metadata: Metadata = {
  title: "Playnchill",
  description:
    "Online digital distribution service for computer games and programs",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body
        className={`${manrope.className} flex flex-col min-h-screen bg-black text-white`}
      >
        <SkeletonTheme baseColor="#131118" highlightColor="#221C39">
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </SkeletonTheme>
        <Toaster toastOptions={toastOptions} />
      </body>
    </html>
  );
}
