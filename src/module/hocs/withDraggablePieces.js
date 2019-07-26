import React from "react";
import Draggable from "react-draggable";
import {useBoardRenderers} from "../hooks/useBoardRenderers";
import {Position} from "chess-fen";

export const withDraggablePieces = (BoardComponent) => ({
    onPieceMove,
    ...props
}) => {
    const {renderPiece} = useBoardRenderers(props);

    return (
        <BoardComponent
            {...props}
            renderPiece={({piece, fen, squareSize, position, ...props}) => {
                return (
                    <Draggable
                        position={{x: 0, y: 0}}
                        onStop={(event, newPosition) => {
                            const newBoardPosition = Position
                                .from(newPosition)
                                .toGridPosition(squareSize)
                                .increaseBy(position);
                            onPieceMove({
                                piece,
                                fromPosition: position,
                                toPosition: newBoardPosition,
                                fromCoordinate: position.toCoordinate(),
                                toCoordinate: newBoardPosition.toCoordinate(),
                                target: fen._getPiecePlacement(newBoardPosition)
                            });
                        }}
                    >
                        <div>
                            {renderPiece({piece, squareSize, position, ...props})}
                        </div>
                    </Draggable>
                );
            }}
        />
    )
};