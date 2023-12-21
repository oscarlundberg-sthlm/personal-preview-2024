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
      <Hero2 />
      <div className="relative text-gray-900">
        <Container className="pb-[max(12vw,76px)]">
          <BigText>
            I tend to be a good fit in creative environments, where soft values
            rank high. Where there’s cooperation with a mindset of “one plus one
            is three”.
          </BigText>
        </Container>
        <Container className="pb-[max(6vw,76px)]">
          <TextAndMedia2
            text={
              <>
                <p>
                  I’ve had fun writing code, but coding isn’t fun in and of
                  itself. The drive comes from somewhere else.
                </p>
              </>
            }
            media={{
              src: "/summertime.jpg",
              alt: "Summer, shades and happy days",
              isVideo: false,
              width: 998,
              height: 1012,
            }}
          />
        </Container>
        <Circles_v2 />
        <Container className="py-[max(6vw,76px)]">
          <TextAndMedia2
            flipX
            text={
              <>
                <p>
                  I’ve had fun writing code, but coding isn’t fun in and of
                  itself. The drive comes from somewhere else.
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
