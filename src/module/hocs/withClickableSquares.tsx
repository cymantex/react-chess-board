import React from "react";
import {BoardRenderProps} from "../boards/BoardRenderer";
import {mergeBoardRenderers} from "../utils";

type ClickableBoardHoc = (component: React.FC<BoardRenderProps>) =>
    (props: BoardRenderProps) => JSX.Element;

export const withClickableSquares: ClickableBoardHoc = (BoardComponent) => ({
    highlightedPosition,
    onSquareClick,
    ...props
}) => {
    const {renderSquare} = mergeBoardRenderers(props);

    return (
        <BoardComponent
            {...props}
            highlightedPosition={highlightedPosition}
            onSquareClick={onSquareClick}
            renderSquare={(squareProps) => {
                const {position, rotated} = squareProps;

                return renderSquare({
                    onClick: () => onSquareClick(position.rotate(rotated)),
                    highlighted: !!(
                        highlightedPosition &&
                        position.x === highlightedPosition.x &&
                        position.y === highlightedPosition.y
                    ),
                    ...squareProps
                });
            }}
        />
    )
};