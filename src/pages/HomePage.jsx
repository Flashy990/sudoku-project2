import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => (
  <>
    <Navigation activePage="home" />
    <main className="page-wrap">
      <section className="hero">
        <h1>Sudoku</h1>
        <p className="lead">Web Dev Project: Sudoku game with easy and normal modes!</p>
        <div className="hero-actions">
          <a className="cta" href="#/games">Play Now</a>
          <a className="ghost" href="#/rules">Read Rules</a>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><span className="chip">Home</span>Main landing page</li>
          <li><span className="chip">Selection</span> Choose puzzles</li>
          <li><span className="chip">Hard / Easy</span>9 x 9 and 6 x 6 sudoku boards</li>
          <li><span className="chip">Rules</span>Game rules and credits</li>
          <li><span className="chip">High Scores</span>Leaderboard</li>
          <li><span className="chip">Login / Register</span></li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default HomePage;