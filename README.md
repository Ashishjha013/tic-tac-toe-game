# ❌ Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with **React, TypeScript, and Vite**. Experience the classic two-player game with a sleek interface, move history, and time-travel functionality.

<p align="center">
  <a href="https://tic-tac-toe-game-rho-tan.vercel.app/">
    <img src="https://img.shields.io/badge/Play%20Live%20Demo-70D8C5?style=for-the-badge&logo=vercel&logoColor=10191D" alt="Play Live Demo" />
  </a>
  <a href="https://github.com/Ashishjha013/tic-tac-toe-game">
    <img src="https://img.shields.io/badge/GitHub-View%20Source-18262D?style=for-the-badge&logo=github&logoColor=white" alt="View Source Code" />
  </a>
</p>

## 🎮 Game Preview

<p align="center">
  <a href="https://tic-tac-toe-game-rho-tan.vercel.app/">
    <img src="./src/assets/game.png" alt="Tic-Tac-Toe game preview" width="800" />
  </a>
</p>

<p align="center">
  <em>A classic game reimagined with a modern interface and interactive time travel.</em>
</p>

## ✨ Features

- 🎯 **Interactive Gameplay** — Play as X and O on a 3 × 3 board.
- 🏆 **Winner Detection** — Automatically detects the winning player.
- 🤝 **Draw Detection** — Recognizes when the game ends in a draw.
- 🟢 **Winning Line Highlight** — Highlights the three squares that form the winning combination.
- 🕒 **Move History** — Explore the sequence of moves made during the game.
- ⏪ **Time Travel** — Jump back to any previous move and revisit earlier game states.
- 🔄 **Restart Game** — Reset the board and start a new match.
- 🎨 **Modern UI** — A polished dark interface with contrasting colors and visual feedback.
- 🔒 **Type Safety** — TypeScript helps catch errors and improves maintainability.
- ⚡ **Fast Development** — Vite provides a fast development server and optimized production builds.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | Building interactive user interfaces |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and maintainable code |
| [Vite](https://vite.dev/) | Development server and build tooling |
| [ESLint](https://eslint.org/) | Code quality and linting |
| CSS | Styling and visual presentation |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Ashishjha013/tic-tac-toe-game.git
```

**2. Navigate to the project directory**

```bash
cd tic-tac-toe-game
```

**3. Install dependencies**

```bash
pnpm install
```

**4. Start the development server**

```bash
pnpm dev
```

Open the local URL displayed in your terminal to play the game.

## 🎲 How to Play

1. Start with an empty 3 × 3 board.
2. Players take turns placing their marks: **X** and **O**.
3. The first player to align three marks horizontally, vertically, or diagonally wins.
4. If all nine squares are filled without a winner, the game ends in a draw.
5. Use the move history to revisit previous moves.
6. Select an earlier move to travel back to that game state.
7. Restart the game to begin a new match.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds the application for production |
| `pnpm lint` | Runs ESLint to check code quality |
| `pnpm preview` | Previews the production build locally |

## 🧠 Key Learnings

Building this project helped me strengthen my understanding of React and TypeScript fundamentals, including:

- Managing component state with `useState`.
- Updating arrays immutably.
- Building reusable components and composing user interfaces.
- Passing data and event handlers through props.
- Separating game logic from UI rendering.
- Deriving game status from the current board state.
- Implementing winner and draw detection.
- Managing move history and navigating between previous states.
- Using TypeScript to improve type safety and maintainability.

## 📦 Production Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## 🌐 Live Demo

**Play the game:** https://tic-tac-toe-game-rho-tan.vercel.app/

**Source code:** https://github.com/Ashishjha013/tic-tac-toe-game

## 📄 License

This project is open source. See the [LICENSE](LICENSE) file for license details, if included in the repository.

---

<p align="center">
  Built with ❤️ using React, TypeScript, and Vite.
</p>

<p align="center">
  <a href="https://tic-tac-toe-game-rho-tan.vercel.app/">Live Demo</a> ·
  <a href="https://github.com/Ashishjha013/tic-tac-toe-game">GitHub Repository</a>
</p>
