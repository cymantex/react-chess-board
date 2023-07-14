import { ConnectDragPreview, ConnectDragSource, useDrag } from "react-dnd";
import { PieceViewProps } from "../views/PieceView";
import { PieceDragObject, PieceDragProps } from "../types";

export const usePieceDrag = (
  props: PieceViewProps
): [PieceDragProps, ConnectDragSource, ConnectDragPreview] => {
  return useDrag<PieceDragObject, ConnectDragSource, PieceDragProps>({
    item: {
      type: props.board.get(props.position),
      position: props.position,
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    type: props.board.get(props.position).toString(),
  });
};

export default usePieceDrag;
