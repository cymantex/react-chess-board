import React from "react";
import classNames from "classnames";
import {ConnectDragSource} from "react-dnd";
import {SquareRenderingProps} from "../utils/renderers";
import {PieceDragProps} from "../types";

export interface PieceViewProps extends SquareRenderingProps, Partial<PieceDragProps> {
    dragSource?: ConnectDragSource
}

export const PieceView: React.FC<PieceViewProps> = ({style = {}, ...props}) => {
    const {className, isDragging, dragSource, board, position} = props;
    const piece = board.get(position);

    return (
        <div
            className={classNames({"chess-board-piece": piece !== "empty"}, className)}
            style={{
                opacity: isDragging ? "0.5" : "1",
                ...style
            }}
            ref={dragSource ? dragSource : null}
        >
            {board.pieceTheme[piece](props)}
        </div>
    );
};

export default PieceView;