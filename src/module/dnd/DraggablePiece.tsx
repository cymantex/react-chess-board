import {PieceViewProps} from "../views/PieceView";
import React from "react";
import {usePieceDrag} from "./usePieceDrag";
import {PieceRenderer} from "../utils/renderers";

export interface DraggablePieceProps extends PieceViewProps {
    renderPiece: PieceRenderer
}

export const DraggablePiece: React.FC<DraggablePieceProps> = ({renderPiece, ...props}) => {
    const [{isDragging}, dragSource] = usePieceDrag(props);

    return <>{renderPiece({className: "chess-board-piece--draggable", dragSource, isDragging, ...props})}</>;
};

export default DraggablePiece;