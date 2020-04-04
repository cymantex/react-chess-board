import React, {useState} from "react";
import {render} from "react-dom";
import {ChessBoard} from "./module/boards/ChessBoard";
import {Position} from "chess-fen";
import {defaultRenderSquare, isPromotion} from "./module/utils";
import {PromotionView} from "./module/views/PromotionView";
import {coloredPieceToFenPiece} from "chess-fen/utils";

const Chess = require('chess.js');

const chess = new Chess();

export interface Promotion {
    from: Position,
    to: Position
}

export const ControlledChessBoard = () => {
    //TODO: Use a reducer instead?
    const [fen, setFen] = useState(chess.fen());
    const [promotion, setPromotion] = useState<Promotion|null>(null);

    return (
        <ChessBoard
            fen={fen}
            onMove={(props) => {
                const {fromPosition, toPosition} = props;

                if (isPromotion(props)) {
                    setPromotion({from: fromPosition, to: toPosition});
                } else {
                    chess.move({from: fromPosition.toCoordinate(), to: toPosition.toCoordinate()});
                    setFen(chess.fen());
                }
            }}
            onSquareClick={(clickedPosition, highlightedPosition) => {
                if (highlightedPosition) {
                    chess.move({from: highlightedPosition.toCoordinate(), to: clickedPosition.toCoordinate()});
                    setFen(chess.fen());
                }
            }}
            renderSquare={(props) => {
                if (promotion && promotion.to.equals(props.position)) {
                    return (
                        <PromotionView
                            key={props.coordinate}
                            onClose={() => setPromotion(null)}
                            onPromotion={(piece) => {
                                chess.move({
                                    from: promotion.from.toCoordinate(),
                                    to: promotion.to.toCoordinate(),
                                    promotion: coloredPieceToFenPiece(piece).toLowerCase()
                                });
                                setPromotion(null);
                                setFen(chess.fen());
                            }}
                            {...props}
                        />
                    );
                }

                return defaultRenderSquare(props);
            }}
            rotated
            draggable={promotion === null}
        />
    );
};

render(
    <div style={{maxWidth: "1000px", margin: "0 auto"}}>
        <ControlledChessBoard/>
    </div>,
    document.getElementById("root")
);