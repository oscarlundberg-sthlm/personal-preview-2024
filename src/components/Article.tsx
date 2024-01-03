import { ReactNode } from "react";

interface Props {
  heading: ReactNode | string;
  children: ReactNode;
}

function Article({ heading, children }: Props) {
  return (
    <div className="relative [--bg:rgb(23,23,23)]">
      <div className="overflow-hidden [--height:calc(1.7*var(--container-sidespace))] relative pt-[var(--height)] h-px">
        <div className="bg-[var(--bg)] h-[var(--height)] origin-top-left -rotate-2"></div>
      </div>

      <div className="px-[var(--container-sidespace)] bg-[var(--bg)] pt-[calc(var(--container-sidespace)*6)] sm:pt-[calc(var(--container-sidespace)*3)] pb-[calc(var(--container-sidespace)*4)] sm:pb-[calc(var(--container-sidespace)*2)]">
        <div className="sm:grid grid-cols-3 gap-[var(--container-sidespace)]">
          <div className="mb-[calc(var(--container-sidespace)*4)] sm:mb-0">
            <h2 className="big-text text-center sticky top-[calc(var(--container-sidespace)*2)] text-gray-50 ">
              {heading}
            </h2>
          </div>
          <article className="col-start-2 col-span-2 relative sm:pl-[var(--container-sidespace)] sm:border-l border-gold/30 max-w-[600px]">
            <div>{children}</div>
          </article>
        </div>
      </div>

      <div className="overflow-hidden [--height:calc(1.7*var(--container-sidespace))] relative pb-[var(--height)] h-px">
        <div className="bg-[var(--bg)] h-[var(--height)] origin-top-left -rotate-2"></div>
      </div>
    </div>
  );
}

export default Article;
