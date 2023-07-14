import { DndProvider, DndProviderProps } from "react-dnd";
import { TouchBackend, TouchBackendContext, TouchBackendOptions } from "react-dnd-touch-backend";
import { ReactNode } from "react";

export interface ChessBoardDndProviderProps {
  dndProviderProps?: DndProviderProps<TouchBackendContext, Partial<TouchBackendOptions>>;
  children: ReactNode;
}

export function ChessBoardDndProvider({
  children,
  dndProviderProps = {
    backend: TouchBackend,
    options: { enableMouseEvents: true },
  },
}: ChessBoardDndProviderProps) {
  return <DndProvider {...dndProviderProps}>{children}</DndProvider>;
}
