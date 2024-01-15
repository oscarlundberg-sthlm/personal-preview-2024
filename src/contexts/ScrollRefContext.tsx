"use client";
import {
  ReactNode,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ScrollRefContextProps {
  ref: RefObject<HTMLElement> | undefined;
  setRef: (ref: RefObject<HTMLElement>) => void;
}

const ScrollRefContext = createContext<ScrollRefContextProps | null>(null);

interface Props {
  ref?: RefObject<HTMLElement>;
  setRef?: SetStateAction<RefObject<HTMLElement>>;
  children?: ReactNode;
}

const ScrollRefContextProvider = (props: Props) => {
  const [ref, setRef] = useState(props.ref);

  return (
    <ScrollRefContext.Provider value={{ ref, setRef }}>
      {props.children}
    </ScrollRefContext.Provider>
  );
};

const useScrollRefContext = () => {
  const context = useContext(ScrollRefContext);
  if (!context) {
    throw new Error(
      "useScrollRefContext must be used within a ScrollRefContextProvider"
    );
  }
  return context;
};

export { ScrollRefContextProvider, useScrollRefContext };
