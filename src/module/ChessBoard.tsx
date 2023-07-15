import Fen from "chess-fen";
import { Board } from "./utils/Board";
import { BoardRenderingProps, mergeBoardRenderers } from "./utils/renderers";
import { ChessBoardStyles } from "./styles";
import { BoardTheme, MoveHandler, PieceTheme } from "./types";
import BoardRenderer from "./utils/BoardRenderer";
import { HTMLAttributes } from "react";
import { useResizeAware } from "./external/react-resize-aware/useResizeAware";
import { cardinal } from "./themes/pieces/cardinal";
import { blue } from "./themes/boards/blue";

export interface ChessBoardProps extends HTMLAttributes<HTMLElement>, Partial<BoardRenderingProps> {
  fen?: string | Fen;
  onMove?: MoveHandler;
  rotated?: boolean;
  pieceTheme?: PieceTheme;
  boardTheme?: BoardTheme;
}

export const ChessBoard = ({
  fen = Fen.startingPosition,
  onMove,
  rotated = false,
  pieceTheme = cardinal,
  boardTheme = blue,
  ...props
}: ChessBoardProps) => {
  const [resizeListener, size] = useResizeAware();
  const board = new Board({ fen, size: size.width || 0, pieceTheme, boardTheme, rotated });

  const boardProps = {
    board,
    onMove,
    resizeListener,
    ...props,
    ...mergeBoardRenderers(props),
  };

  return (
    <>
      <ChessBoardStyles />
      <BoardRenderer {...boardProps} />
    </>
  );
};

export default ChessBoard;
