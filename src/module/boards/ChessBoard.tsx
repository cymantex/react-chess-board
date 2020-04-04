import React, {ComponentProps} from "react";
import {DraggableAndClickableBoard} from "./DraggableAndClickableBoard";
import {Fen, Position} from "chess-fen";
import {Board} from "../utils/Board";
import {
    BoardRenderingProps,
    InternalMoveHandler,
    InternalSquareClickHandler,
    MoveHandler,
    BoardProps
} from "../utils/types";
import {cardinal} from "../pieceThemes/cardinal";
import {blue} from "../boardThemes/blue";
import {toMoveProps} from "../utils";
import {ChessBoardStyles} from "../styled/ChessBoardStyles";

interface ChessBoardProps extends ComponentProps<"div">, Partial<BoardRenderingProps>, Partial<BoardProps> {
    fen?: string|Fen,
    onMove?: MoveHandler,
    onSquareClick?: (clickedPosition: Position, highlightedPosition?: Position) => void,
    clickable?: boolean,
    draggable?: boolean
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
    fen = Fen.startingPosition,
    onMove = () => {},
    onSquareClick = () => {},
    rotated = false,
    clickable = false,
    draggable = false,
    //TODO: Make this an array instead?
    highlightedPosition,
    pieceTheme = {},
    boardTheme = {},
    style = {},
    ...props
}) => {
    const board = new Board(fen, rotated);

    const handleMove: InternalMoveHandler = (fromPosition: Position, toPosition: Position, board: Board) => {
        onMove(toMoveProps(fromPosition, toPosition, board));
    };

    const handleSquareClicked: InternalSquareClickHandler = (clickedPosition) => {
        if(!clickable) return;

        if(clickedPosition && highlightedPosition) {
            onSquareClick(clickedPosition.rotate(rotated), highlightedPosition);
        } else if(clickedPosition) {
            onSquareClick(clickedPosition.rotate(rotated));
        }
    };

    const boardProps = {
        board,
        draggable,
        clickable,
        onPieceMove: handleMove,
        onSquareClick: handleSquareClicked,
        highlightedPosition,
        rotated,
        pieceTheme: {...cardinal, ...pieceTheme},
        boardTheme: {...blue, ...boardTheme},
        ...props,
    };

    return (
        <>
            <ChessBoardStyles/>
            <DraggableAndClickableBoard {...boardProps}/>
        </>
    );
};

export default ChessBoard;