import {BoardRenderer} from "./BoardRenderer";
import {withClickableSquares} from "../hocs/withClickableSquares";

export const ClickableBoard = withClickableSquares(BoardRenderer);

export default ClickableBoard;