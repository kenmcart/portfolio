import './App.css';
import React, { useState, useEffect, useRef } from 'react';

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
          <a href="/portfolio/">Home</a>
          <a href="/portfolio/Projects">Projects</a>
          <a href="/portfolio/Blogs">Blogs</a>
          <a href="/portfolio/Contact" className="selected">Contact</a>
        </div>
        <h1>Contact Info</h1>
      </header>
      <div className="app-body">
      <FadeOnScroll>
          <p>Better contact info coming soon</p>
      </FadeOnScroll>
      </div>
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
