import { useWindowSize } from "./useWindowSize";

export const WindowSize = () => {
  const [windowSize] = useWindowSize();
  return (
    <div>
      Width: {windowSize.width} Height: {windowSize.height}
    </div>
  );
};
