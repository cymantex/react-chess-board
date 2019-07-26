import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {Board} from "./boards/Board";
import {useFenBoard} from "./hooks/useFenBoard";
import {DraggableAndClickableBoard} from "./boards/DraggableAndClickableBoard";
import {DraggableBoard} from "./boards/DraggableBoard";
import {ClickableBoard} from "./boards/ClickableBoard";
import {Fen} from "chess-fen";

export const ChessBoard = ({
    fen = Fen.startingPosition,
    clickable = false,
    draggable = false,
    ...props
}) => {
    const fenBoardProps = useFenBoard(props.fen);

    if(draggable && clickable){
        return (
            <DraggableAndClickableBoard
                {...props}
                {...fenBoardProps}
            />
        );
    } else if(draggable){
        return (
            <DraggableBoard
                {...props}
                {...fenBoardProps}
            />
        );
    } else if(clickable){
        return (
            <ClickableBoard
                {...props}
                {...fenBoardProps}
            />
        );
    }

    return (
        <Board {...props}/>
    );
};

ChessBoard.propTypes = {
    ...Board.propTypes,
    fen: PropTypes.string,
    clickable: PropTypes.bool,
    draggable: PropTypes.bool
};