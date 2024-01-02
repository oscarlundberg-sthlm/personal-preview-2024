import { ReactNode } from "react";

interface Props {
  heading: ReactNode | string;
  children: ReactNode;
}

function Article({ heading, children }: Props) {
  return (
    <div className=" sm:grid grid-cols-3 border gap-[var(--container-sidespace)] px-[var(--container-sidespace)] bg-gray-900 border-gray-800 pt-[calc(var(--container-sidespace)*6)] sm:pt-[calc(var(--container-sidespace)*2)] pb-[calc(var(--container-sidespace)*5)] sm:pb-[calc(var(--container-sidespace)*3)]">
      <div className="mb-[calc(var(--container-sidespace)*4)] sm:mb-0">
        <h2 className="big-text text-center sticky top-[calc(var(--container-sidespace)*2)] text-gray-50 ">
          {heading}
        </h2>
      </div>
      <article className="col-start-2 col-span-2 relative sm:pl-[var(--container-sidespace)] sm:border-l border-gray-800 max-w-[600px]">
        <div>{children}</div>
      </article>
    </div>
  );
}

export default Article;
