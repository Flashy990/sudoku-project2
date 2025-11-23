import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RegisterPage = () => (
  <>
    <Navigation activePage="register" />
    <main className="page-wrap">
      <h1>Register</h1>
      <section className="form-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '420px' }}>
          <label htmlFor="new-username">Username</label>
          <input id="new-username" name="username" type="text" placeholder="choose a username" />

          <label htmlFor="new-password">Password</label>
          <input id="new-password" name="password" type="password" placeholder="create a password" />

          <label htmlFor="verify-password">Verify Password</label>
          <input id="verify-password" name="verify" type="password" placeholder="re-enter password" />

          <div className="centered-flex">
            <button className="cta" onClick={() => alert('Registration functionality not implemented')}>Register</button>
            <a className="ghost" href="#/login">Back to Login</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default RegisterPage;