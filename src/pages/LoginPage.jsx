import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const LoginPage = () => (
  <>
    <Navigation activePage="login" />
    <main className="page-wrap">
      <h1>Login</h1>
      <section className="form-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '420px' }}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" placeholder="your username" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="your password" />

          <div className="centered-flex">
            <button className="cta" onClick={() => alert('Login functionality not implemented')}>Login</button>
            <a className="ghost" href="#/register">Register</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default LoginPage;