import React from "react";
import {BoardView} from "../views/BoardView";
import {SquareView} from "../views/SquareView";
import {PieceView} from "../views/PieceView";
import {CoordinateView} from "../views/CoordinateView";

export const useBoardRenderers = ({
    renderBoard = ({board, height, resizeListener, ...props}) => (
        <BoardView height={height} {...props}>
            {resizeListener}
            {height > 0 && (board)}
        </BoardView>
    ),
    renderSquare = ({coordinate, piece, ...props}) => (
        <SquareView {...props}>
            {piece}
            {coordinate}
        </SquareView>
    ),
    renderPiece = (props) => <PieceView {...props}/>,
    renderCoordinate = (props) => <CoordinateView {...props}/>
}) => ({
    renderBoard,
    renderSquare,
    renderPiece,
    renderCoordinate
});