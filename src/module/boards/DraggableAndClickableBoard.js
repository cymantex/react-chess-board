import {DraggableBoard} from "./DraggableBoard";
import {withClickableSquares} from "../hocs/withClickableSquares";
import {ClickableBoard} from "./ClickableBoard";

export const DraggableAndClickableBoard = withClickableSquares(DraggableBoard);

DraggableAndClickableBoard.displayName = "DraggableAndClickableBoard";
DraggableAndClickableBoard.propTypes = {
    ...DraggableBoard.propTypes,
    ...ClickableBoard.propTypes
};