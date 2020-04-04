import React from "react";
import classNames from "classnames";
import {SquareRenderingProps} from "../utils/types";

export interface SquareViewProps extends SquareRenderingProps {
    lightSquare: boolean,
    highlighted?: boolean
}

export const SquareView: React.FC<SquareViewProps> = ({
    board,
    piece,
    coordinate,
    lightSquare,
    position,
    boardSize,
    squareSize,
    highlighted,
    children,
    rotated,
    pieceTheme,
    boardTheme,
    style = {},
    ...props
}) => {
    let background = lightSquare ? boardTheme.lightSquare : boardTheme.darkSquare;
    background = highlighted ? boardTheme.highlightedSquare : background;

    return (
        <div
            id={coordinate}
            style={{
                background,
                ...style
            }}
            className={classNames({
                "chess-board-square": true,
                "chess-board-square--light": lightSquare,
                "chess-board-square--dark": !lightSquare,
                "chess-board-square--highlighted": highlighted,
                [piece]: piece
            })}
            {...props}
        >{children}</div>
    );
};