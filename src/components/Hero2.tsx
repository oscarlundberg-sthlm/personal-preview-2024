"use client";
import Logo from "./Logo";

function Hero2() {
  return (
    <div className="[--header-height:var(--full-screen-h)] relative h-[var(--header-height)] overflow-hidden">
      <h1 className="hidden">Oscar Lundberg - Creative coder</h1>
      {/* <div className="absolute -bottom-px inset-x-0">
        <div className="border-triangle rotate-180"></div>
        <div className="bg-white min-h-[38px] max-h-[3vw]"></div>
      </div> */}
      <div className="absolute -bottom-px inset-x-0 top-0 flex flex-col justify-end">
        <Logo className="w-full relative -bottom-px shrink-0" />
        <div className="bg-white min-h-[38px] max-h-[3vw]"></div>
      </div>
    </div>
  );
}

export default Hero2;
