import React, { CSSProperties, MutableRefObject } from "react";
import useOnResize, { ResizeRef } from "./useOnResize";

const style: CSSProperties = {
  display: "block",
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: -1,
};

interface ResizeListenerProps {
  onResize: (resizeRef: ResizeRef) => void;
}

export function ResizeListener({ onResize }: ResizeListenerProps) {
  const ref: MutableRefObject<HTMLIFrameElement | undefined> = React.useRef<HTMLIFrameElement>();
  useOnResize(ref, () => onResize(ref));

  return (
    <iframe
      style={style}
      src="about:blank"
      // @ts-ignore
      ref={ref}
      aria-hidden={true}
      tabIndex={-1}
      frameBorder={0}
    />
  );
}
