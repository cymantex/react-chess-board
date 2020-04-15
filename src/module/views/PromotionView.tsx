import React from "react";
import {SquareView} from "./SquareView";
import {RenderPromotionViewProps} from "../utils/renderers";
import {BoardContent, Piece as Pieces} from "chess-fen/types";

export const PromotionView: React.FC<RenderPromotionViewProps> = ({
    Coordinate,
    Piece,
    onPromotion,
    onClose,
    style = {},
    ...props
}) => {
    const {board} = props;

    const PromotionPiece: React.FC<{piece: Pieces}> = ({piece}) => (
        <div className="chess-board-promotion--piece"
             onClick={() => onPromotion(`${board.toMove} ${piece}` as BoardContent)}>
            {board.pieceTheme[`${board.toMove} ${piece}`](props)}
        </div>
    );

    return (
        <SquareView {...props}>
            <div
                style={{
                    transform: (
                        ((!board.rotated && board.toMove === "black") || (board.rotated && board.toMove === "white"))
                            ? "translate(0, calc(-75% - 15px))" : "none"
                    ),
                    ...style
                }}
                className="chess-board-promotion"
            >
                <PromotionPiece piece={Pieces.Queen}/>
                <PromotionPiece piece={Pieces.Rook}/>
                <PromotionPiece piece={Pieces.Bishop}/>
                <PromotionPiece piece={Pieces.Knight}/>
                <div className="chess-board-promotion--close" onClick={onClose}>
                    close
                </div>
            </div>
        </SquareView>
    );
};

export default PromotionView;