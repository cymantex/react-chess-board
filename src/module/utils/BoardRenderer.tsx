import React, {Fragment} from "react";
import {Position} from "chess-fen";
import {Board} from "./Board";
import Preview from "react-dnd-preview";
import {MoveHandler, PreviewGeneratorProps} from "../types";
import {BoardRenderingProps} from "./renderers";

export interface BoardRenderProps extends BoardRenderingProps {
    board: Board,
    onMove?: MoveHandler,
    resizeListener: React.ReactNode,
}

export const BoardRenderer: React.FC<BoardRenderProps> = ({
    board,
    resizeListener,
    children,
    onMove,
    ...boardRenderingProps
}) => {
    const {
        renderPiece,
        renderSquare,
        renderBoard,
        renderCoordinate,
        renderPreviewPiece
    } = boardRenderingProps;

    return (
        <>
            {renderBoard({
                children: (
                    <>
                        {board.coordinates.y.map((y, i) => {
                            return (
                                <Fragment key={i}>
                                    {board.coordinates.x.map((x, j) => {
                                        const coordinate = x + y;
                                        const position = Position.fromCoordinate(coordinate);
                                        const props = {board, position};

                                        return (
                                            <Fragment key={coordinate}>
                                                {renderSquare({
                                                    Coordinate: renderCoordinate(props),
                                                    Piece: renderPiece(props),
                                                    lightSquare: ((j - i) % 2) === 0,
                                                    ...props
                                                })}
                                            </Fragment>
                                        );
                                    })}
                                </Fragment>
                            );
                        })}
                        {onMove ? (
                            <Preview
                                generator={(props: PreviewGeneratorProps) => renderPreviewPiece({
                                    pieceDragObject: props.item,
                                    board,
                                    ...props
                                })}
                            />
                        ) : null}
                    </>
                ),
                style: {
                    gridTemplateColumns: `repeat(${board.columns}, ${board.squareSize}px)`,
                    gridTemplateRows: `repeat(${board.rows}, ${board.squareSize}px)`
                },
                resizeListener
            })}
        </>
    );
};

export default BoardRenderer;