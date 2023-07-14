import { BoardContent, Position } from "chess-fen";
import { Board } from "./utils/Board";
import { PieceViewProps } from "./views/PieceView";
import { ComponentProps, CSSProperties, ReactNode } from "react";

export type PieceTheme = {
  [content in BoardContent]: (props: Partial<PieceViewProps>) => ReactNode;
};

export interface BoardTheme {
  lightSquare?: string;
  darkSquare?: string;
}

export interface MoveProps {
  fromPosition: Position;
  toPosition: Position;
  board: Board;
}

export interface Coordinates {
  x: string[];
  y: string[];
}

export type MoveHandler = (props: MoveProps) => void;

// react-dnd related types
export interface PieceDragObject {
  position: Position;
  type: BoardContent;
}

export interface PieceDragProps {
  isDragging: boolean;
}

export interface PieceDropProps {
  isOver: boolean;
  canDrop: boolean;
}

export interface PreviewGeneratorProps extends ComponentProps<any> {
  itemType: BoardContent;
  item: PieceDragObject;
  style: CSSProperties;
}
