import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${fraunces.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
