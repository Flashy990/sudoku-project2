import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RulesPage = () => (
  <>
    <Navigation activePage="rules" />
    <main className="page-wrap">
      <h1>Sudoku Rules</h1>
      <section className="form-card">
        <h2>Core Rules</h2>
        <ol>
          <li>Each row must contain each number (1 through N) exactly once.</li>
          <li>Each column must contain each number (1 through N) exactly once.</li>
          <li>Each sub-grid must contain each number exactly once.</li>
        </ol>

        <h3>How to read the boards</h3>
        <p className="muted">Cells with the bold numbers are prefilled. Empty cells are the ones that are needed to be filled by the players. Numbers entered by the players will not be bold.</p>

        <h3>Credits / Made by</h3>
        <p>Created by <strong>Aryan Kakadia</strong>. Contact/links:</p>
        <ul>
          <li><a href="mailto:someemaillol@someemail.com">someemaillol@someemail.com</a></li>
          <li><a href="https://github.com/someuserlol" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/someuserlol" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default RulesPage;