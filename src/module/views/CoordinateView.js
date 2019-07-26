import React, {Fragment} from "react";
import PropTypes from "prop-types";

export const CoordinateView = ({
    piece,
    coordinate,
    fen,
    position,
    boardSize,
    squareSize,
    coordinates,
    ...props
}) => {
    let rowCoordinate = coordinate.startsWith("a") ? coordinate.charAt(1) : "";
    let columnCoordinate = coordinate.charAt(1) === "1" ? coordinate.charAt(0) : "";

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

CoordinateView.propTypes = {
    coordinate: PropTypes.string.isRequired
};