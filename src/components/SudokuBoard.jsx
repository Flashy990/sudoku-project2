import { useGame } from '../context/GameContext';
import SudokuCell from './SudokuCell';

const SudokuBoard = ({ size }) => {
  const { gameData, isComplete, updateCell } = useGame();

  const getSubGridDimensions = (boardSize) => {
    if (boardSize === 9) {
      return { rows: 3, cols: 3 };
    } else if (boardSize === 6) {
      return { rows: 2, cols: 3 };
    }
  };

  const checkError = (row, col, value) => {
    if (!value || !gameData) return false;
    const { puzzle } = gameData;

    // check row
    for (let j = 0; j < size; j++) {
      if (j !== col && puzzle[row][j] === value) return true;
    }

    // check column
    for (let i = 0; i < size; i++) {
      if (i !== row && puzzle[i][col] === value) return true;
    }

    // check subgrid
    const { rows: subRows, cols: subCols } = getSubGridDimensions(size);
    const startRow = Math.floor(row / subRows) * subRows;
    const startCol = Math.floor(col / subCols) * subCols;

    for (let i = startRow; i < startRow + subRows; i++) {
      for (let j = startCol; j < startCol + subCols; j++) {
        if ((i !== row || j !== col) && puzzle[i][j] === value) return true;
      }
    }

    return false;
  };

  if (!gameData) {
    return <div className="muted">loading game...</div>;
  }

  return (
    <div className={`sudoku-grid grid-${size}x${size}`} role="grid">
      {gameData.puzzle.map((row, i) =>
        row.map((cell, j) => (
          <SudokuCell
            key={`${i}-${j}`}
            value={cell}
            isReadonly={gameData.prefilled[i][j] || isComplete}
            isError={!gameData.prefilled[i][j] && cell > 0 && checkError(i, j, cell)}
            onChange={(val) => updateCell(i, j, val)}
          />
        ))
      )}
    </div>
  );
};

export default SudokuBoard;