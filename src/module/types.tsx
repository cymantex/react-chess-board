import {Position} from "chess-fen";
import {Board} from "./utils/Board";
import {PieceViewProps} from "./views/PieceView";
import React, {ComponentProps, CSSProperties} from "react";
import {DragObjectWithType} from "react-dnd";
import {BoardContent} from "chess-fen/types";

export interface PieceTheme {
    [content: string]: (props: Partial<PieceViewProps>) => React.ReactNode
}

export interface BoardTheme {
    lightSquare?: string,
    darkSquare?: string
}

export interface MoveProps {
    fromPosition: Position,
    toPosition: Position,
    board: Board
}

export interface Coordinates {
    x: string[],
    y: string[]
}

export type MoveHandler = (props: MoveProps) => void;


// react-dnd related types
export interface PieceDragObject extends DragObjectWithType {
    position: Position
}

export interface PieceDragProps {
    isDragging: boolean
}

export interface PieceDropProps {
    isOver: boolean,
    canDrop: boolean
}

export interface PreviewGeneratorProps extends ComponentProps<any> {
    itemType: BoardContent,
    item: PieceDragObject,
    style: CSSProperties
}