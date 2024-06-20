import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ionut Galavan</h1>
        <p> Tech Enthusiast </p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I enjoy working on projects that require thoughtful planning and creative problem-solving.
        </p>
      </section>
      
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Python</li>
        </ul>
      </section>
      

      
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: ionut.galavan@gmail.com</p>

        <p>GitHub: github.com/i-galavan</p>
      </section>
    </div>
  );
}

export default App;
