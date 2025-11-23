// sudoku generation code from previous mini assignment
function randomSelection(n) {
    return Math.floor(Math.random() * n);
}

function swapRows(sudokuBoard, row1, row2) {
    const tempRow = sudokuBoard[row1];
    sudokuBoard[row1] = sudokuBoard[row2];
    sudokuBoard[row2] = tempRow;
}

function swapCols(sudokuBoard, col1, col2, size) {
    for (let i = 0; i < size; i++) {
        const tempCol = sudokuBoard[i][col1];
        sudokuBoard[i][col1] = sudokuBoard[i][col2];
        sudokuBoard[i][col2] = tempCol;
    }
}

function shuffleRowsWithinBlocks(sudokuBoard, size) {
    for (let b = 0; b < size / 3; b++) {
        const base = b * 3;
        const row1 = base + randomSelection(3);
        let row2 = base + randomSelection(3);
        while (row1 === row2) {
            row2 = base + randomSelection(3);
        }
        swapRows(sudokuBoard, row1, row2);
    }
}

function shuffleRowsWithinBlocksEasy(sudokuBoard, size) {
    for (let b = 0; b < size / 2; b++) {
        const base = b * 2;
        const row1 = base + randomSelection(2);
        let row2 = base + randomSelection(2);
        while (row1 === row2) {
            row2 = base + randomSelection(2);
        }
        swapRows(sudokuBoard, row1, row2);
    }
}

function shuffleColsWithinBlocks(sudokuBoard, size) {

    for (let b = 0; b < size / 3; b++) {
        const base = b * 3;
        const col1 = base + randomSelection(3);
        let col2 = base + randomSelection(3);
        while (col1 === col2) {
            col2 = base + randomSelection(3);
        }
        swapCols(sudokuBoard, col1, col2, size);
    }
}

function swapRowBlocks(sudokuBoard, size) {
    const block1 = randomSelection(size / 3);
    let block2 = randomSelection(size / 3);
    while (block1 === block2) {
        block2 = randomSelection(size / 3);
    }
    for (let i = 0; i < 3; i++) {
        swapRows(sudokuBoard, block1 * 3 + i, block2 * 3 + i);
    }
}

function swapRowBlocksEasy(sudokuBoard, size) {
    const block1 = randomSelection(size / 2);
    let block2 = randomSelection(size / 2);
    while (block1 === block2) {
        block2 = randomSelection(size / 2);
    }
    for (let i = 0; i < 2; i++) {
        swapRows(sudokuBoard, block1 * 2 + i, block2 * 2 + i);
    }
}

function swapColBlocks(sudokuBoard, size) {
    const block1 = randomSelection(size / 3);
    let block2 = randomSelection(size / 3);
    while (block1 === block2) {
        block2 = randomSelection(size / 3);
    }
    for (let i = 0; i < 3; i++) {
        swapCols(sudokuBoard, block1 * 3 + i, block2 * 3 + i, size);
    }
}

function shuffleSudoku(sudokuBoard, size) {

    console.log("size: " + size)
    if (size === 9) {
        for (let i = 0; i < 50; i++) {
            // console.log("shuffling rows");
            shuffleRowsWithinBlocks(sudokuBoard, size);
            // console.log("swapping column blocks");
            swapColBlocks(sudokuBoard, size);
            // console.log("shuffling columns")
            shuffleColsWithinBlocks(sudokuBoard, size);
            // console.log("swapping row blocks");
            swapRowBlocks(sudokuBoard, size);
        }
    } else if (size === 6) {
        for (let i = 0; i < 50; i++) {
            // console.log("shuffling rows");
            shuffleRowsWithinBlocksEasy(sudokuBoard, size);
            // console.log("swapping column blocks");
            swapColBlocks(sudokuBoard, size);
            // console.log("shuffling columns")
            shuffleColsWithinBlocks(sudokuBoard, size);
            // console.log("swapping row blocks");
            swapRowBlocksEasy(sudokuBoard, size);
        }
    }
}

function removeNumbers(size) {

    const toKeep = [];
    let neededEntries = 0;
    if (size === 9) {
        neededEntries = 28;
    }
    else if (size === 6) {
        neededEntries = 18;
    }
    else {
        console.log("ERROR!!! Size should be either 6 or 9");
    }
    for (let i = 0; i < neededEntries; i++) {
        let newEntry = [randomSelection(size), randomSelection(size)];
        while (toKeep.some(entry => entry[0] === newEntry[0] && entry[1] === newEntry[1])) {
            newEntry = [randomSelection(size), randomSelection(size)];
        }
        toKeep[i] = newEntry;
    }
    return toKeep;

}

export const generateSudoku = (size) => {
    const board = [];
    const baseNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let offset = -1;

    for (let i = 0; i < size; i++) {
        if (i % 3 === 0) {
            offset = offset + 1;
        }
        board[i] = [];
        for (let j = 0; j < size; j++) {
            let idx = j + (3 * i) + offset;
            if (idx > 8) {
                idx = idx % 9;
            }
            board[i][j] = baseNums[idx];
        }
    }

    shuffleSudoku(board, size);

    const solution = board.map(row => [...row]);
    const puzzle = board.map(row => [...row]);
    const prefilled = Array(size).fill(null).map(() => Array(size).fill(false));

    const toKeep = removeNumbers(size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (toKeep.some(entry => entry[0] === i && entry[1] === j)) {
                prefilled[i][j] = true;
            } else {
                puzzle[i][j] = 0;
            }
        }
    }

    console.log("Printing actual solution to check if I am getting the congrats message when I fill it completely. :)")
    for (let row = 0; row < solution.length; row++) {
        let rowString = '';
        for (let col = 0; col < solution[row].length; col++) {
            rowString += solution[row][col] + ' ';
        }
        console.log(rowString);
    }

    return { puzzle, solution, prefilled };
};