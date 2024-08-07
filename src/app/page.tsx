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
      <div className="absolute inset-0 -z-10 rainbow-gradient"></div>
      <div
        className="absolute inset-0 -z-10 bg-repeat mix-blend-soft-light brightness-50"
        style={{
          backgroundImage: "url('img/noise_3.png')",
        }}
      ></div>
      <div className="mx-auto max-w-screen-3xl">
        <div className="xl:mx-[var(--x-pad)] xl:border-y-0 xl:border-x border-current relative">
          <header className=" [--heading-size:11vw] lg:[--heading-size:min(7vw,100px)] relative border-b border-current px-[var(--x-pad)]">
            <div className="flex justify-between">
              <div className=" font-fraunces font-black text-[length:var(--heading-size)] tracking-tighter">
                Oscar Lundberg
              </div>
              <div className="hidden lg:block">
                <PersonalLinks />
              </div>
            </div>
          </header>
          <main>
            <section className="relative w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-[var(--x-pad)] p-[var(--x-pad)] sm:p-[var(--x-pad)]">
              <Section
                index={0}
                bgImageSrc="/img/DSC_0153-min.jpg"
                backgroundPosition="top 10% center"
                heading={<>Hi! I&apos;m&nbsp;Oscar</>}
                text={
                  <p>
                    I&apos;m a frontend developer graduate who got hired as a
                    software engineer straight out of&nbsp;school.
                  </p>
                }
              />
              <Section
                index={1}
                bgImageSrc="/img/tom-rogerson-XYJ-huzNby4-unsplash.jpg"
                backgroundPosition="bottom 30% center"
                heading={<>I used to be in a bunch of&nbsp;bands</>}
                text={
                  <>
                    <p>
                      I&apos;ve had the pleasure to be in bands, play behind
                      singer-songwriters and&nbsp;artists.
                    </p>
                    <p className="pt-3">
                      Playing music with others comes with a lot of practise in
                      cooperation and doing your part, while collectively
                      working towards a common&nbsp;goal.
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
                      I like going to the climbing gym in my spare time.
                      I&apos;ve always been a fan of sports like climbing,
                      skateboarding and snowboarding - where you can get into a
                      flow&nbsp;state.
                    </p>
                    <p className="pt-3">
                      To me, it&apos;s like&nbsp;meditation.
                    </p>
                  </>
                }
              />
              <Section
                index={3}
                bgImageSrc="/img/computer.jpg"
                heading={<>Professional experience in various areas</>}
                text={
                  <>
                    <p>
                      I&apos;ve worked with frameworks like Next.js (React,
                      TypeScript, JavaScript) and Laravel (PHP, Blade).
                      CMS&apos;s like Sanity, Statamic and Wordpress. All kinds
                      of third-party integrations.
                    </p>
                    <p className="pt-3">
                      I&apos;ve touched most parts of web development, from
                      databases & backend, CMS, frontend & design tweaks, to
                      deployment, DNS,&nbsp;etc...
                    </p>
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
                      Most days are spent at work. In fact, most of our life is
                      lived at work. That&apos;s why the everyday vibes matter
                      to&nbsp;me.
                    </p>
                    <p className="pt-3">
                      The "everyday vibes" are a lot to unpack in a little text
                      box, but in short, if your workplace has actual sincere,
                      warm laughter on the regular - that&apos;s a good sign -
                      some workplaces haven&apos;t experienced real laughter in
                      years, if&nbsp;at&nbsp;all.
                    </p>
                  </>
                }
              />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
