import { render } from "react-dom";
import { ChessBoard, ChessBoardDndProvider } from "react-fen-chess-board";
import { Chess } from "chess.js";
import { useChessBoard } from "./useChessBoard";

export const ControlledChessBoard = ({ chess }: { chess: Chess }) => (
  <ChessBoard {...useChessBoard(chess)} />
);

render(
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
    <ChessBoardDndProvider>
      <ControlledChessBoard chess={new Chess()} />
    </ChessBoardDndProvider>
  </div>,
  document.getElementById("root")
);
