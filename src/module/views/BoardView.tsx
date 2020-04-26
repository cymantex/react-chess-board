import React from "react";

export interface BoardViewProps extends React.HTMLAttributes<HTMLElement> {}

export const BoardView: React.FC<BoardViewProps> = ({children, ...props}) => (
    <div className="chess-board" {...props}>
        {children}
    </div>
);

export default BoardView;