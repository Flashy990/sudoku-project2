const Navigation = ({ activePage }) => (
  <header className="site-header">
    <nav className="nav">
      <div className="nav-left">
        <a href="#/" className="brand">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%23222'/><text x='50' y='58' font-size='48' fill='%23f8f8f8' text-anchor='middle' font-family='Arial'>S</text></svg>"
            alt="sudoku logo"
            className="logo"
          />
          <span className="brand-title">Sudoku</span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#/games" className={`nav-link ${activePage === 'selection' ? 'active' : ''}`}>Game Selection</a></li>
        <li><a href="#/games/normal" className={`nav-link ${activePage === 'normal' ? 'active' : ''}`}>Hard (9 x 9)</a></li>
        <li><a href="#/games/easy" className={`nav-link ${activePage === 'easy' ? 'active' : ''}`}>Easy (6 x 6)</a></li>
        <li><a href="#/rules" className={`nav-link ${activePage === 'rules' ? 'active' : ''}`}>Rules</a></li>
        <li><a href="#/scores" className={`nav-link ${activePage === 'scores' ? 'active' : ''}`}>High Scores</a></li>
        <li><a href="#/login" className={`nav-link ${activePage === 'login' ? 'active' : ''}`}>Login</a></li>
        <li><a href="#/register" className={`nav-link ${activePage === 'register' ? 'active' : ''}`}>Register</a></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;