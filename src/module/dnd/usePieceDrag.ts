import { ConnectDragPreview, ConnectDragSource, useDrag } from "react-dnd";
import { PieceViewProps } from "../views/PieceView";
import { PieceDragObject, PieceDragProps } from "../types";

export const usePieceDrag = (
  props: PieceViewProps
): [PieceDragProps, ConnectDragSource, ConnectDragPreview] => {
  const type = props.board.get(props.position);
  return useDrag<PieceDragObject, ConnectDragSource, PieceDragProps>({
    item: {
      type,
      position: props.position,
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    type,
  });
};

export default usePieceDrag;
