import { HTMLAttributes } from "react";

export interface BoardViewProps extends HTMLAttributes<HTMLElement> {}

export const BoardView = ({ children, ...props }: BoardViewProps) => (
  <div className="chess-board" {...props}>
    {children}
  </div>
);

export default BoardView;
