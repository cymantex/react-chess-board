import { PieceViewProps } from "../views/PieceView";
import { usePieceDrag } from "./usePieceDrag";
import { PieceRendererFunc } from "../utils/renderers";

export interface DraggablePieceProps extends PieceViewProps {
  renderPiece: PieceRendererFunc;
}

export const DraggablePiece = ({ renderPiece, ...props }: DraggablePieceProps) => {
  const [{ isDragging }, dragSource] = usePieceDrag(props);

  return (
    <>
      {renderPiece({
        className: "chess-board-piece--draggable",
        dragSource,
        isDragging,
        ...props,
      })}
    </>
  );
};

export default DraggablePiece;
