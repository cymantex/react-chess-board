import React from "react";
import PropTypes from "prop-types";
import {WhitePawn} from "../pieces/WhitePawn";
import {BlackPawn} from "../pieces/BlackPawn";
import {BlackKnight} from "../pieces/BlackKnight";
import {BlackBishop} from "../pieces/BlackBishop";
import {BlackRook} from "../pieces/BlackRook";
import {BlackQueen} from "../pieces/BlackQueen";
import {BlackKing} from "../pieces/BlackKing";
import {WhiteKnight} from "../pieces/WhiteKnight";
import {WhiteBishop} from "../pieces/WhiteBishop";
import {WhiteRook} from "../pieces/WhiteRook";
import {WhiteQueen} from "../pieces/WhiteQueen";
import {WhiteKing} from "../pieces/WhiteKing";
import {blackPieces, whitePieces, emptySquare} from "chess-fen";

export const PieceView = ({
    piece,
    coordinate,
    fen,
    position,
    boardSize,
    squareSize,
    coordinates,
    ...props
}) => {
    const renderPiece = (Piece) => {
        return <Piece {...props}/>;
    };

    switch(piece){
    case blackPieces.pawn:
        return renderPiece(BlackPawn);
    case blackPieces.knight:
        return renderPiece(BlackKnight);
    case blackPieces.bishop:
        return renderPiece(BlackBishop);
    case blackPieces.rook:
        return renderPiece(BlackRook);
    case blackPieces.queen:
        return renderPiece(BlackQueen);
    case blackPieces.king:
        return renderPiece(BlackKing);
    case whitePieces.pawn:
        return renderPiece(WhitePawn);
    case whitePieces.knight:
        return renderPiece(WhiteKnight);
    case whitePieces.bishop:
        return renderPiece(WhiteBishop);
    case whitePieces.rook:
        return renderPiece(WhiteRook);
    case whitePieces.queen:
        return renderPiece(WhiteQueen);
    case whitePieces.king:
        return renderPiece(WhiteKing);
    case emptySquare:
        return <div/>;
    default:
        throw new Error(`Unexpected piece ${piece}`);
    }
};
PieceView.propTypes = {
    piece: PropTypes.string.isRequired
};