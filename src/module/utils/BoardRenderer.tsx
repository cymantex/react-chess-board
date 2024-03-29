import { Fragment, ReactNode } from "react";
import { Board } from "./Board";
import { Preview } from "react-dnd-preview";
import { MoveHandler, PreviewGeneratorProps } from "../types";
import { BoardRenderingProps, PreviewPieceRendererFunc } from "./renderers";
import { SquareRenderer } from "./SquareRenderer";

export interface BoardRendererProps extends BoardRenderingProps {
  board: Board;
  onMove?: MoveHandler;
  resizeListener: ReactNode;
  renderPreviewPiece: PreviewPieceRendererFunc;
}

export const BoardRenderer = ({
  board,
  resizeListener,
  onMove,
  renderPiece,
  renderSquare,
  renderBoard,
  renderCoordinate,
  renderPreviewPiece,
  renderDroppableSquare,
  renderDraggablePiece,
}: BoardRendererProps) => {
  return (
    <>
      {renderBoard({
        children: (
          <>
            {board.coordinates.y.map((y, i) => {
              return (
                <Fragment key={i}>
                  {board.coordinates.x.map((x, j) => {
                    const coordinate = x + y;
                    return (
                      <SquareRenderer
                        key={coordinate}
                        coordinate={coordinate}
                        lightSquare={(j - i) % 2 === 0}
                        board={board}
                        onMove={onMove}
                        renderSquare={renderSquare}
                        renderPiece={renderPiece}
                        renderCoordinate={renderCoordinate}
                        renderDroppableSquare={renderDroppableSquare}
                        renderDraggablePiece={renderDraggablePiece}
                      />
                    );
                  })}
                </Fragment>
              );
            })}
            {onMove && (
              <Preview
                generator={(props: PreviewGeneratorProps) =>
                  renderPreviewPiece({
                    pieceDragObject: props.item,
                    style: props.style,
                    board,
                  })
                }
              />
            )}
          </>
        ),
        style: {
          gridTemplateColumns: `repeat(${board.columns}, ${board.squareSize}px)`,
          gridTemplateRows: `repeat(${board.rows}, ${board.squareSize}px)`,
        },
        resizeListener,
      })}
    </>
  );
};

export default BoardRenderer;
