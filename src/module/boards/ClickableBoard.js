import {Board} from "./Board";
import {withClickableSquares} from "../hocs/withClickableSquares";
import PropTypes from "prop-types";

export const ClickableBoard = withClickableSquares(Board);

ClickableBoard.displayName = "ClickableBoard";
ClickableBoard.propTypes = {
    ...Board.propTypes,
    highlightedPosition: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
    ]).isRequired,
    onSquareClicked: PropTypes.func.isRequired,
};