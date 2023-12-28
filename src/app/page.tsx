import Main from "@/components/Main";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function Home() {
  return (
    <div className="">
      <Main />
    </div>
  );
}
