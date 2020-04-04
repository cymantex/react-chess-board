import React, {ComponentProps} from "react";
import {Board} from "../utils/Board";

export interface BoardViewProps extends ComponentProps<"div"> {
    board: Board,
    height: number
}

export const BoardView: React.FC<BoardViewProps> = ({children, board, height, style = {}, ...props}) => (
    <div
        style={{
            gridTemplateColumns: `repeat(${board.columns}, ${height / board.columns}px)`,
            gridTemplateRows: `repeat(${board.rows}, ${height / board.columns}px)`,
            ...style,
        }}
        className="chess-board"
        {...props}
    >{children}</div>
);