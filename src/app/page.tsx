"use client";

import BigText from "@/components/BigText";
import Circles_v2 from "@/components/Circles_v2";
import Container from "@/components/Container";
import Hero2 from "@/components/Hero2";
import TextAndMedia2 from "@/components/TextAndMedia2";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <video
        src="/pexels_videos_1722882_(1080p).mp4"
        poster="/heroposter.jpg"
        autoPlay
        muted
        loop
        className="fixed inset-0 h-full w-full object-cover"
      ></video>
      <div className="fixed inset-0 h-full w-full bg-gradient-radial from-white to-black mix-blend-multiply"></div>
      <Hero2 />
      <div className="relative text-gray-900">
        <Container className="pt-[max(3vw)] pb-[max(10vw)]">
          <BigText>
            Frontend coder with a bit of design knowledge,
            <br />
            coming from a background in music
          </BigText>
        </Container>
        {/* <div className="border-triangle"></div> */}
        <Container className="py-[4vw] relative" bgOptOut>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="absolute bg-white inset-y-0 left-0 w-[var(--container-sidespace)]"></div>
          <div className="absolute bg-white inset-y-0 right-0 w-[var(--container-sidespace)]"></div>
          <TextAndMedia2
            text={
              <>
                <p className="text-white">
                  For me - code, design & product is essentially all about
                  individuals & relationships
                </p>
              </>
            }
            media={{
              src: "/FB_IMG_1703247264185__01.jpg",
              alt: "Hugs",
              isVideo: false,
              width: 998,
              height: 1012,
            }}
          />
        </Container>
        {/* <div className="border-triangle rotate-180"></div> */}
        <div className="bg-white pt-[12vw]"></div>
        <Circles_v2 />
        <Container className="py-[12vw]">
          <TextAndMedia2
            flipX
            text={
              <>
                <p>
                  As a musician you learn that cooperation, focus and
                  preparation can all happen while having fun
                </p>
              </>
            }
            media={{
              src: "/skateboard_and_music_era.jpg",
              alt: "In the days of skating and making music",
              isVideo: false,
              width: 730,
              height: 730,
            }}
          />
        </Container>
      </div>
    </main>
  );
}
