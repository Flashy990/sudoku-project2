import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SelectionPage = () => (
  <>
    <Navigation activePage="selection" />
    <main className="page-wrap">
      <h1>Game Selection</h1>
      <p className="muted">Pick a puzzle to play.</p>
      <section className="game-list form-card">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <a className="game-item" href="#/games/normal">
              <strong>Deadlock</strong> by <span className="muted">H.N. Vegas</span>
            </a>
          </li>
          <li>
            <a className="game-item" href="#/games/easy">
              <strong>SudoLock</strong> by <span className="muted">D.L. Deathy</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default SelectionPage;