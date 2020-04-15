import React, {ComponentProps} from "react";
import {BoardView, BoardViewProps} from "../views/BoardView";
import {SquareView, SquareViewProps} from "../views/SquareView";
import {PieceView, PieceViewProps} from "../views/PieceView";
import {CoordinateView, CoordinateViewProps} from "../views/CoordinateView";
import {PreviewPieceView, PreviewPieceViewProps} from "../views/PreviewPieceView";
import {Board} from "./Board";
import {Position} from "chess-fen";
import {BoardContent} from "chess-fen/types";

export type BoardRenderer = (props: RenderBoardViewProps) => React.ReactNode;
export const defaultRenderBoard: BoardRenderer = ({children, resizeListener, ...props}) => (
    <BoardView {...props}>
        {resizeListener}
        {children}
    </BoardView>
);

export type SquareRenderer = (props: RenderSquareViewProps) => React.ReactNode;
export const defaultRenderSquare: SquareRenderer = ({Coordinate, Piece, ...props}) => (
    <SquareView {...props}>
        {Piece}
        {Coordinate}
    </SquareView>
);

export type PieceRenderer = (props: PieceViewProps) => React.ReactNode;
export const defaultRenderPiece: PieceRenderer = (props) => <PieceView {...props}/>;

export type CoordinateRenderer = (props: CoordinateViewProps) => React.ReactNode;
export const defaultRenderCoordinate: CoordinateRenderer = (props) => <CoordinateView {...props}/>;

export type PreviewPieceRenderer = (props: PreviewPieceViewProps) => React.ReactNode;
export const defaultRenderPreviewPiece: PreviewPieceRenderer = (props) => <PreviewPieceView {...props}/>;

export interface BoardRenderingProps {
    renderSquare: SquareRenderer,
    renderBoard: BoardRenderer,
    renderPiece: PieceRenderer,
    renderCoordinate: CoordinateRenderer,
    renderPreviewPiece: PreviewPieceRenderer
}

export const mergeBoardRenderers: (props: Partial<BoardRenderingProps>) => Required<BoardRenderingProps> = ({
    renderBoard = defaultRenderBoard,
    renderSquare = defaultRenderSquare,
    renderPiece = defaultRenderPiece,
    renderCoordinate = defaultRenderCoordinate,
    renderPreviewPiece = defaultRenderPreviewPiece
}) => ({
    renderBoard,
    renderSquare,
    renderPiece,
    renderCoordinate,
    renderPreviewPiece
});

export interface SquareRenderingProps extends ComponentProps<any> {
    board: Board,
    position: Position
}

export interface RenderBoardViewProps extends BoardViewProps {
    resizeListener: React.ReactNode
}

export interface RenderSquareViewProps extends SquareViewProps {
    Piece: React.ReactNode
    Coordinate: React.ReactNode
}

export interface RenderPromotionViewProps extends RenderSquareViewProps {
    onClose: () => void,
    onPromotion: (piece: BoardContent) => void
}