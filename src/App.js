import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section role="region" aria-labelledby="about" id="about">
          <h2>About</h2>
        </section>
        <section role="region" aria-labelledby="contact" id="contact">
          <h2>Contact</h2>
        </section>
        <section role="region" aria-labelledby="resources" id="resources">
          <h2>Resources</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
