import { Chess } from "chess.js";
import { ChessBoardProps } from "./module/ChessBoard";
import { useState } from "react";
import { PromotionView } from "./module";
import { defaultRenderSquare } from "./module/utils/renderers";
import { Position } from "chess-fen";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export interface Promotion {
  from: Position;
  to: Position;
}

export const useChessBoard = (
  chess: Chess
): Pick<ChessBoardProps, "fen" | "onMove" | "renderSquare"> => {
  const [fen, setFen] = useState(chess.fen());
  const [promotion, setPromotion] = useState<Promotion | null>(null);

  return {
    fen,
    onMove: (props) => {
      const { fromPosition, toPosition, board } = props;

      if (board.isPromotion(fromPosition, toPosition)) {
        setPromotion({ from: fromPosition, to: toPosition });
      } else {
        try {
          chess.move({ from: fromPosition.toCoordinate(), to: toPosition.toCoordinate() });
          setFen(chess.fen());
        } catch (error) {
          console.warn(getErrorMessage(error));
        }
      }
    },
    renderSquare: (props) => {
      if (promotion && promotion.to.equals(props.position)) {
        return (
          <PromotionView
            key={props.position.toCoordinate()}
            onClose={() => setPromotion(null)}
            onPromotion={(piece) => {
              chess.move({
                from: promotion.from.toCoordinate(),
                to: promotion.to.toCoordinate(),
                promotion: piece.toLowerCase(),
              });
              setPromotion(null);
              setFen(chess.fen());
            }}
            {...props}
          />
        );
      }

      return defaultRenderSquare(props);
    },
  };
};
