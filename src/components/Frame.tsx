import Footer from "./Footer";

function Frame() {
  return (
    <div
      className=" transition-colors duration-500 ease-linear"
      style={{
        color: "var(--activeColorHSL)",
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
                to bottom, 
                #343434,
                #7f7f7f 20%,
                #7f7f7f 80%,
                #343434
            )`,
          mixBlendMode: "overlay",
          transform: "translate3d(0,0,0)",
        }}
      ></div>
      <div className="fixed top-2 inset-x-0">
        <header className="flex justify-center items-center">
          <div className="font-fraunces font-black text-[22px]  px-[0.5em] rounded-full">
            Oscar Lundberg
          </div>
        </header>
      </div>
      <div className="fixed bottom-2 inset-x-0 flex items-center justify-center">
        <div className=" px-2 rounded-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Frame;
