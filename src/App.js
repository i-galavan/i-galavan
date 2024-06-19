import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>John Doe</h1>
        <p>Full Stack Developer | Tech Enthusiast | Blogger</p>
      </header>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with a love for creating dynamic and responsive web applications. With a background in both front-end and back-end development, I enjoy working on projects that require thoughtful planning and creative problem-solving.
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
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project One</h3>
          <p>A web application for tracking personal expenses.</p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>A social media platform for connecting with friends.</p>
        </div>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>LinkedIn: linkedin.com/in/johndoe</p>
        <p>GitHub: github.com/johndoe</p>
      </section>
    </div>
  );
}

export default App;
