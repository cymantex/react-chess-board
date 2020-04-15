import React, {useState} from "react";
import {render} from "react-dom";
import {ChessBoard} from "./module/ChessBoard";
import {Position} from "chess-fen";
import {defaultRenderSquare} from "./module/utils/renderers";
import {PromotionView} from "./module/views/PromotionView";
import {positionContentToFenPiece} from "chess-fen/utils";
import {BoardView} from "./module/views/BoardView";
import {ChessBoardDndProvider} from "./module/dnd/ChessBoardDndProvider";

const Chess = require("chess.js");

const chess = new Chess();

export interface Promotion {
    from: Position,
    to: Position
}

export const ControlledChessBoard = () => {
    const [fen, setFen] = useState(chess.fen());
    const [promotion, setPromotion] = useState<Promotion|null>(null);

    return (
        <ChessBoard
            fen={fen}
            onMove={(props) => {
                const {fromPosition, toPosition, board} = props;

                if (board.isPromotion(fromPosition, toPosition)) {
                    setPromotion({from: fromPosition, to: toPosition});
                } else {
                    chess.move({from: fromPosition.toCoordinate(), to: toPosition.toCoordinate()});
                    setFen(chess.fen());
                }
            }}
            renderBoard={({resizeListener, children, ...props}) => (
                <BoardView
                    onContextMenu={event => event.preventDefault()}
                    onMouseUp={event => {
                        if (event.button === 2) {
                            console.log("Up click");
                        }
                    }}
                    onMouseDown={event => {
                        if (event.button === 2) {
                            console.log("Down click");
                        }
                    }}
                    {...props}
                >
                    {resizeListener}
                    {children}
                </BoardView>
            )}
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
                                    promotion: positionContentToFenPiece(piece).toLowerCase()
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
            draggable
        />
    );
};

render(
    <div style={{maxWidth: "1000px", margin: "0 auto"}}>
        <ChessBoardDndProvider>
            <ControlledChessBoard/>
        </ChessBoardDndProvider>
    </div>,
    document.getElementById("root")
);