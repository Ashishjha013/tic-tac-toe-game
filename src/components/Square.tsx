type SquareProps = {
  value: string | null;
  position: number;
  onSquareClick: () => void;
};

export default function Square({
  value,
  position,
  onSquareClick,
}: SquareProps) {
  return (
    <button
      className={`square ${
        value === "X" ? "square--x" : value === "O" ? "square--o" : ""
      }`}
      type="button"
      aria-label={`Square ${position + 1}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
