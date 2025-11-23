import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HighScoresPage = () => (
  <>
    <Navigation activePage="scores" />
    <main className="page-wrap">
      <h1>High Scores</h1>
      <p className="muted">Scores Leaderboard</p>
      <section className="form-card">
        <table className="table">
          <thead>
            <tr><th>Rank</th><th>Player</th><th>Completed</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Aviator</td><td>330</td></tr>
            <tr><td>2</td><td>Zerggy</td><td>119</td></tr>
            <tr><td>3</td><td>Buds</td><td>103</td></tr>
            <tr><td>4</td><td>Jubeonee</td><td>88</td></tr>
            <tr><td>5</td><td>Lefaa</td><td>69</td></tr>
            <tr><td>6</td><td>Vegas</td><td>67</td></tr>
          </tbody>
        </table>
      </section>
    </main>
    <Footer />
  </>
);

export default HighScoresPage;