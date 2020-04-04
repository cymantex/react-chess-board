import Fen, {FenArgs} from "chess-fen/Fen";
import {Coordinates} from "./types";
import {Position} from "chess-fen";
import {PositionContent, PositionOrCoordinate} from "chess-fen/types";

export class Board extends Fen {
    readonly coordinates: Coordinates;
    readonly rotated: boolean;

    constructor(fen: string|FenArgs, rotated = false){
        super(fen);

        this.rotated = rotated;
        this.coordinates = this.createCoordinates();
    }

    public get(positionOrCoordinate: PositionOrCoordinate): PositionContent {
        const positionContent = super.get(positionOrCoordinate);

        if (positionContent === null) {
            throw new Error(`${Board.toCoordinate(positionOrCoordinate)} is outside the board.`);
        }

        return positionContent;
    }

    private createCoordinates(): Coordinates {
        const coordinates: Coordinates = {x: [], y: []};

        for(let x = 0; x < this.columns; x++){
            coordinates.x.push(String.fromCharCode(x + 97))
        }

        for(let y = this.rows; y > 0; y--){
            coordinates.y.push(y.toString());
        }

        return this.rotated ? {
            x: coordinates.x.reverse(),
            y: coordinates.y.reverse()
        } : coordinates;
    };

    private static toCoordinate(positionOrCoordinate: string|Position) {
        return typeof positionOrCoordinate === "string" ? positionOrCoordinate : positionOrCoordinate.toCoordinate();
    }
}