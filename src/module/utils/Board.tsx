import Fen, {
  FenArgs,
  Position,
  BoardContent,
  EMPTY_SQUARE,
  PIECES,
  PositionOrCoordinate,
} from "chess-fen";
import { BoardTheme, Coordinates, PieceTheme } from "../types";
import { cardinal } from "../themes/pieces/cardinal";
import { blue } from "../themes/boards/blue";

export interface BoardConstructor {
  fen: string | FenArgs;
  size: number;
  pieceTheme?: PieceTheme;
  boardTheme?: BoardTheme;
  rotated?: boolean;
}

export class Board extends Fen {
  readonly coordinates: Coordinates;
  readonly rotated: boolean;
  readonly size: number;
  readonly squareSize: number;
  readonly pieceTheme: PieceTheme;
  readonly boardTheme: BoardTheme;

  constructor({
    fen,
    size,
    pieceTheme = cardinal,
    boardTheme = blue,
    rotated = false,
  }: BoardConstructor) {
    super(fen);

    this.size = size;
    this.squareSize = size / this.columns;
    this.rotated = rotated;
    this.coordinates = this.createCoordinates();
    this.pieceTheme = pieceTheme;
    this.boardTheme = boardTheme;
  }

  public get(positionOrCoordinate: PositionOrCoordinate): BoardContent {
    const boardContent = super.get(positionOrCoordinate);

    if (boardContent === null) {
      throw new Error(`${Board.toCoordinate(positionOrCoordinate)} is outside the board.`);
    }

    return boardContent;
  }

  public isCapture(fromPosition: Position, toPosition: Position) {
    const piece = this.get(fromPosition);
    const target = this.get(toPosition);

    return (
      (target !== null && target !== EMPTY_SQUARE) ||
      (piece.toLowerCase().includes(PIECES.p) && toPosition.toCoordinate() === this.enPassantSquare)
    );
  }

  public isPawnMove(fromPosition: Position, toPosition: Position): boolean {
    const piece = this.get(fromPosition);
    const capture = this.isCapture(fromPosition, toPosition);

    const isPawnMove = (canMakeDoubleMove: boolean): boolean => {
      const range = canMakeDoubleMove ? 2 : 1;
      return (
        (!capture && fromPosition.isVerticalTo(toPosition, range)) ||
        (capture && fromPosition.isDiagonalTo(toPosition, 1))
      );
    };

    if (this.toMove === "white" && piece === PIECES.P) {
      return fromPosition.isNorthTo(toPosition) && isPawnMove(fromPosition.y === this.rows - 2);
    } else if (this.toMove === "black" && piece === PIECES.p) {
      return fromPosition.isSouthTo(toPosition) && isPawnMove(fromPosition.y === 1);
    }

    return false;
  }

  public isPromotion(fromPosition: Position, toPosition: Position): boolean {
    if (this.toMove === "white") {
      return (
        this.isPawnMove(fromPosition, toPosition) && fromPosition.y === 1 && toPosition.y === 0
      );
    }

    return (
      this.isPawnMove(fromPosition, toPosition) &&
      fromPosition.y === this.rows - 2 &&
      toPosition.y === this.rows - 1
    );
  }

  private createCoordinates(): Coordinates {
    const coordinates: Coordinates = { x: [], y: [] };

    for (let x = 0; x < this.columns; x++) {
      coordinates.x.push(String.fromCharCode(x + 97));
    }

    for (let y = this.rows; y > 0; y--) {
      coordinates.y.push(y.toString());
    }

    return this.rotated
      ? {
          x: coordinates.x.reverse(),
          y: coordinates.y.reverse(),
        }
      : coordinates;
  }

  private static toCoordinate(positionOrCoordinate: string | Position) {
    return typeof positionOrCoordinate === "string"
      ? positionOrCoordinate
      : positionOrCoordinate.toCoordinate();
  }
}

export default Board;
