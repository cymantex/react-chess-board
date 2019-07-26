import {useState} from "react";
import {Fen} from "chess-fen";

export const useFenBoard = (defaultFen = Fen.startingPosition) => {
    const [fen, setFen] = useState(new Fen(defaultFen));
    const [highlightedPosition, setHighlightedPosition] = useState(false);

    const handlePieceMove = ({fromPosition, toPosition}) => {
        setFen(Fen.from(fen.makeMove(fromPosition, toPosition)));
    };

    const handleSquareClicked = ({position}) => {
        if(highlightedPosition){
            setFen(Fen.from(fen.makeMove(highlightedPosition, position)));
            setHighlightedPosition(false);
        } else {
            setHighlightedPosition(position);
        }
    };

    return {
        fen,
        onPieceMove: handlePieceMove,
        highlightedPosition,
        onSquareClicked: handleSquareClicked
    };
};