import AnonymousAnalytics from "@/components/AnonymousAnalytics";
import { ScrollRefContextProvider } from "@/contexts/ScrollRefContext";
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env?.NEXT_PUBLIC_URL ?? ""),
  title: "Oscar Lundberg • Creative coder",
  description:
    "Hey 👋🏻 I'm Oscar, all around creative person and coder. This is a glimpse into who I am.",
};

export const viewport: Viewport = {
  themeColor: "#eee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full [--x-pad:10px] sm:[--x-pad:32px]">
      <body
        className={`${inter.variable} ${interTight.variable} ${fraunces.variable} h-full w-full bg-[#eee] text-white`}
      >
        <ScrollRefContextProvider>{children}</ScrollRefContextProvider>
        <AnonymousAnalytics />
      </body>
    </html>
  );
}
