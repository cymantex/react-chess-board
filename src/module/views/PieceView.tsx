import classNames from "classnames";
import { ConnectDragSource } from "react-dnd";
import { SquareRenderingProps } from "../utils/renderers";
import { PieceDragProps } from "../types";
import { EMPTY_SQUARE } from "chess-fen";

export interface PieceViewProps extends SquareRenderingProps, Partial<PieceDragProps> {
  dragSource?: ConnectDragSource;
}

export const PieceView = ({ style = {}, ...props }: PieceViewProps) => {
  const { className, isDragging, dragSource, board, position } = props;
  const piece = board.get(position);

  return (
    <div
      className={classNames({ "chess-board-piece": piece !== EMPTY_SQUARE }, className)}
      style={{
        opacity: isDragging ? "0.5" : "1",
        ...style,
      }}
      ref={dragSource ? dragSource : null}
    >
      {board.pieceTheme[piece](props) || null}
    </div>
  );
};

export default PieceView;
