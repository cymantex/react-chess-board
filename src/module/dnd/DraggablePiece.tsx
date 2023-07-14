import { PieceViewProps } from "../views/PieceView";
import { usePieceDrag } from "./usePieceDrag";
import { PieceRenderer } from "../utils/renderers";

export interface DraggablePieceProps extends PieceViewProps {
  renderPiece: PieceRenderer;
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
