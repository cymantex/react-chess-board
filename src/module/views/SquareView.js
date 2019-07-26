import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const SquareView = ({
    fen,
    coordinate,
    piece,
    lightSquare,
    position,
    boardSize,
    squareSize,
    coordinates,
    highlighted,
    children,
    ...props
}) => {
    return (
        <div
            className={classNames({
                "chess-board-square": true,
                "chess-board-square--light": lightSquare,
                "chess-board-square--dark": !lightSquare,
                "chess-board-square--highlighted": highlighted
            })}
            {...props}
        >{children}</div>
    );
};

SquareView.propTypes = {
    lightSquare: PropTypes.bool
};