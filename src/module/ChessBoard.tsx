import React from "react";
import {Fen} from "chess-fen";
import {Board} from "./utils/Board";
import {BoardRenderingProps, mergeBoardRenderers} from "./utils/renderers";
import {ChessBoardStyles} from "./styles";
import {BoardTheme, MoveHandler, PieceTheme} from "./types";
import BoardRenderer from "./utils/BoardRenderer";
import useResizeAware from "react-resize-aware";

export interface ChessBoardProps extends React.HTMLAttributes<HTMLElement>, Partial<BoardRenderingProps> {
    fen?: string | Fen,
    onMove?: MoveHandler,
    rotated?: boolean,
    pieceTheme?: PieceTheme,
    boardTheme?: BoardTheme
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
    fen = Fen.startingPosition,
    onMove,
    rotated = false,
    pieceTheme = {},
    boardTheme = {},
    ...props
}) => {
    const [resizeListener, size] = useResizeAware();
    const board = new Board({fen, size: size.width, pieceTheme, boardTheme, rotated});

    const {
        renderPiece,
        renderSquare,
        renderPreviewPiece,
        renderCoordinate,
        renderBoard,
        renderDroppableSquare,
        renderDraggablePiece
    } = mergeBoardRenderers(props);

    const boardProps = {
        board,
        onMove,
        resizeListener,
        ...props,
        renderDroppableSquare,
        renderDraggablePiece,
        renderPiece,
        renderSquare,
        renderPreviewPiece,
        renderCoordinate,
        renderBoard
    };

    return (
        <>
            <ChessBoardStyles/>
            <BoardRenderer {...boardProps}/>
        </>
    );
};

export default ChessBoard;