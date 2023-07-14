import { PromotionPieceProps } from "../utils/renderers";

export const PromotionPieceView = ({
  onPromotion,
  board,
  piece,
  ...props
}: PromotionPieceProps) => (
  <div className="chess-board-promotion--piece" onClick={() => onPromotion(piece)}>
    {board.pieceTheme[piece](props)}
  </div>
);
