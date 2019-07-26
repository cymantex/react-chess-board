import React, {Fragment} from "react";
import PropTypes from "prop-types";
import useResizeAware from "react-resize-aware";
import {useBoardRenderers} from "../hooks/useBoardRenderers";
import {Position, Fen} from "chess-fen";

export const Board = ({
    fen,
    coordinates = {
        x: ["a", "b", "c", "d", "e", "f", "g", "h"],
        y: [8, 7, 6, 5, 4, 3, 2, 1]
    },
    ...boardProps
}) => {
    const {
        renderSquare,
        renderBoard,
        renderPiece,
        renderCoordinate
    } = useBoardRenderers(boardProps);
    const [resizeListener, size] = useResizeAware();
    const boardSize = size.width;

    return renderBoard({
        board: coordinates.y.map((yCoordinate, i) => {
            const columns = coordinates.x.length;
            const squareSize = boardSize / columns;

            return (
                <Fragment key={i}>
                    {coordinates.x.map((xCoordinate, j) => {
                        const coordinate = xCoordinate + yCoordinate;
                        const position = new Position(j, i);
                        const piece = fen._getPiecePlacement(position);
                        const props = {
                            fen,
                            position: new Position(j, i),
                            boardSize,
                            squareSize,
                            coordinates,
                        };

                        return renderSquare({
                            coordinate: renderCoordinate({coordinate, piece, ...props}),
                            piece: renderPiece({coordinate, piece, ...props}),
                            lightSquare: ((j - i) % 2) === 0,
                            key: coordinate,
                            ...props
                        });
                    })}
                </Fragment>
            );
        }),
        fen,
        height: boardSize,
        columns: coordinates.x.length,
        resizeListener
    });
};

Board.propTypes = {
    fen: PropTypes.instanceOf(Fen),
    renderBoard: PropTypes.func,
    renderSquare: PropTypes.func,
    renderPiece: PropTypes.func,
    renderCoordinate: PropTypes.func,
    coordinates: PropTypes.shape({
        x: PropTypes.array.isRequired,
        y: PropTypes.array.isRequired
    })
};