import Footer from "./Footer";

function Frame() {
  return (
    <div>
      <div className="absolute z-10 top-0 inset-x-0 xs:rounded-t-[1.6rem] overflow-hidden">
        <header className="pt-4 xs:pt-5 pb-16 flex justify-center items-center bg-gradient-to-b from-black/90 to-black/0">
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
