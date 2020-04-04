import React, {Fragment} from "react";
import useResizeAware from "react-resize-aware";
import {Position} from "chess-fen";
import {Board} from "../utils/Board";
import {BoardProps, BoardRenderingProps, InternalMoveHandler, InternalSquareClickHandler} from "../utils/types";
import {mergeBoardRenderers} from "../utils";

export interface BoardRenderProps extends BoardRenderingProps, BoardProps {
    board: Board,
    onSquareClick: InternalSquareClickHandler,
    onPieceMove: InternalMoveHandler,
    draggable?: boolean,
    clickable?: boolean
}

export const BoardRenderer: React.FC<BoardRenderProps> = ({
    board,
    ...boardRenderingProps
}) => {
    const {
        renderSquare,
        renderBoard,
        renderPiece,
        renderCoordinate
    } = mergeBoardRenderers(boardRenderingProps);
    const [resizeListener, size] = useResizeAware();
    const boardSize = size.width;
    const squareSize = boardSize / board.columns;
    const {rotated, pieceTheme, boardTheme} = boardRenderingProps;

    return renderBoard({
        children: board.coordinates.y.map((yCoordinate, i) => {
            return (
                <Fragment key={i}>
                    {board.coordinates.x.map((xCoordinate, j) => {
                        const coordinate = xCoordinate + yCoordinate;
                        const position = Position.fromCoordinate(coordinate);
                        const piece = board.get(position);
                        const props = {
                            board,
                            position,
                            boardSize,
                            squareSize,
                            coordinate,
                            rotated,
                            piece,
                            pieceTheme,
                            boardTheme
                        };

                        return renderSquare({
                            Coordinate: renderCoordinate(props),
                            Piece: renderPiece(props),
                            lightSquare: ((j - i) % 2) === 0,
                            key: coordinate,
                            ...props
                        });
                    })}
                </Fragment>
            );
        }),
        board,
        height: boardSize,
        resizeListener
    });
};

export default BoardRenderer;