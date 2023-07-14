import React, { useEffect } from "react";

export type ResizeRef = React.MutableRefObject<HTMLIFrameElement | undefined>;

export default (ref: ResizeRef, onResize: () => void) => {
  const getTarget = () =>
    ref.current && ref.current.contentDocument && ref.current.contentDocument.defaultView;

  function run() {
    onResize();
    const target = getTarget();
    target && target.addEventListener("resize", onResize);
  }

  useEffect(() => {
    if (getTarget()) {
      run();
    } else if (ref.current && ref.current.addEventListener) {
      ref.current.addEventListener("load", run);
    }

    return () => {
      const target = getTarget();
      const isListener = target && typeof target.removeEventListener === "function";

      isListener && target.removeEventListener("resize", onResize);
    };
  }, []);
};
