import React from "react";
import {Fen} from "chess-fen";
import {Board} from "./utils/Board";
import {mergeBoardRenderers} from "./utils/renderers";
import {ChessBoardStyles} from "./styles";
import {BoardTheme, MoveHandler, PieceTheme} from "./types";
import BoardRenderer from "./utils/BoardRenderer";
import {DroppableSquare} from "./dnd/DroppableSquare";
import {DraggablePiece} from "./dnd/DraggablePiece";
import useResizeAware from "react-resize-aware";
import {BoardRenderingProps} from "./utils/renderers";

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
        renderBoard
    } = mergeBoardRenderers(props);

    const boardProps = {
        board,
        onPieceMove: onMove,
        resizeListener,
        ...props,
        renderPiece,
        renderSquare,
        renderPreviewPiece,
        renderCoordinate,
        renderBoard
    };

    return (
        <>
            <ChessBoardStyles/>
            <BoardRenderer
                {...boardProps}
                onMove={onMove}
                renderSquare={(squareViewProps) => (
                    onMove ? (
                        <DroppableSquare
                            renderSquare={renderSquare}
                            onPieceMove={onMove}
                            {...squareViewProps}
                        />
                    ) : renderSquare(squareViewProps)
                )}
                renderPiece={(pieceViewProps) =>
                    onMove ? (
                        <DraggablePiece
                            renderPiece={renderPiece}
                            {...pieceViewProps}
                        />
                    ) : renderPiece(pieceViewProps)
                }
            />
        </>
    );
};

export default ChessBoard;