import {createGlobalStyle} from "styled-components";

export const ChessBoardStyles = createGlobalStyle`
.chess-board {
    display: grid;
    position: relative;
    user-select: none;
    font-family: "Courier New", serif;
}

.chess-board .react-draggable {
    max-width: 100%;
    max-height: 100%;
    position: relative;
    z-index: 0;
}

.chess-board .react-draggable-dragging {
    z-index: 9999;
}

.chess-board-square {
    position: relative;
}

.chess-board-coordinate {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
}

.chess-board-coordinate--row {
    bottom: 2px;
    right: 2px;
}

.chess-board-coordinate--column {
    top: 2px;
    left: 2px;
}

.chess-board-promotion {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    width: 100%;
    background-color: rgba(255, 255, 255, .85);
}

.chess-board-promotion--piece {
    cursor: pointer;
}

.chess-board-promotion--close {
    font-weight: bold;
    cursor: pointer;
    padding: 15px 0;
}
`;