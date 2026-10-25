import "./App.css";
import Board from "./components/Board";

export default function App() {
  return (
    <main className="app-shell">
      <header className="game-header">
        <p className="eyebrow">THE CLASSIC GAME</p>
        <h1>
          Tic-Tac-Toe<span>.</span>
        </h1>
        <p className="subtitle">Simple game. Serious strategy.</p>
      </header>

      <Board />
    </main>
  );
}
