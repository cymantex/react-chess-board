import React from "react";
import Draggable from "react-draggable";
import {Position} from "chess-fen";
import {BoardRenderProps} from "../boards/BoardRenderer";
import {mergeBoardRenderers} from "../utils";

type DraggableBoardHoc = (component: React.FC<BoardRenderProps>) =>
    (props: BoardRenderProps) => JSX.Element;

export const withDraggablePieces: DraggableBoardHoc = (BoardComponent) => ({
    onPieceMove,
    ...props
}) => {
    const {renderPiece} = mergeBoardRenderers(props);
    const draggable = props.draggable;

    return (
        <BoardComponent
            {...props}
            onPieceMove={onPieceMove}
            renderPiece={(props) => {
                const {squareSize, position, board, rotated} = props;

                return (
                    <Draggable
                        position={{x: 0, y: 0}}
                        disabled={!draggable}
                        onStop={(event, newPosition) => {
                            const newBoardPosition = Position
                                .from(newPosition)
                                .toGridPosition(squareSize)
                                .increaseBy(position.rotate(rotated));
                            onPieceMove(position.rotate(rotated), newBoardPosition, board);
                        }}
                    >
                        <div>
                            {renderPiece(props)}
                        </div>
                    </Draggable>
                );
            }}
        />
    )
};