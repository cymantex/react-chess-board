import {withDraggablePieces} from "../hocs/withDraggablePieces";
import {ClickableBoard} from "./ClickableBoard";

export const DraggableAndClickableBoard = withDraggablePieces(ClickableBoard);

export default DraggableAndClickableBoard;