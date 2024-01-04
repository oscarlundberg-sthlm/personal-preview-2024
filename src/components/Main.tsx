"use client";

import Article from "@/components/Article";
import Container from "@/components/Container";
import Skills from "@/components/Skills";
import TextAndMedia from "@/components/TextAndMedia";
import Footer from "./Footer";
import Hero from "./Hero";
import ScrollToContent from "./ScrollToContent";
import ThreeDEnvironment from "./ThreeDEnvironment";
import Balance from "./articles/Balance";

export default function Main() {
  return (
    <main className="relative max-w-full sm:max-w-[min(100vw,1800px)] mx-auto">
      <div className="fixed inset-14 sm:inset-0">
        <ThreeDEnvironment />
      </div>

      <Hero />
      <ScrollToContent />

      <div className="relative h-[20vh] 3xl:border-x-2 border-gradient bg-gradient-to-b from-transparent to-gray-950/70"></div>
      <div className="relative text-gray-900 transition-colors duration-1000 3xl:border-x-2 border-[var(--border-color)] bg-gray-950/70">
        <Container
          id="content-start"
          className="relative pb-[calc(2*var(--container-sidespace))] pt-[calc(1*var(--container-sidespace))] "
        >
          <TextAndMedia
            suffendix={<p>welcome</p>}
            heading={<>Hey, I&apos;m&nbsp;Oscar</>}
            text={
              <>
                All around creative person and&nbsp;coder.
                <br />
                This is a glimpse of who&nbsp;I&nbsp;am.
              </>
            }
            media={{
              src: "/oscar_jeanshirt.png",
              alt: "In the days of skating and making music",
              isVideo: false,
              width: 730,
              height: 730,
            }}
          />
        </Container>
        <Skills />
        {/* <Container className=""> */}
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
        {/* </Container> */}
        <Container className="pt-[calc(5*var(--container-sidespace))] sm:pt-[calc(4*var(--container-sidespace))] pb-[calc(3*var(--container-sidespace))]">
          <TextAndMedia
            flipX
            suffendix={<>Musicianship</>}
            heading={
              <>
                Once a band mate, <wbr />
                always a band mate
              </>
            }
            text={
              <>
                Through music, I gained valuable life points in collaboration
                while having fun. All the while collectively pursuiting a shared
                objective.
              </>
            }
            media={{
              src: "/skateboard_and_music_era.png",
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
