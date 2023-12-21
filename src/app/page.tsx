import BigText from "@/components/BigText";
import Circles_v2 from "@/components/Circles_v2";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
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
      <Hero />
      <div className="relative text-gray-900">
        <Container className="pt-[max(6vw,38px)] pb-[max(12vw,76px)]">
          <BigText>
            I tend to be a good fit in creative environments, where soft values
            rank high. Where there’s cooperation with a mindset of “one plus one
            is three”.
          </BigText>
        </Container>
        {/* <Container>
          <TextAndMedia
            preHeading="Coding"
            heading="As a teen I built computers and wrote actionscript"
            text={
              <>
                <p>
                  I’ve had fun writing code, but coding isn’t fun in and of
                  itself. The drive comes from somewhere else. From experiencing
                  something being built. From having a vision and piecing
                  together the puzzle. It’s also a bit of that childish
                  curiosity of understanding how something works.
                </p>
                <p className="mt-[1.5em]">R.I.P Macromedia Flash.</p>
              </>
            }
            media={{
              src: "/summertime.jpg",
              alt: "Summer, shades and happy days",
              isVideo: false,
              width: 1000,
              height: 1387,
            }}
          />
        </Container> */}
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
              width: 1000,
              height: 1387,
            }}
          />
        </Container>
        <Circles_v2 />
      </div>
    </main>
  );
}
