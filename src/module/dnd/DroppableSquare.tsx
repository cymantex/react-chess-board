import React from "react";
import {usePieceDrop} from "./usePieceDrop";
import {MoveHandler} from "../types";
import {RenderSquareViewProps, SquareRenderer} from "../utils/renderers";

export interface DroppableSquareProps extends RenderSquareViewProps {
    renderSquare: SquareRenderer,
    onPieceMove: MoveHandler
}

export const DroppableSquare: React.FC<DroppableSquareProps> = ({onPieceMove, renderSquare, ...props}) => {
    const [, dropTarget] = usePieceDrop(onPieceMove, props.position, props.board);

    return <>{renderSquare({dropTarget, ...props})}</>;
};

export default DroppableSquare;