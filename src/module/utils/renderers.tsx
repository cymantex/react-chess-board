import { BoardView, BoardViewProps } from "../views/BoardView";
import { SquareView, SquareViewProps } from "../views/SquareView";
import { PieceView, PieceViewProps } from "../views/PieceView";
import { CoordinateView, CoordinateViewProps } from "../views/CoordinateView";
import { PreviewPieceView, PreviewPieceViewProps } from "../views/PreviewPieceView";
import { Board } from "./Board";
import { Position, BoardContent, Piece } from "chess-fen";
import DroppableSquare, { DroppableSquareProps } from "../dnd/DroppableSquare";
import DraggablePiece, { DraggablePieceProps } from "../dnd/DraggablePiece";
import { HTMLAttributes, ReactNode } from "react";

export type BoardRenderer = (props: RenderBoardViewProps) => ReactNode;
export type SquareRenderer = (props: RenderSquareViewProps) => ReactNode;
export type PieceRenderer = (props: PieceViewProps) => ReactNode;
export type CoordinateRenderer = (props: CoordinateViewProps) => ReactNode;
export type PreviewPieceRenderer = (props: PreviewPieceViewProps) => ReactNode;
export type DroppableSquareRenderer = (props: DroppableSquareProps) => ReactNode;
export type DraggablePieceRenderer = (props: DraggablePieceProps) => ReactNode;

export interface BoardRenderingProps {
  renderSquare: SquareRenderer;
  renderPiece: PieceRenderer;
  renderCoordinate: CoordinateRenderer;
  renderDroppableSquare: DroppableSquareRenderer;
  renderDraggablePiece: DraggablePieceRenderer;
  renderBoard: BoardRenderer;
  renderPreviewPiece: PreviewPieceRenderer;
}

export const defaultRenderBoard: BoardRenderer = ({ children, resizeListener, ...props }) => (
  <BoardView {...props}>
    {resizeListener}
    {children}
  </BoardView>
);
export const defaultRenderSquare: SquareRenderer = ({ Coordinate, Piece, ...props }) => (
  <SquareView {...props}>
    {Piece}
    {Coordinate}
  </SquareView>
);
export const defaultRenderPiece: PieceRenderer = (props) => <PieceView {...props} />;
export const defaultRenderCoordinate: CoordinateRenderer = (props) => <CoordinateView {...props} />;
export const defaultRenderPreviewPiece: PreviewPieceRenderer = (props) => (
  <PreviewPieceView {...props} />
);
export const defaultRenderDroppableSquare: DroppableSquareRenderer = (props) => (
  <DroppableSquare {...props} />
);
export const defaultRenderDraggablePiece: DraggablePieceRenderer = (props) => (
  <DraggablePiece {...props} />
);

export const mergeBoardRenderers: (
  props: Partial<BoardRenderingProps>
) => Required<BoardRenderingProps> = ({
  renderBoard = defaultRenderBoard,
  renderSquare = defaultRenderSquare,
  renderPiece = defaultRenderPiece,
  renderCoordinate = defaultRenderCoordinate,
  renderPreviewPiece = defaultRenderPreviewPiece,
  renderDroppableSquare = defaultRenderDroppableSquare,
  renderDraggablePiece = defaultRenderDraggablePiece,
}) => ({
  renderBoard,
  renderSquare,
  renderPiece,
  renderCoordinate,
  renderPreviewPiece,
  renderDraggablePiece,
  renderDroppableSquare,
});

export interface SquareRenderingProps extends HTMLAttributes<HTMLElement> {
  board: Board;
  position: Position;
}

export interface RenderBoardViewProps extends BoardViewProps {
  resizeListener: ReactNode;
}

export interface RenderSquareViewProps extends SquareViewProps {
  Piece: ReactNode;
  Coordinate: ReactNode;
}

export interface RenderPromotionViewProps extends RenderSquareViewProps {
  onClose: () => void;
  onPromotion: (piece: BoardContent) => void;
}

export interface PromotionPieceProps extends PieceViewProps {
  piece: Piece;
  onPromotion: (piece: BoardContent) => void;
}
