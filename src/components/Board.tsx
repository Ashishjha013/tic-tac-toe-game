import { useState } from "react";
import Square from "./Square";

const winningLines: number[][] = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row

  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column

  [0, 4, 8], // Diagonal
  [2, 4, 6], // Other diagonal
];

function calculateWinner(squares: (string | null)[]) {
  for (const line of winningLines) {
    const [a, b, c] = line;

    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

export default function Board() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const squares = history[currentMove];
  const isXNext = currentMove % 2 === 0;

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  function handleSquareClick(index: number) {
    if (winner || isDraw || squares[index] !== null) return;

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? "X" : "O";

    const nextHistory = history.slice(0, currentMove + 1);

    nextHistory.push(nextSquares);

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <section className="game-panel">
      <p
        className={`game-status ${
          winner
            ? "game-status--winner"
            : isDraw
              ? "game-status--draw"
              : "game-status--playing"
        }`}
        aria-live="polite"
      >
        {winner ? (
          <>
            <span className="status-kicker">ROUND COMPLETE</span>
            <span className="status-headline">{winner} WINS!</span>
            <span
              className={`status-badge status-badge--${winner.toLowerCase()}`}
            >
              {winner}
            </span>
          </>
        ) : isDraw ? (
          <>
            <span className="status-kicker">NOBODY LOSES TODAY</span>
            <span className="status-headline">IT'S A DRAW!</span>
            <span className="status-badge status-badge--draw">↔</span>
          </>
        ) : (
          <>
            <span className="status-kicker">CURRENT TURN</span>
            <span className="status-headline">
              <span className="turn-name">{isXNext ? "X" : "O"}</span> is up
            </span>
            <span
              className={`status-badge status-badge--${isXNext ? "x" : "o"}`}
            >
              {isXNext ? "X" : "O"}
            </span>
          </>
        )}
      </p>

      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            position={index}
            value={value}
            onSquareClick={() => handleSquareClick(index)}
          />
        ))}
      </div>

      <ol className="history-list">
        {history.map((_, move) => (
          <li key={move}>
            <button
              type="button"
              onClick={() => setCurrentMove(move)}
              disabled={currentMove === move}
            >
              {move === 0 ? "Go to game start" : `Go to move ${move}`}
            </button>
          </li>
        ))}
      </ol>

      <button className="restart-button" onClick={handleRestart}>
        Restart game
      </button>
    </section>
  );
}
