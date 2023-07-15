import { BoardView, BoardViewProps } from "../views/BoardView";
import { SquareView, SquareViewProps } from "../views/SquareView";
import { PieceView, PieceViewProps } from "../views/PieceView";
import { CoordinateView, CoordinateViewProps } from "../views/CoordinateView";
import { PreviewPieceView, PreviewPieceViewProps } from "../views/PreviewPieceView";
import { Board } from "./Board";
import { Position, BoardContent, Piece } from "chess-fen";
import DroppableSquare, { DroppableSquareProps } from "../dnd/DroppableSquare";
import DraggablePiece, { DraggablePieceProps } from "../dnd/DraggablePiece";
import { HTMLAttributes, ReactElement, ReactNode } from "react";

export type BoardRendererFunc = (props: RenderBoardViewProps) => ReactNode;
export type SquareRendererFunc = (props: RenderSquareViewProps) => ReactNode;
export type PieceRendererFunc = (props: PieceViewProps) => ReactNode;
export type CoordinateRendererFunc = (props: CoordinateViewProps) => ReactNode;
export type PreviewPieceRendererFunc = (props: PreviewPieceViewProps) => ReactElement;
export type DroppableSquareRendererFunc = (props: DroppableSquareProps) => ReactNode;
export type DraggablePieceRendererFunc = (props: DraggablePieceProps) => ReactNode;

export interface BoardRenderingProps {
  renderSquare: SquareRendererFunc;
  renderPiece: PieceRendererFunc;
  renderCoordinate: CoordinateRendererFunc;
  renderDroppableSquare: DroppableSquareRendererFunc;
  renderDraggablePiece: DraggablePieceRendererFunc;
  renderBoard: BoardRendererFunc;
  renderPreviewPiece: PreviewPieceRendererFunc;
}

export const defaultRenderBoard: BoardRendererFunc = ({ children, resizeListener, ...props }) => (
  <BoardView {...props}>
    {resizeListener}
    {children}
  </BoardView>
);
export const defaultRenderSquare: SquareRendererFunc = ({ Coordinate, Piece, ...props }) => (
  <SquareView {...props}>
    {Piece}
    {Coordinate}
  </SquareView>
);
export const defaultRenderPiece: PieceRendererFunc = (props) => <PieceView {...props} />;
export const defaultRenderCoordinate: CoordinateRendererFunc = (props) => (
  <CoordinateView {...props} />
);
export const defaultRenderPreviewPiece: PreviewPieceRendererFunc = (props) => (
  <PreviewPieceView {...props} />
);
export const defaultRenderDroppableSquare: DroppableSquareRendererFunc = (props) => (
  <DroppableSquare {...props} />
);
export const defaultRenderDraggablePiece: DraggablePieceRendererFunc = (props) => (
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
