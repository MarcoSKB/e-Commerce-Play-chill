import "./globals.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";

import { Header, Footer } from "@/components/modules";

const manrope = Manrope({
  weight: ["200", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Playnchill",
  description:
    "Online digital distribution service for computer games and programs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${manrope.className} bg-black text-white`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
