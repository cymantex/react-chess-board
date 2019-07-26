import React from "react";
import {render} from "react-dom";
import {ChessBoard} from "./module/ChessBoard";

render(
    <ChessBoard clickable draggable/>,
    document.getElementById("root")
);