import type { Metadata } from "next";
import { Inter, Inter_Tight, Rock_Salt, Smooch } from "next/font/google";
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
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rocksalt",
  weight: "400",
});
const smooch = Smooch({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-smooch",
  weight: "400",
});

export const metadata: Metadata = {
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
        className={`${inter.variable} ${interTight.variable} ${rockSalt.variable} ${smooch.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
