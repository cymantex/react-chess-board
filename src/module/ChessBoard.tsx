import React, {ComponentProps} from "react";
import {Fen} from "chess-fen";
import {Board} from "./utils/Board";
import {mergeBoardRenderers} from "./utils/renderers";
import {ChessBoardStyles} from "./styles";
import {BoardTheme, MoveHandler, PieceTheme} from "./types";
import BoardRenderer from "./utils/BoardRenderer";
import {DroppableSquare} from "./dnd/DroppableSquare";
import {DraggablePiece} from "./dnd/DraggablePiece";
import TouchBackend from "react-dnd-touch-backend";
import {DndProvider, DndProviderProps} from "react-dnd";
import useResizeAware from "react-resize-aware";
import {BoardRenderingProps} from "./utils/renderers";

export interface ChessBoardProps extends ComponentProps<any>, Partial<BoardRenderingProps> {
    fen?: string | Fen,
    onMove?: MoveHandler,
    draggable?: boolean,
    pieceTheme?: PieceTheme,
    boardTheme?: BoardTheme,
    dndProviderProps?: DndProviderProps<any, any>
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
    fen = Fen.startingPosition,
    onMove = () => {},
    rotated = false,
    draggable = false,
    pieceTheme = {},
    boardTheme = {},
    dndProviderProps,
    ...props
}) => {
    const [resizeListener, size] = useResizeAware();
    const board = new Board({fen, size: size.width, pieceTheme, boardTheme});

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

    const dndProps = dndProviderProps ? dndProviderProps : {
        backend: TouchBackend,
        options: {enableMouseEvents: true,},
    };

    return (
        <DndProvider {...dndProps}>
            <ChessBoardStyles/>
            <BoardRenderer
                {...boardProps}
                onMove={onMove}
                renderSquare={(squareViewProps) => (
                    draggable ? (
                        <DroppableSquare
                            renderSquare={renderSquare}
                            onPieceMove={onMove}
                            {...squareViewProps}
                        />
                    ) : renderSquare(squareViewProps)
                )}
                renderPiece={(pieceViewProps) =>
                    draggable ? (
                        <DraggablePiece
                            renderPiece={renderPiece}
                            {...pieceViewProps}
                        />
                    ) : renderPiece(pieceViewProps)
                }
            />
        </DndProvider>
    );
};

export default ChessBoard;