import { useScroll } from "framer-motion";

interface Props {
  scrollEnd: number;
  initialPos: number;
  movement: number;
}

const useScrollTransformThree = ({
  scrollEnd,
  initialPos,
  movement,
}: Props) => {
  const { scrollY } = useScroll();

  return {
    /**
     * For useFrame with react three fiber
     */
    getAnimationValue: () => {
      const scrollPercentage =
        scrollY.get() < scrollEnd ? scrollY.get() / scrollEnd : 1;
      return initialPos + scrollPercentage * movement;
    },
  };
};

export default useScrollTransformThree;
