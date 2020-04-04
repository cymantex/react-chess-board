import {withDraggablePieces} from "../hocs/withDraggablePieces";
import {BoardRenderer} from "./BoardRenderer";

export const DraggableBoard = withDraggablePieces(BoardRenderer);

export default DraggableBoard;