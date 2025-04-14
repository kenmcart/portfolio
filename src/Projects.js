import './App.css';
import gameVid from './images/turtletap.mp4'
import gameVid2 from './images/origamiarcade.mp4'
import flower from './images/flower.PNG'
import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

function FadeOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      {children}
    </div>
  );
}

function Projects() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="navbar"> 
          <Link to="/">Home</Link>
          <Link to="/Projects" className="selected">Projects</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div className="mobile-container">
            <h1>Mobile Game Projects</h1>
            <p>Hover over images to see gameplay!</p><br></br>
            <FadeOnScroll>
            <div className="list">
                <div className="list-item">
                  <div className="list-half">
                    <b>Turtle Tap</b>
                    <p>
                      A turtle collecting platformer game coming soon to iOS under CCF Studios! Hatch turtles
                      and build a house for your new pets!
                    </p>
                    <div id="turtle"></div>
                  </div>
                  <video className="no-space phone" loop muted
                  onMouseEnter={(event) => {
                    event.target.play();
                  }}
                  onMouseLeave={(event) => {
                    event.target.pause();
                  }}>
                    <source src={gameVid} type="video/mp4" alt="Turtle Tap gameplay"/>
                  </video>
                </div>
                <div className="list-item">
                  <div className="list-half">
                    <b>Origami Arcade</b>
                    <p>
                      Build an origami world by collecting paper from arcade games. Play quick, timed rounds of
                      10+ different games.
                    </p>
                    <img src={flower} id="flower" alt="Cartoon flower"></img>
                  </div>
                  <video className="no-space phone" loop muted
                  onMouseEnter={(event) => {
                    event.target.play();
                  }}
                  onMouseLeave={(event) => {
                    event.target.pause();
                  }}>
                    <source src={gameVid2} type="video/mp4" alt="Origami Arcade gameplay"/>
                  </video>
                </div>
            </div>
            </FadeOnScroll>
        </div>
      </header>
      <div className="app-body"></div>
      <footer>
            <p>
              Designed and created by Kennedy McCarthy <br></br>
              Connect with me on <a href="https://www.linkedin.com/in/kennedymccarthy/">LinkedIn</a>
            </p>
      </footer>
    </div>
  );
}

export default Projects;
