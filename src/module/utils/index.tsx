import React from "react";
import {
    BoardRenderer,
    BoardRenderingProps,
    CoordinateRenderer,
    MoveProps, MoveValidationHandler,
    PieceRenderer,
    SquareRenderer
} from "./types";
import {BoardView} from "../views/BoardView";
import {SquareView} from "../views/SquareView";
import {PieceView} from "../views/PieceView";
import {CoordinateView} from "../views/CoordinateView";
import {Position} from "chess-fen";
import {Board} from "./Board";
import Fen from "chess-fen/Fen";
import {ColoredPiece} from "chess-fen/types";

export const defaultRenderBoard: BoardRenderer = ({children, board, height, resizeListener, ...props}) => (
    <BoardView
        board={board}
        height={height} {...props}>
        {resizeListener}
        {height > 0 && (children)}
    </BoardView>
);
export const defaultRenderSquare: SquareRenderer = ({Coordinate, Piece, ...props}) => (
    <SquareView {...props}>
        {Piece}
        {Coordinate}
    </SquareView>
);
export const defaultRenderPiece: PieceRenderer = (props) => <PieceView {...props}/>;
export const defaultRenderCoordinate: CoordinateRenderer = (props) => <CoordinateView {...props}/>;

export const mergeBoardRenderers: (props: BoardRenderingProps) => Required<BoardRenderingProps> = ({
   renderBoard = defaultRenderBoard,
   renderSquare = defaultRenderSquare,
   renderPiece = defaultRenderPiece,
   renderCoordinate = defaultRenderCoordinate
}) => ({
    renderBoard,
    renderSquare,
    renderPiece,
    renderCoordinate
});

export const isPawnMove: MoveValidationHandler = (props) => {
    const {board, piece, capture, fromPosition, toPosition} = props;

    const isPawnMove = (canMakeDoubleMove: boolean): boolean => {
        const range = canMakeDoubleMove ? 2 : 1;
        return (
            (!capture && fromPosition.isVerticalTo(toPosition, range)) ||
            (capture && fromPosition.isDiagonalTo(toPosition, 1))
        );
    };

    if(board.toMove === "white" && piece === ColoredPiece.WhitePawn){
        return fromPosition.isNorthTo(toPosition) && isPawnMove(fromPosition.y === board.rows - 2);
    } else if(board.toMove === "black" && piece === ColoredPiece.BlackPawn){
        return fromPosition.isSouthTo(toPosition) && isPawnMove(fromPosition.y === 1);
    }

    return false;
};

export const isPromotion: MoveValidationHandler = (props): boolean => {
    const {board, fromPosition, toPosition} = props;

    if(board.toMove === "white"){
        return isPawnMove(props) && fromPosition.y === 1 && toPosition.y === 0;
    }

    return isPawnMove(props) && (fromPosition.y === board.rows - 2) && (toPosition.y === board.rows - 1);
};

export const toMoveProps = (fromPosition: Position, toPosition: Position, board: Board): MoveProps => {
    const piece = board.get(fromPosition.rotate(board.rotated));
    const target = board.get(toPosition.rotate(board.rotated));
    return {
        board,
        fromPosition: fromPosition.rotate(board.rotated),
        toPosition: toPosition.rotate(board.rotated),
        piece,
        target,
        capture: (target !== null && target !== Fen.emptySquare) ||
            (piece.includes("pawn") && toPosition.toCoordinate() === board.enPassantSquare)
    };
};