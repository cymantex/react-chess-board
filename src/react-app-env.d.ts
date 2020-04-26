/// <reference types="react-scripts" />
declare module "react-resize-aware";
declare module "react-dnd-preview";

declare module "chess.js" {
    export default class Chess {
        constructor(fen?: string)
        fen(): string
        move(move: string|MoveOptions): MoveResponse|null
    }

    interface MoveOptions {
        from: string,
        to: string,
        promotion?: string
    }

    interface MoveResponse {
        color: 'w'|'b',
        from: string,
        to: string,
        flags: string,
        piece: string,
        san: string
    }
}