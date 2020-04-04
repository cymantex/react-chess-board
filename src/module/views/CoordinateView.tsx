import React, {Fragment} from "react";
import {SquareRenderingProps} from "../utils/types";

export interface CoordinateViewProps extends SquareRenderingProps {}

export const CoordinateView: React.FC<CoordinateViewProps> = ({
    piece,
    coordinate,
    board,
    position,
    boardSize,
    squareSize,
    rotated,
    pieceTheme,
    boardTheme,
    ...props
}) => {
    const rowCoordinate = position.rotate(rotated).y === board.rows - 1 ? coordinate.charAt(0) : "";
    const columnCoordinate = position.rotate(rotated).x === 0 ? coordinate.charAt(1) : "";

    return (
        <Fragment>
            <span className="chess-board-coordinate chess-board-coordinate--row" {...props}>
                {rowCoordinate}
            </span>
            <span className="chess-board-coordinate chess-board-coordinate--column" {...props}>
                {columnCoordinate}
            </span>
        </Fragment>
    );
};