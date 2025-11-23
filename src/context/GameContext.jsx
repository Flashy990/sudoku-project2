import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { generateSudoku } from '../utils/SudokuGenerator';

const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within GameProvider');
    }
    return context;
};

export const GameProvider = ({ children }) => {
    const [gameData, setGameData] = useState(null);
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning && !isComplete) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, isComplete]);

    const startNewGame = useCallback((size) => {
        setIsGenerating(true);
        setTimeout(() => {
            try {
                const data = generateSudoku(size);
                setGameData(data);
                setTimer(0);
                setIsRunning(true);
                setIsComplete(false);
                setIsGenerating(false);
            } catch (error) {
                console.error('Error generating sudoku:', error);
                setIsGenerating(false);
                setTimeout(() => {
                    try {
                        const data = generateSudoku(size);
                        setGameData(data);
                        setTimer(0);
                        setIsRunning(true);
                        setIsComplete(false);
                    } catch (err) {
                        console.error('Retry failed:', err);
                    }
                }, 100);
            }
        }, 100);
    }, []);

    const resetGame = useCallback(() => {
        if (gameData) {
            const resetPuzzle = gameData.puzzle.map((row, i) =>
                row.map((cell, j) => gameData.prefilled[i][j] ? cell : 0)
            );
            setGameData({ ...gameData, puzzle: resetPuzzle });
            setTimer(0);
            setIsComplete(false);
        }
    }, [gameData]);

    const updateCell = useCallback((row, col, value) => {
        if (!gameData || gameData.prefilled[row][col]) return;

        const newPuzzle = gameData.puzzle.map((r, i) =>
            r.map((c, j) => (i === row && j === col ? value : c))
        );

        setGameData({ ...gameData, puzzle: newPuzzle });

        const isValid = newPuzzle.every((row, i) =>
            row.every((cell, j) => cell === gameData.solution[i][j])
        );

        if (isValid) {
            setIsComplete(true);
            setIsRunning(false);
        }
    }, [gameData]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    return (
        <GameContext.Provider value={{
            gameData,
            timer,
            formatTime,
            isComplete,
            isGenerating,
            startNewGame,
            resetGame,
            updateCell
        }}>
            {children}
        </GameContext.Provider>
    );
};