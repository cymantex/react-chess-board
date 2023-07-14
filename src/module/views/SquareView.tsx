import classNames from "classnames";
import { ConnectDropTarget } from "react-dnd";
import { SquareRenderingProps } from "../utils/renderers";

export interface SquareViewProps extends SquareRenderingProps {
  lightSquare: boolean;
  highlighted?: boolean;
  dropTarget?: ConnectDropTarget;
  isOver?: boolean;
  canDrop?: boolean;
}

export const SquareView = ({
  board,
  lightSquare,
  position,
  children,
  dropTarget,
  style = {},
  className,
  isOver,
  canDrop,
  ...props
}: SquareViewProps) => {
  const piece = board.get(position);

  return (
    <div
      id={position.toCoordinate()}
      ref={dropTarget ? dropTarget : null}
      style={{
        background: lightSquare ? board.boardTheme.lightSquare : board.boardTheme.darkSquare,
        ...style,
      }}
      className={classNames(
        {
          "chess-board-square": true,
          "chess-board-square--light": lightSquare,
          "chess-board-square--dark": !lightSquare,
          [piece]: piece,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default SquareView;
