import { Fragment } from "react";
import { SquareRenderingProps } from "../utils/renderers";

export interface CoordinateViewProps extends SquareRenderingProps {}

export const CoordinateView = ({ board, position, ...props }: CoordinateViewProps) => {
  const coordinate = position.toCoordinate();
  const rowCoordinate =
    position.rotate(board.rotated).y === board.rows - 1 ? coordinate.charAt(0) : "";
  const columnCoordinate = position.rotate(board.rotated).x === 0 ? coordinate.charAt(1) : "";

  return (
    <Fragment>
      <span className="chess-board-coordinate chess-board-coordinate--row" {...props}>
        {rowCoordinate}
      </span>
      <span className="chess-board-coordinate chess-board-coordinate--column" {...props}>
        {columnCoordinate}
      </span>
    </Fragment>
  );
};

export default CoordinateView;
