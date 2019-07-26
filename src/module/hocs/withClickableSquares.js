import React from "react";
import {useBoardRenderers} from "../hooks/useBoardRenderers";

export const withClickableSquares = (BoardComponent) => ({
    highlightedPosition,
    onSquareClicked,
    ...props
}) => {
    const {renderSquare} = useBoardRenderers(props);

    return (
        <BoardComponent
            {...props}
            renderSquare={({position, ...squareProps}) => {
                return renderSquare({
                    onClick: () => onSquareClicked({position, ...squareProps}),
                    position,
                    highlighted: (
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