const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
const winner = calculateWinner(squares);


  const isDraw =
  !winner && squares.every(square => square !== null);
  {winner && <p>Winner: {winner}</p>}
  {isDraw && <p>Draw!</p>}



  function handleClick(index) {
    // Game already finished
    if (winner) return;

    // Square already occupied
    if (squares[index]) return;

const gameOver =
    winner || squares.every(square => square !== null);

  if (gameOver || squares[index]) return;


  const nextSquares = [...squares];
    nextSquares[index] = isXTurn ? "X" : "O";

    setSquares(nextSquares);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <>
      <div className="board">
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      {winner && <p>Winner: {winner}</p>}

      <button id="reset" onClick={resetGame}>
        Reset Game
      </button>
      
      <div id="status">
  {winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw!"
    : `Next player: ${isXTurn ? "X" : "O"}`}
</div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}
