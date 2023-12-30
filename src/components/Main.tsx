"use client";

import Article from "@/components/Article";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TextAndMedia from "@/components/TextAndMedia";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="relative max-w-full sm:max-w-[min(calc(100vw-2*var(--container-sidespace)),1800px)] mx-auto">
      <video
        src="/pexels-film-composite-16392053_(1080p).mp4"
        poster="/heroposter.jpg"
        autoPlay
        muted
        loop
        className="fixed inset-0 h-full w-full object-cover"
      ></video>
      <div className="fixed inset-0 h-full w-full bg-gradient-radial from-vibrant-steel-blue to-black mix-blend-difference"></div>
      <Hero />
      <div className="relative text-gray-900 bg-black transition-colors duration-1000 border-x-2 border-[var(--border-color)]">
        <div className=" h-[var(--container-sidespace)]"></div>
        <Container className="relative pb-[calc(3*var(--container-sidespace))] pt-[calc(1*var(--container-sidespace))] ">
          <TextAndMedia
            suffendix={<p>welcome</p>}
            heading={<>Hey 👋🏻 I&apos;m&nbsp;Oscar</>}
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
                <span className="text-gray-500">
                  <small>in a</small>
                </span>{" "}
                digital world
              </>
            }
          >
            <h3 className="font-sans-tight text-[20px] lg:text-[28px] leading-[1.2] font-bold text-gray-50 mb-[1.8em]">
              Balance in life is important, right?
            </h3>
            <p className="font-sans text-[18px] lg:text-[24px] leading-[1.5] font-medium text-gray-300 mb-[1.8em]">
              You want to eat junk food, so you should work out. You&apos;re
              stressed out, so you should find time to unwind. Maybe you have a
              really tense and hard work environment, now humour becomes really
              important.
            </p>
            <p className="font-sans text-base lg:text-[18px] text-gray-50 font-normal leading-[1.7] my-[1.8em]">
              <span className="font-semibold">
                Dealing with computers and strict boolean code, maybe we should
                balance that out with things that make us human.
              </span>{" "}
              Hand out just a little more compliments, solve something as a
              group or pair. Simple things like being nice, respectful and open
              to anyones&apos; ideas.
            </p>
            <p className="font-sans text-base lg:text-[18px] text-gray-50 font-normal leading-[1.7] my-[1.8em]">
              If you&apos;re thinking{" "}
              <span className=" italic">
                &quot;duh, yeah those&apos;re some pretty obvious things&quot;
              </span>{" "}
              - me too. I&apos;m thinking the same thing, and we&apos;d probably
              make a good team.
            </p>
            <h3 className="font-sans-tight text-[20px] lg:text-[28px] leading-[1.2] font-bold text-gray-50 mt-[2.4em] mb-[1.8em]">
              The idea of &quot;one and one is three&quot;
            </h3>
            <p className="font-sans text-base lg:text-[18px] text-gray-50 font-normal leading-[1.7] my-[1.8em]">
              Say you&apos;re working on something by yourself, you work along
              and get done with the thing. Imaging someone else doing the same
              work, but taking another route and achieveing a slightly different
              result. That&apos;s &quot;one and one is two&quot;.
            </p>
            <p className="font-sans text-base lg:text-[18px] text-gray-50 font-normal leading-[1.7] mt-[1.8em]">
              Now imaging you&apos;re doing the same work, but together.
              You&apos;re brainstorming and discussing ideas, solutions and
              routes - then the outcome may become something neither of you
              would have thought of individually. That&apos;s three. That&apos;s
              the level up that cooperation can lead to, and part of the power
              of valuing creativity and our human qualities.
            </p>
          </Article>
        </Container>
        <Container className="py-[calc(3*var(--container-sidespace))]">
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
