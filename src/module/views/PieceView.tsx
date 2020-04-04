import React from "react";
import {SquareRenderingProps} from "../utils/types";

export interface PieceViewProps extends SquareRenderingProps {}

export const PieceView: React.FC<PieceViewProps> = (props) => {
    return props.pieceTheme[props.piece](props);
};