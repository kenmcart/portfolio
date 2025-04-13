import me from './images/me.jpeg'
import me2 from './images/me2.png'
import me3 from './images/me3.jpg'
import me4 from './images/me4.jpg'

import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/email.png'

import icon from './images/terminal.jpg'
import icon2 from './images/terminal2.jpg'
import icon3 from './images/terminal3.jpeg'

import gameVid from './images/terminalvideo.mp4'
import gameVid2 from './images/dragonisvideo.mp4'
import './App.css';

import React, { useState, useEffect, useRef } from 'react';

var inProgress = 0;
var currentImage = 0;
const meArray = [me, me2, me3, me4];

function getRandomInt(max) {
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TypingAnimation({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState(text[0]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, index, speed]);

  return (
    <span>{displayedText}</span>
  );
}

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

function ImageSwitch(){
  var toChange = document.getElementById('change');
  var rand = getRandomInt(meArray.length - 1);

  while (rand === currentImage) {
    rand = getRandomInt(meArray.length - 1);
  }
  toChange.src = meArray[rand];
  currentImage = rand;
}

function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="navbar"> 
          <a href="/" className="selected">Home</a>
          <a href="/Projects">Projects</a>
          <a href="/Blogs">Blogs</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="info">
          <h1><TypingAnimation text="Kennedy McCarthy"/></h1>
          <p>
            Hi! I'm Kennedy, I'm a game developer and computer science student studying at the University of Michigan.
            I work for CCF Studios, a game development studio run and founded by me and my friends.
          </p>
          <p>
            I'm also the programming lead for my UMich's student-run game development studio, Wolverinesoft. We develop
            games over the course of a semester and then release them on Steam.
          </p>
          <p>
            I enjoy creating games that challenge their respective genres and bring something new to the table- my team's
            Roblox game Terminal is currently the most popular escape room game on the platform, as well as the highest rated.
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/kennedymccarthy/"> <img src={linkedin} className="icon" alt="Linkedin icon"></img></a>
            <a href="https://github.com/kenmcart"> <img src={github} className="icon" alt="Github icon"></img></a>
            <a href="mailto:kenni.mccarthy@gmail.com"> <img src={email} className="icon" alt="Email icon"></img></a>
          </div>
        </div>
        <div className="photo">
          <div
              onMouseEnter={(event) => {
                if (inProgress === 1) {return}
                inProgress = 1;
                event.target.style.animation = 'photo-spin 1.5s ease-in-out infinite'
                setTimeout(ImageSwitch, 750)
              }}
              onAnimationIterationCapture={(event) => {
                event.target.style.animation = 'none'
                inProgress = 0;
              }}>
            <img src={me} id="change" alt="Kennedy"/>
          </div>
        </div>
      </header>

      <div className="app-body">
        <FadeOnScroll>
        <div className="info-block">
          <h1>Terminal Escape Room</h1> 
          <p>
            Terminal is a Roblox escape room game developed by our small game development studio, CCF Studios. This project has amassed over 23 million plays across 150+ countries. 
            Terminal features 5 main chapters in both beginner and standard mode, as well as 4 themed "rapid rooms". The story of this game starts on a runaway train, doomed to
            crash if the player cannot find a way to stop it.
          </p>
        </div>
        </FadeOnScroll>
        <FadeOnScroll>
        <div className="gallery">
          <img src={icon} alt="Terminal escape room logo"/>
          <img src={icon2} alt="Terminal escape room logo"/>
          <img src={icon3} alt="Terminal escape room logo"/>
          <video autoPlay loop muted>
            <source src={gameVid} type="video/mp4" alt="Terminal gameplay"/>
          </video>
        </div>
        </FadeOnScroll>
        <FadeOnScroll>
        <div className="info-block">
          <h1>What I'm Working on Now</h1> 
          <p>
            Aside from maintaining Terminal, I'm working on a city building game for Steam under Wolverinesoft, my school's student-run game development studio.
            and developing a supply-chain simulator for the Ross Buisness School at University of Michigan.
          </p>
        </div>
        </FadeOnScroll>
        <FadeOnScroll>
        <div className="gallery">
          <video className="no-space" autoPlay loop muted>
            <source src={gameVid2} type="video/mp4" alt="Cor Dragonis gameplay"/>
          </video>
          <p>Gameplay of Cor Dragonis, a fantasy city-building game being developed by Wolverinesoft Studio</p>
        </div>
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

export default Home;
