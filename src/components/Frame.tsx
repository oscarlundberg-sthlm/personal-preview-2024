import Footer from "./Footer";

function Frame() {
  return (
    <div
      style={{
        color: "var(--activeColorHSL)",
      }}
    >
      {/* <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
                to bottom, 
                #000000bb,
                #00000000 20%,
                #00000000 40%,
                #000000ee
            )`,
          transform: "translate3d(0,0,0)",
        }}
      ></div> */}
      {/* <div className="hidden md:flex justify-center fixed inset-0 pointer-events-none">
        <div className="w-[8vw] bg-black"></div>
        <div className="grow"></div>
        <div className="w-[8vw] bg-black"></div>
      </div> */}
      <div className="absolute z-10 top-0 inset-x-0 xs:rounded-t-[2rem] overflow-hidden">
        <header className="pt-5 pb-16 flex justify-center items-center bg-gradient-to-b from-black/90 to-black/0">
          <div className="transition-colors duration-100 ease-linear font-fraunces font-black text-[22px]  px-[0.5em] rounded-full">
            Oscar Lundberg
          </div>
        </header>
      </div>
      <div className="absolute z-10 bottom-0 inset-x-0 px-4">
        <div className="pb-7 flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Frame;
