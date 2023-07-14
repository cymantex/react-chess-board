import { createGlobalStyle } from "styled-components";

export const ChessBoardStyles = createGlobalStyle`
  .chess-board {
    display: grid;
    flex-wrap: wrap;
    position: relative;
    user-select: none;
    font-family: "Courier New", serif;
  }

  .chess-board-piece--draggable {
    cursor: grab;
  }

  .chess-board-square {
    position: relative;
  }

  .chess-board-square--clickable {
    cursor: pointer;
  }

  .chess-board-coordinate {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px #000;
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

export default ChessBoardStyles;
