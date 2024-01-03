import Main from "@/components/Main";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function Home() {
  return (
    <div className="">
      <Main />
    </div>
  );
}
