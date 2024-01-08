import Frame from "@/components/Frame";
import Section from "@/components/Section";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function Home() {
  return (
    <>
      <Section
        bgImageSrc="/img/blazer_comb_comp.jpg"
        hsl={{
          h: 0,
          s: 100,
          l: 51,
        }}
        text={
          <>
            Hey!
            <br />
            I'm Oscar.
            <br />
            This photo of me is
            <br />
            <span className="italic">very</span> staged.
          </>
        }
      />
      <Section
        bgImageSrc="/img/blake-carpenter-HkvRp7ZL8Ug-unsplash.jpg"
        hsl={{
          h: 90,
          s: 100,
          l: 91,
        }}
        text={
          <>
            <span className="italic">I used to</span>
            <br />
            be in a bunch of bands
          </>
        }
      />
      <Section
        bgImageSrc="/img/climbing.jpg"
        hsl={{
          h: 32,
          s: 100,
          l: 51,
        }}
        text={
          <>
            I enjoy indoor climbing.
            <br />
            <span className="italic">Outdoors would be fun though.</span>
          </>
        }
      />
      <Frame />
    </>
  );
}
