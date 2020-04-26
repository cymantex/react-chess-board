# react-fen-chess-board
react-fen-chess-board is as the name suggests a React chess board which is controlled using FEN notation.

## Installation
``npm install react-fen-chess-board``

## Rendering a static chess board
To render a static chess board you simply provide the FEN of the position you want to display.
````typescript jsx
import React from "react";
import {render} from "react-dom";
import {ChessBoard} from "react-fen-chess-board";

render(
    <ChessBoard 
        // FEN for the starting position in chess
        fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    />,
    document.getElementById("your-react-root")
);
````
![static board](https://raw.githubusercontent.com/dv16sen/react-chess-board/master/assets/static-board.PNG "Static ChessBoard")

## Props
### rotated
Controls if the board should be rotated or not.
````typescript jsx
render(
    <ChessBoard 
        fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        rotated
    />,
    document.getElementById("your-react-root")
);
````
![rotated board](https://raw.githubusercontent.com/dv16sen/react-chess-board/master/assets/rotated.PNG "Rotated ChessBoard")

### onMove
A function which enables drag-and-drop and is called whenever the user drags and drops a piece. The following is an example of how this callback can be used alongside [chess.js](https://github.com/jhlywa/chess.js) to almost enable a fully functional chess board.
````typescript jsx
import React, {useState} from "react";
import {ChessBoard} from "react-fen-chess-board";
import Chess from "chess.js";

const chess = new Chess();

const MyChessBoard = () => {
    const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    
    return (
        <ChessBoard
            fen={fen}
            onMove={({fromPosition, toPosition, board}) => {
                chess.move({
                    from: fromPosition.toCoordinate(), 
                    to: toPosition.toCoordinate()
                });
                setFen(chess.fen());
            }}
        />
    );
};

export default MyChessBoard;
````

Since react-fen-chess-board uses [react-dnd](https://raw.githubusercontent.com/dv16sen/react-chess-board/master/assets/piece-theme.PNG) behind the scenes your application needs to be wrapped in a [DndProvider](https://react-dnd.github.io/react-dnd/docs/api/dnd-provider) in order to use onMove. Out of the box react-fen-chess-board includes a ``ChessBoardDndProvider`` component you can use for this purpose. 
````typescript jsx
import React from "react";
import {render} from "react-dom";
import {ChessBoardDndProvider} from "react-fen-chess-board";
import MyChessBoard from "./MyChessBoard";

render(
    <ChessBoardDndProvider>
        <MyChessBoard/>
    </ChessBoardDndProvider>,
    document.getElementById("your-react-root")
);
````

### Theming
Besides the ability to pass render props or using CSS there is also an option to pass a ``pieceTheme`` or ``boardTheme`` to change the appearance of the ChessBoard with less hassle.

#### boardTheme
````javascript
const blueBoardTheme = {
    darkSquare: "#708B9C",
    lightSquare: "#95AEC2"
};

render(
    <ChessBoard 
        fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        boardTheme={blueBoardTheme}
    />,
    document.getElementById("your-react-root")
);
````
![boardTheme](https://raw.githubusercontent.com/dv16sen/react-chess-board/master/assets/board-theme.PNG "boardTheme")

#### pieceTheme
````javascript
import {
    BlackPawn, BlackKnight, BlackBishop, BlackRook, BlackQueen, BlackKing,
    WhitePawn, WhiteKnight, WhiteBishop, WhiteRook, WhiteQueen, WhiteKing
} from "./merida";

const meridaPieceTheme = {
    "black pawn": ({board, position, dragSource}) => <BlackPawn/>,
    "black knight": () => <BlackKnight/>,
    "black bishop": () => <BlackBishop/>,
    "black queen": () => <BlackQueen/>,
    "black rook": () => <BlackRook/>,
    "black king": () => <BlackKing/>,
    "white pawn": () => <WhitePawn/>,
    "white knight": () => <WhiteKnight/>,
    "white bishop": () => <WhiteBishop/>,
    "white queen": () => <WhiteQueen/>,
    "white rook": () => <WhiteRook/>,
    "white king": () => <WhiteKing/>,
    "empty": () => <div/>
};

render(
    <ChessBoard 
        fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        pieceTheme={meridaPieceTheme}
    />,
    document.getElementById("your-react-root")
);
````
![alt text](https://raw.githubusercontent.com/dv16sen/react-chess-board/master/assets/piece-theme.PNG "pieceTheme")

### Render props
To allow for powerful customization for the appearance and behaviour of the ChessBoard there are different render functions which can be overwritten. This section will show the default implementation of the renderers which can be imported under ``react-fen-chess-board/utils/renderers``. You can find out more about the props by looking at the type definitions.

#### renderBoard
Determines how the board wrapper is rendered.
````typescript jsx
import {BoardView, BoardViewProps} from "react-fen-chess-board/views/BoardView";

export interface RenderBoardViewProps extends BoardViewProps {
    resizeListener: React.ReactNode
}

export type BoardRenderer = (props: RenderBoardViewProps) => React.ReactNode;

// resizeListener is from react-resize-aware (https://www.npmjs.com/package/react-resize-aware) 
// and allows for resizing the ChessBoard as the browser window shrinks. 
export const defaultRenderBoard: BoardRenderer = ({children, resizeListener, ...props}) => (
    <BoardView {...props}>
        {resizeListener}
        {children}
    </BoardView>
);
````

#### renderSquare
Determines how the squares are rendered.
````typescript jsx
import {SquareView, SquareViewProps} from "react-fen-chess-board/views/SquareView";

export interface RenderSquareViewProps extends SquareViewProps {
    Piece: React.ReactNode
    Coordinate: React.ReactNode
}

export type SquareRenderer = (props: RenderSquareViewProps) => React.ReactNode;

export const defaultRenderSquare: SquareRenderer = ({Coordinate, Piece, ...props}) => (
    <SquareView {...props}>
        {Piece}
        {Coordinate}
    </SquareView>
);
````

#### renderPiece
Determines how the pieces are rendered.
````typescript jsx
import {PieceView, PieceViewProps} from "react-fen-chess-board/views/PieceView";

export type PieceRenderer = (props: PieceViewProps) => React.ReactNode;
export const defaultRenderPiece: PieceRenderer = (props) => <PieceView {...props}/>;
````

#### renderCoordinate
Determines how the coordinates are rendered.
````typescript jsx
import {CoordinateView, CoordinateViewProps} from "react-fen-chess-board/views/CoordinateView";

export type CoordinateRenderer = (props: CoordinateViewProps) => React.ReactNode;
export const defaultRenderCoordinate: CoordinateRenderer = (props) => <CoordinateView {...props}/>;
````

#### renderPreviewPiece
Determines how a piece currently being dragged is rendered.
````typescript jsx
import {PreviewPieceView, PreviewPieceViewProps} from "react-fen-chess-board/views/PreviewPieceView";

export type PreviewPieceRenderer = (props: PreviewPieceViewProps) => React.ReactNode;
export const defaultRenderPreviewPiece = (props) => <PreviewPieceView {...props}/>;
````
