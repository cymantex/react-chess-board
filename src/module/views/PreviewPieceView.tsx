import React, { CSSProperties } from "react";
import { Board } from "../utils/Board";
import { PieceDragObject } from "../types";

export interface PreviewPieceViewProps {
  pieceDragObject: PieceDragObject;
  board: Board;
  style: CSSProperties;
}

export const PreviewPieceView = React.forwardRef<HTMLDivElement, PreviewPieceViewProps>(
  ({ pieceDragObject, board, style }, ref) => (
    <div
      ref={ref}
      style={{ width: `${board.squareSize}px`, height: `${board.squareSize}px`, ...style }}
    >
      {board.pieceTheme[pieceDragObject.type]({ style })}
    </div>
  )
);

export default PreviewPieceView;
