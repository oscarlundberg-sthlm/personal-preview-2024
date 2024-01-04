import { ReactNode } from "react";

interface Props {
  heading: ReactNode | string;
  children: ReactNode;
}

function Article({ heading, children }: Props) {
  return (
    <div className="relative ">
      <div className="overflow-hidden [--height:calc(1.7*var(--container-sidespace))] relative pt-[var(--height)] h-px">
        <div className="bg-gray-800 h-[var(--height)] w-[calc(100%+8px)] relative -left-1 origin-top-left -rotate-2"></div>
      </div>

      <div className="px-[var(--container-sidespace)] bg-gray-800 pt-[calc(var(--container-sidespace)*6)] sm:pt-[calc(var(--container-sidespace)*3)] pb-[calc(var(--container-sidespace)*4)] sm:pb-[calc(var(--container-sidespace)*2)]">
        <div className="sm:grid grid-cols-3 gap-[var(--container-sidespace)]">
          <div className="mb-[calc(var(--container-sidespace)*4)] sm:mb-0">
            <h2 className="font-sans-tight text-[clamp(38px,3.30687831vw,56px)] leading-[1.1em] font-bold sm:text-center sticky top-[calc(var(--container-sidespace)*2)] text-gray-50 ">
              {heading}
            </h2>
          </div>
          <article className="col-start-2 col-span-2 relative sm:pl-[var(--container-sidespace)] sm:border-l border-gold/30 max-w-[600px]">
            <div>{children}</div>
          </article>
        </div>
      </div>

      <div className="overflow-hidden [--height:calc(1.7*var(--container-sidespace))] relative pb-[var(--height)] h-px">
        <div className="bg-gray-800 h-[var(--height)] w-[calc(100%+8px)] relative -left-1 origin-top-left -rotate-2"></div>
      </div>
    </div>
  );
}

export default Article;
