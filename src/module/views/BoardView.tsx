import React, {ComponentProps} from "react";

export interface BoardViewProps extends ComponentProps<"div"> {}

export const BoardView: React.FC<BoardViewProps> = ({children, ...props}) => (
    <div className="chess-board" {...props}>
        {children}
    </div>
);

export default BoardView;