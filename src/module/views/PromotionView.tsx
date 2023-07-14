import { SquareView } from "./SquareView";
import { RenderPromotionViewProps } from "../utils/renderers";
import { Color, Piece, PIECES } from "chess-fen";
import { PromotionPieceView } from "./PromotionPieceView";

const getPromotionPieces = (toMove: Color): Piece[] =>
  toMove === "white"
    ? [PIECES.Q, PIECES.R, PIECES.B, PIECES.N]
    : [PIECES.q, PIECES.r, PIECES.b, PIECES.n];

export const PromotionView = ({
  Coordinate,
  Piece,
  onPromotion,
  onClose,
  style = {},
  ...props
}: RenderPromotionViewProps) => {
  const { board } = props;

  return (
    <SquareView {...props}>
      <div
        style={{
          transform:
            (!board.rotated && board.toMove === "black") ||
            (board.rotated && board.toMove === "white")
              ? "translate(0, calc(-75% - 15px))"
              : "none",
          ...style,
        }}
        className="chess-board-promotion"
      >
        {getPromotionPieces(board.toMove).map((piece) => (
          <PromotionPieceView key={piece} piece={piece} onPromotion={onPromotion} {...props} />
        ))}
        <div className="chess-board-promotion--close" onClick={onClose}>
          close
        </div>
      </div>
    </SquareView>
  );
};

export default PromotionView;
