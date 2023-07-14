import { usePieceDrop } from "./usePieceDrop";
import { MoveHandler } from "../types";
import { RenderSquareViewProps, SquareRendererFunc } from "../utils/renderers";

export interface DroppableSquareProps extends RenderSquareViewProps {
  renderSquare: SquareRendererFunc;
  onPieceMove: MoveHandler;
}

export const DroppableSquare = ({ onPieceMove, renderSquare, ...props }: DroppableSquareProps) => {
  const [dropProps, dropTarget] = usePieceDrop(onPieceMove, props.position, props.board);

  return <>{renderSquare({ dropTarget, ...dropProps, ...props })}</>;
};

export default DroppableSquare;
