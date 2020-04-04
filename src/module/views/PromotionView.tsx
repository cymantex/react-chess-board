import React from "react";
import {PromotionRenderer} from "../utils/types";
import {SquareView} from "./SquareView";
import {ColoredPiece} from "chess-fen/types";

export const PromotionView: PromotionRenderer = ({Coordinate, Piece, onPromotion, onClose, style = {}, ...props}) => {
    const {pieceTheme, board, rotated} = props;

    const PromotionPiece = ({pieceName}: {pieceName: string}) => (
        <div className="chess-board-promotion--piece"
             onClick={() => onPromotion(`${board.toMove} ${pieceName}` as ColoredPiece)}>
            {pieceTheme[`${board.toMove} ${pieceName}`](props)}
        </div>
    );

    return (
        <SquareView {...props}>
            <div
                style={{
                    transform: (
                        ((!rotated && board.toMove === "black") || (rotated && board.toMove === "white"))
                            ? "translate(0, calc(-75% - 15px))" : "none"
                    ),
                    ...style
                }}
                className="chess-board-promotion"
            >
                <PromotionPiece pieceName="queen"/>
                <PromotionPiece pieceName="rook"/>
                <PromotionPiece pieceName="bishop"/>
                <PromotionPiece pieceName="knight"/>
                <div className="chess-board-promotion--close" onClick={onClose}>
                    close
                </div>
            </div>
        </SquareView>
    );
};