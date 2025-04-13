import './App.css';
import gdc from './images/gdc.jpg'
import notion from './images/notion.png'
import party from './images/party.png'
import info from './images/info-menu.png'
import flowchart from './images/flowchart.png'
import gameVid from './images/popups.mp4'
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

function Blogs() {
  return (
    <div className="app">
      <header className="app-header short">
        <div className="navbar"> 
          <a href="/">Home</a>
          <a href="/Projects">Projects</a>
          <a href="/Blogs" className="selected">Blogs</a>
          <a href="/Contact">Contact</a>
        </div>
        <h1> Winter 2025 Wolverinesoft Developer Blog</h1>
      </header>
      <div className="app-body">
        <div className="row">
          <div className="dragonheart">
            <FadeOnScroll>
            <div className="card">
              <h2>DEV BLOG #1</h2>
              <h5>UI setup and Gitlab, Feb 9, 2025</h5>

              <p><i>Gitlab management</i></p>
              <p>Gitlab seteup is a key part of preparing Wolverinesoft Studio for the upcoming semester. I spent time onboarding
                new members of the team onto our Gitlab, and provided help for anybody who had trouble connecting to our repository.
                I have also spent time verifying and approving Gitlab requests. In between this, I spent time looking into automated
                builds and CI/CD tools.
              </p>

              <p><i>UI animations</i></p>
              <p>Last week, I worked on UI animations, like button popups, when a building is selected. I familiarized myself with the
                game's UI system in preparation for final UI implementation in the coming weeks. We are using Figma to finalize our UI,
                and have been distributing UI work among programmers. A video of the button animation I coded can be found below:
              </p>
              <video height="200" className="no-space" autoPlay loop muted>
                <source src={gameVid} type="video/mp4"></source>
              </video>

              <p><i>Notion and planning</i></p>
              <p>To create a roadmap for what our team needs to work on, I looked through the Dragonheart game documents to assemble a list of
                 features that we need to implement, categorizing each into "target" and "stretch" goals. This was done two weeks ago, as we
                 entered the planning phase of development.
              </p>
              <img src={notion} height="175px" alt="Screenshot of Notion"></img>

              <p><i>Time breakdown</i></p>
              <p>I am taking 3 credits of MDP this semester, so I must spend 9 hours a week working on Project Dragonheart. I have
                spent a total of 18 hours doing studio work over the past two weeks. 9 hours from 01/26/25-02/01/25 and 
                9 hours 02/02/25-02/09/25. I spent 4 hours a week in meetings, 2 hours for the Saturday directors meeting 
                and 2 hours for the Sunday all-studio meeting, except for 02/09/25, where I had to miss the all studio-meeting. 
                This leaves 5-7 hours for outside work on the game/project management. ~4 hours a week were spent on Unity,
                experimenting with the UI system , whereas the other ~2 hours a week were spent on management and planning on
                Gitlab and Notion.
              </p>
            </div>
            </FadeOnScroll>
            <FadeOnScroll>
            <div className="card">
              <h2>DEV BLOG #2</h2>
              <h5>UI setup and Gitlab, Feb 23, 2025</h5>

            <p><i>Gitlab management</i></p>
            <p>More time was spent on Gitlab management these past two weeks, I had to approve, screen, and fix merge requests as they
               were made.
            </p>

            <p><i>UI implementation</i></p>
            <p>Last week, I worked on UI implementation from the Wolverinesoft Figma. This included building info menus and the party manager.
               The party manager shows the player how much health each of their adventurers have, and the progress they have made on their
               adventures. The info menus are used for building management, and allow the player to see building information, upgrade, or
               delete their building.
            </p>
            <img src={party} height="175px" alt="Party manager UI"></img>
            <img src={info} height="175px" alt="Info menu"></img>

            <p><i>Logistics</i></p>
            <p>During our directors meeting on 02/22/25, we discussed logistics of implementing a new, more interactive dungeon system.
               We came up with a flowchart to visualize this system for when we implement it in the next few weeks.
            </p>
            <img src={flowchart} height="235px" alt="Flowchart"></img>

            <p><i>Time breakdown</i></p>
            <p>I am taking 3 credits of MDP this semester, so I must spend 9 hours a week working on Project Dragonheart. I have
               spent a total of 18 hours doing studio work over the past two weeks. 9 hours from 02/10/25-02/16/25 and 
               9 hours 02/17/25-02/23/25. I spent 4 hours a week in meetings, 2 hours for the Saturday directors meeting 
               and 2 hours for the Sunday all-studio meeting, except for 02/15/25, where we did not have a directors meeting
               due to the weather. This leaves 5-7 hours for outside work on the game/project management. ~3 hours a week were spent
               on Unity, experimenting with the UI system , whereas the other ~2 hours a week were spent on management and planning on
               Gitlab and Notion.
            </p>
          </div>
          </FadeOnScroll>
          <FadeOnScroll>
          <div className="card">
            <h2>DEV BLOG #3</h2>
            <h5>Spring break and logistics, Mar 9, 2025</h5>

            <p><i>Gitlab management</i></p>
            <p>As usual, a chunk of my work time was dedicated to managing the Gitlab.
            </p>

            <p><i>Interactive dungeon system</i></p>
            <p>Last week, I spent time planning and preparing for the interactive dungeon system I need to implement. Since we had spring break,
               I did not get as much work done on this as I would have liked to, but I have laid out the foundations for starting this feature soon.
            </p>

            <p><i>Party manager UI</i></p>
            <p>I also spent time last week working on the party manager UI from two weeks ago.
            </p>

            <p><i>Time breakdown</i></p>
            <p>I am taking 3 credits of MDP this semester, so I must spend 9 hours a week working on Project Dragonheart. I have
               spent a total of 9 hours doing studio work over the past two weeks- since last week was spring break.
               I spent 4 hours in meetings this week, 2 hours for the Saturday directors meeting and 2 hours for the Sunday all-studio
               meeting. I spent the other 5 hours working this previous week, catching up with Gitlab management and fixing branches. I also
               spent about 3.5 of those hours working on the interactive dungeon system and tweaking the party manager UI.
            </p>
          </div>
          </FadeOnScroll>
          <FadeOnScroll>
          <div className="card">
            <h2>DEV BLOG #4</h2>
            <h5>GDC and dungeon minigame, Mar 24, 2025</h5>

            <p><i>Gitlab management</i></p>
            <p>Again, some of my work time was dedicated to managing the Gitlab and approving/checking merge requests.
            </p>

            <p><i>Dungeon minigame</i></p>
            <p>Last week, I worked on a dungeon generation system for the dungeon minigame, so that each dungeon is generated in a random tree.
               Each room of the dungeon is assigned as either an enemy room, a treasure room, or an empty room. Every dungeon will have a minimum
               and maximum length and 1-2 "child rooms" that it is connected to. The ending room is also randomly generated based on a few preset
               values like maximum room count.
            </p>

            <p><i>GDC</i></p>
            <p>This past week, I spent most of my time at GDC networking and making new connections with people. I got to meet a lot of alumni and
               learn more about game code optimization, balancing game projects as a student, and more. I spent the majority of my time doing this.
               I got to meet game developers who are in the industry and get advice from them about breaking into game development.
            </p>
            <img src={gdc} height="265px" alt="GDC"></img>

            <p><i>Time breakdown</i></p>
            <p>I am taking 3 credits of MDP this semester, so I must spend 9 hours a week on Studio-related tasks. On the week of 03/10/25-03/17/25 I spent 9 hours
               on Studio work, managing the Gitlab and working on the implementation for the dungeon generation. I spent 4 hours in meetings- 2 hours in both the studio
               and directors meetings. I also spent 5 hours on outside work for the studio. Last week, I spent 18 hours at GDC, roughly 6 hours a day for 3 days.
            </p>
          </div>
          </FadeOnScroll>
          <FadeOnScroll>
          <div className="card">
            <h2>DEV BLOG #5</h2>
            <h5>More dungeon minigame work, Apr 6, 2025</h5>

            <p><i>Gitlab management</i></p>
            <p>A chunk of my work time was dedicated to managing the Gitlab and approving merge requests. I went through and added some of my own fixes as well.
            </p>

            <p><i>Issues we ran into</i></p>
            <p>We realized that the documentation for the dungeon minigame had conflicting information and did not work logistically as it was written. This required
               a reconsideration of the system. We are now working on two seperate versions of the dungeon and deciding which one fits best within our time constraints
               and goals for the game showcase.
            </p>

            <p><i>Alternate dungeon system</i></p>
            <p>Our question with the dungeon minigame system was how interactive it was going to be: we could either rewrite the entire game to feature a randomly generated 
               node tree dungeon, or build from the existing system. The existing system has randomly generated text events that display to the player every second once they
               begin the dungeon. The alternate dungeon system I worked on involved adding a button for interactability, allowing the player to manually progress through each
               text event. The player may also enable autoplay, which does this automatically. This week, I will be adding GUI and art to this system based on the Dragonheart
               figma.
            </p>

            <p><i>Bug fixes</i></p>
            <p>These past few weeks, I've also worked on general bug fixes- identifying issues within the game and resolving them so that we have a
               more polished final product. I also cleaned up a few aspects of the game, like extra debug messages in the console.
            </p>

            <p><i>Time breakdown</i></p>
            <p>I am taking 3 credits of MDP this semester, so I must spend 9 hours a week on Studio-related tasks. On the week of 03/25/25-03/30/25 I spent 9 hours
               on Studio work, managing the Gitlab and working on the implementation/reconsideration of the dungeon generation. I spent 4 hours in meetings- 2 hours in both the studio
               and directors meetings. I also spent 5 hours on outside work for the studio. On the week of 03/31/25-04/06/25, I spent 4 hours in meetings again, and another 5 hours on
               outside work and bug fixes.
            </p>
          </div>
          </FadeOnScroll>
        </div>
      </div>
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

export default Blogs;
