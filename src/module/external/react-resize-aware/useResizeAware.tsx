import { ReactNode, useCallback, useMemo, useState } from "react";
import { ResizeListener } from "./ResizeListener";
import { ResizeRef } from "./useOnResize";

export interface ResizeSize {
  width?: number;
  height?: number;
}
export type ResizeReporter = (target?: HTMLIFrameElement) => ResizeSize;
export type ResizeAware = [ReactNode, ResizeSize];

const defaultReporter = (target?: HTMLIFrameElement) => ({
  width: target !== undefined ? target.offsetWidth : undefined,
  height: target !== undefined ? target.offsetHeight : undefined,
});

export function useResizeAware(reporter: ResizeReporter = defaultReporter): ResizeAware {
  const [sizes, setSizes] = useState<ResizeSize>(reporter());
  const onResize = useCallback<(ref: ResizeRef) => void>(
    (ref) => setSizes(reporter(ref.current)),
    [reporter]
  );
  const resizeListenerNode = useMemo(() => <ResizeListener onResize={onResize} />, [onResize]);

  return [resizeListenerNode, sizes];
}
