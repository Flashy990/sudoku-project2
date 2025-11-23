import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SudokuBoard from '../components/SudokuBoard';
import { useGame } from '../context/GameContext';

const GamePage = ({ mode }) => {
    const { startNewGame, resetGame, timer, formatTime, isComplete, gameData, isGenerating } = useGame();
    const size = mode === 'easy' ? 6 : 9;
    const title = mode === 'easy' ? 'Easy Mode' : 'Hard Mode';
    const gameName = mode === 'easy' ? 'SudoLock' : 'Deadlock';
    const author = mode === 'easy' ? 'D.L. Deathy' : 'H.N. Vegas';

    useEffect(() => {
        console.log('GamePage: mode =', mode, 'size =', size, 'gameData =', gameData?.puzzle?.length);

        // only generate if we dont have a game or the mode changed
        if (!gameData || (gameData.puzzle.length !== size)) {
            console.log('Generating new game for size:', size);
            startNewGame(size);
        }
    }, [mode, size]);

    return (
        <>
            <Navigation activePage={mode} />
            <main className="page-wrap">
                <h1>{title}</h1>

                <section className="game-meta form-card">
                    <div className="flex-between-wrap">
                        <div>
                            <h3>{gameName}</h3>
                            <p className="muted">{author}</p>
                        </div>
                        <div className="timer-card">
                            <div className="muted">Timer</div>
                            <div className="timer-display">{formatTime(timer)}</div>
                        </div>
                    </div>
                </section>

                {isComplete && (
                    <div style={{
                        background: 'linear-gradient(90deg, rgba(125, 211, 252, 0.1), rgba(96, 165, 250, 0.05))',
                        padding: '16px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        margin: '20px 0',
                        border: '1px solid rgba(125, 211, 252, 0.3)'
                    }}>
                        <h2 style={{ color: '#7dd3fc', margin: '0 0 8px 0' }}>congrats!</h2>
                        <p className="muted">you completed the puzzle in {formatTime(timer)}</p>
                    </div>
                )}

                {isGenerating ? (
                    <section className="board-wrap">
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            <div className="muted" style={{ fontSize: '1.2rem' }}>generating puzzle...</div>
                        </div>
                    </section>
                ) : (
                    <section className="board-wrap">
                        <div className="sudoku-area">
                            <SudokuBoard size={size} />
                            <div className="centered-flex">
                                <button className="cta" onClick={() => startNewGame(size)}>New Game</button>
                                <button className="ghost" onClick={resetGame}>Reset</button>
                                <a className="ghost" href="#/games">Back to Selection</a>
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
};

export default GamePage;