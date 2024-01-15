"use client";
import Frame from "@/components/Frame";
import Section from "@/components/Section";
import { useScrollRefContext } from "@/contexts/ScrollRefContext";
import skillsList from "@/data/skills";
import { useEffect, useRef } from "react";

export default function Home() {
  const { setRef } = useScrollRefContext();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef || !setRef) return;
    setRef(scrollRef);
  }, [setRef, scrollRef]);

  return (
    <>
      <div className="mx-auto w-[min(100%,540px)] h-[min(100%,900px)] relative top-1/2 -translate-y-1/2 xs:py-4 xs:px-4">
        <div className="relative h-full w-full xs:rounded-[2rem] xs:border-2 border-gray-500 overflow-hidden shadow-lg shadow-gray-900">
          <div
            ref={scrollRef}
            className="h-full w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
          >
            <div className="relative z-10 grid grid-cols-[repeat(6,100%)] h-full">
              <Section
                index={0}
                bgImageSrc="/img/DSC_0153-min.jpg"
                hsl={{
                  h: 46,
                  s: 80,
                  l: 60,
                }}
                heading={<>Hey! I&apos;m&nbsp;Oscar</>}
                text={<>Creative person who writes&nbsp;code.</>}
              />
              <Section
                index={1}
                bgImageSrc="/img/tom-rogerson-XYJ-huzNby4-unsplash.jpg"
                backgroundPosition="bottom 30% center"
                hsl={{
                  h: 28,
                  s: 100,
                  l: 80,
                }}
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
                      common goal.
                    </p>
                  </>
                }
              />
              <Section
                index={2}
                bgImageSrc="/img/patrick-hendry-_JjBZdLFQiM-unsplash.jpg"
                backgroundPosition="top 20% center"
                hsl={{
                  h: 2,
                  s: 71,
                  l: 54,
                }}
                heading={<>Now I climb up walls</>}
                text={
                  <>
                    I like going to the climbing gym in my spare time. Outdoors
                    would be fun to do more of&nbsp;though.
                  </>
                }
              />
              <Section
                index={3}
                bgImageSrc="/img/computer.jpg"
                hsl={{
                  h: 314,
                  s: 100,
                  l: 57,
                }}
                heading={
                  <>
                    Professional experience in
                    <br />
                    various areas
                  </>
                }
                text={<>{skillsList.join(", ")}…</>}
              />
              <Section
                index={4}
                bgImageSrc="/img/camping.jpg"
                backgroundPosition="top 30% center"
                hsl={{
                  h: 3,
                  s: 70,
                  l: 99,
                }}
                heading={<>Everyday vibes are everything</>}
                text={
                  <>
                    <p>
                      Most of our life is lived through work. That&apos;s why
                      the everyday matters. Add the days up and that&apos;s the
                      life you&nbsp;lived.
                    </p>
                    <p className="pt-3">How&apos;s your average&nbsp;day?</p>
                  </>
                }
              />
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </>
  );
}
