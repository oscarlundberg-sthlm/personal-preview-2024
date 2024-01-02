"use client";

import Article from "@/components/Article";
import Container from "@/components/Container";
import Skills from "@/components/Skills";
import TextAndMedia from "@/components/TextAndMedia";
import Footer from "./Footer";
import Hero from "./Hero";
import ThreeDEnvironment from "./ThreeDEnvironment";
import Balance from "./articles/Balance";

export default function Main() {
  return (
    <main className="relative max-w-full sm:max-w-[min(100vw,1800px)] mx-auto">
      {/* <video
          src="/pexels-film-composite-16392053_(1080p).mp4"
          poster="/heroposter.jpg"
          autoPlay
          muted
          loop
          className="fixed inset-0 h-full w-full object-cover"
        ></video>
        */}
      {/* <div className="fixed -z-10 inset-0 h-full w-full bg-gradient-radial from-[#181818] to-transparent"></div> */}
      <div className="fixed inset-14 sm:inset-0">
        <ThreeDEnvironment />
      </div>

      <Hero />

      <div className="relative h-[20vh] 3xl:border-x-2 border-gradient"></div>
      <div className="relative text-gray-900 transition-colors duration-1000 3xl:border-x-2 border-[var(--border-color)] ">
        {/* <div className=" h-[var(--container-sidespace)]"></div> */}
        <Container className="relative pb-[calc(3*var(--container-sidespace))] pt-[calc(1*var(--container-sidespace))] ">
          <TextAndMedia
            suffendix={<p>welcome</p>}
            heading={<>Hey, I&apos;m&nbsp;Oscar</>}
            text={
              <>
                All around creative person and&nbsp;coder.
                <br />
                This is a glimpse into who&nbsp;I&nbsp;am.
              </>
            }
            media={{
              src: "/summertime.jpg",
              alt: "In the days of skating and making music",
              isVideo: false,
              width: 730,
              height: 730,
            }}
          />
        </Container>
        <Skills />
        <Container className="">
          <Article
            heading={
              <>
                <span className="font-smooch">Analog feels</span>
                <br />
                <span className="text-gold">
                  <small>in a</small>
                </span>{" "}
                digital world
              </>
            }
          >
            <Balance />
          </Article>
        </Container>
        <Container className="pt-[calc(4*var(--container-sidespace))] pb-[calc(3*var(--container-sidespace))]">
          <TextAndMedia
            flipX
            suffendix={<>Musicianship</>}
            heading={<>Once a bass player...</>}
            text={
              <>
                ...always a band mate. In music, I got a lot of free lessons
                about cooperation, listening, and having fun while working
                towards&nbsp;a&nbsp;goal.
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
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  );
}
