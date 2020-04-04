import {Position} from "chess-fen";
import {Board} from "./Board";
import {PieceViewProps} from "../views/PieceView";
import {CoordinateViewProps} from "../views/CoordinateView";
import {BoardViewProps} from "../views/BoardView";
import {SquareViewProps} from "../views/SquareView";
import {PositionContent} from "chess-fen/types";
import {ComponentProps} from "react";

export interface SquareRenderingProps extends ComponentProps<"div">, BoardProps {
    board: Board,
    position: Position,
    piece: PositionContent,
    coordinate: string,
    boardSize: number,
    squareSize: number
}

export interface RenderBoardViewProps extends BoardViewProps {
    resizeListener: JSX.Element
}

export interface RenderSquareViewProps extends SquareViewProps {
    Piece: JSX.Element,
    Coordinate: JSX.Element
}

export interface RenderPromotionViewProps extends RenderSquareViewProps {
    onClose: () => void,
    onPromotion: (piece: PositionContent) => void
}

export type PieceRenderer = (props: PieceViewProps) => JSX.Element;
export type BoardRenderer = (props: RenderBoardViewProps) => JSX.Element;
export type SquareRenderer = (props: RenderSquareViewProps) => JSX.Element;
export type CoordinateRenderer = (props: CoordinateViewProps) => JSX.Element;
export type PromotionRenderer = (props: RenderPromotionViewProps) => JSX.Element;

export interface BoardProps {
    rotated: boolean,
    highlightedPosition?: Position|null,
    pieceTheme: PieceTheme,
    boardTheme: BoardTheme
}

export interface BoardRenderingProps {
    renderSquare?: SquareRenderer,
    renderBoard?: BoardRenderer,
    renderPiece?: PieceRenderer,
    renderCoordinate?: CoordinateRenderer,
}

export interface MoveProps {
    piece: PositionContent,
    target: PositionContent,
    fromPosition: Position,
    toPosition: Position,
    board: Board,
    capture: boolean
}

export interface PieceTheme {
    [content: string]: PieceRenderer
}

export interface BoardTheme {
    lightSquare?: string,
    darkSquare?: string,
    highlightedSquare?: string
}

export type MoveValidationHandler = (moveProps: MoveProps) => boolean;
export type InternalSquareClickHandler = (clickedPosition: Position) => any;
export type InternalMoveHandler = (fromPosition: Position, toPosition: Position, pgnBoard: Board) => void;
export type MoveHandler = (props: MoveProps) => void;

export interface Coordinates {
    x: string[],
    y: string[]
}