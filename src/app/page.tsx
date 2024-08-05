"use client";
import Footer from "@/components/Footer";
import PersonalLinks from "@/components/PersonalLinks";
import Section from "@/components/Section";
import { useScrollRefContext } from "@/contexts/ScrollRefContext";
import { useEffect, useRef } from "react";

export default function Home() {
  const { setRef } = useScrollRefContext();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef || !setRef) return;
    setRef(scrollRef);
  }, [setRef, scrollRef]);

  return (
    <div className="relative border-4 border-current">
      <div className="absolute inset-0 flex -z-10">
        {/* <div className="bg-2025-beige w-[49vw] "></div> */}
        <div className="bg-2025-orange w-[25vw] "></div>
        <div className="bg-2025-red w-[25vw] "></div>
        <div className="bg-2025-blue w-[25vw] "></div>
        <div className="bg-2025-blue-light w-[25vw] "></div>
      </div>
      <div className="mx-auto max-w-screen-3xl 3xl:border-y-0 3xl:border-x border-current relative backdrop-blur-2xl">
        <header className=" [--heading-size:11vw] lg:[--heading-size:min(7vw,100px)] relative border-b border-current px-[var(--x-pad)]">
          <div className="flex justify-between">
            <h1 className=" font-fraunces font-black text-[length:var(--heading-size)] tracking-tighter">
              Oscar Lundberg
            </h1>
            <div className="hidden lg:block">
              <PersonalLinks />
            </div>
          </div>
        </header>
        <section className="relative w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-[var(--x-pad)] py-[var(--x-pad)] sm:p-[var(--x-pad)]">
          <Section
            index={0}
            bgImageSrc="/img/DSC_0153-min.jpg"
            backgroundPosition="top 10% center"
            heading={<>Hi! I&apos;m&nbsp;Oscar</>}
            text={<>- A creative person who writes&nbsp;code.</>}
          />
          <Section
            index={1}
            bgImageSrc="/img/tom-rogerson-XYJ-huzNby4-unsplash.jpg"
            backgroundPosition="bottom 30% center"
            heading={<>I used to be in a bunch of&nbsp;bands</>}
            text={
              <>
                <p>
                  I played rock, soul, electro, behind singer-songwriters
                  and&nbsp;artists.
                </p>
                <p className="pt-3">
                  Being in bands naturally entails a lot of cooperation and
                  doing your part, while collectively working towards a
                  common&nbsp;goal.
                </p>
              </>
            }
          />
          <Section
            index={2}
            bgImageSrc="/img/patrick-hendry-_JjBZdLFQiM-unsplash.jpg"
            backgroundPosition="top 20% center"
            heading={<>Now I climb walls</>}
            text={
              <>
                <p>
                  I like going to the climbing gym in my spare time. I&apos;ve
                  always been a fan of sports like climbing, skateboard &
                  snowboard - where you can get into a flow&nbsp;state.
                </p>
                <p className="pt-3">To me, it&apos;s like meditation.</p>
              </>
            }
          />
          <Section
            index={3}
            bgImageSrc="/img/computer.jpg"
            heading={
              <>
                Professional experience in
                <br />
                various areas
              </>
            }
            text={
              <>
                I&apos;ve worked with ecosystems like Next.js (React), Laravel
                (PHP) & Wordpress. From databases & backend, CMS, frontend &
                design tweaks, to deployment, DNS,&nbsp;etc...
              </>
            }
          />
          <Section
            index={4}
            bgImageSrc="/img/camping.jpg"
            backgroundPosition="top 0% center"
            heading={<>Everyday vibes are everything</>}
            text={
              <>
                <p>
                  Most of our life is lived through work. That&apos;s why the
                  everyday matters to me. Add the days up and that&apos;s the
                  life you&nbsp;lived.
                </p>
                <p className="pt-3">How&apos;s your average&nbsp;day?</p>
              </>
            }
          />
        </section>
        <Footer />
      </div>
    </div>
  );
}
