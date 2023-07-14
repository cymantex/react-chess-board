import { Fragment } from "react";
import { BoardRendererProps } from "./BoardRenderer";
import { Position } from "chess-fen";

export interface SquareRendererProps
  extends Pick<
    BoardRendererProps,
    | "board"
    | "onMove"
    | "renderDroppableSquare"
    | "renderSquare"
    | "renderCoordinate"
    | "renderDraggablePiece"
    | "renderPiece"
  > {
  lightSquare: boolean;
  coordinate: string;
}

export function SquareRenderer({
  board,
  onMove,
  renderDroppableSquare,
  renderSquare,
  renderCoordinate,
  renderDraggablePiece,
  renderPiece,
  lightSquare,
  coordinate,
}: SquareRendererProps) {
  const props = { board, position: Position.fromCoordinate(coordinate) };

  return (
    <Fragment>
      {onMove
        ? renderDroppableSquare({
            renderSquare,
            onPieceMove: onMove,
            lightSquare: lightSquare,
            Coordinate: renderCoordinate(props),
            Piece: renderDraggablePiece({ renderPiece, ...props }),
            ...props,
          })
        : renderSquare({
            Coordinate: renderCoordinate(props),
            Piece: renderPiece(props),
            lightSquare: lightSquare,
            ...props,
          })}
    </Fragment>
  );
}

export default SquareRenderer;
