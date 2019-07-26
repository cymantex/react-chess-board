import {withDraggablePieces} from "../hocs/withDraggablePieces";
import {Board} from "./Board";
import PropTypes from "prop-types";

export const DraggableBoard = withDraggablePieces(Board);

DraggableBoard.displayName = "DraggableBoard";
DraggableBoard.propTypes = {
    ...Board.propTypes,
    onPieceMove: PropTypes.func.isRequired
};