import { ConnectDropTarget, useDrop } from "react-dnd";
import { Board } from "../utils/Board";
import { Position, BOARD_CONTENT } from "chess-fen";
import { MoveHandler, PieceDragObject, PieceDropProps } from "../types";

export const usePieceDrop = (
  onPieceMove: MoveHandler,
  dropPosition: Position,
  board: Board
): [PieceDropProps, ConnectDropTarget] => {
  return useDrop<PieceDragObject, ConnectDropTarget, PieceDropProps>({
    accept: Object.values(BOARD_CONTENT),
    drop: (pieceDragObject) => {
      onPieceMove({
        fromPosition: pieceDragObject.position,
        toPosition: dropPosition,
        board,
      });

      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
};

export default usePieceDrop;
