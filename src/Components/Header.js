import React from "react";
import TypeWriter from "typewriter-effect";
import "../styles/RetroHeader.css";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home" className="retro-header">
      <nav id="nav-wrap" className="retro-nav">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          [MENU]
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          [CLOSE]
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              [HOME]
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              [ABOUT]
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              [STATS]
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              [QUESTS]
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              [ALLIES]
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              [MESSAGE]
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter
              options={{
                strings: [`PLAYER: ${name}`, 'PRESS START'],
                autoStart: true,
                loop: true,
                cursor: '█'
              }}
            />
          </h1>
          <h3>
            <span className="location">LOCATION: {city}</span><br/>
            <span className="class">CLASS: {occupation}</span><br/>
            <span className="mission">{description}</span>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          [PRESS DOWN TO START]
        </a>
      </p>
    </header>
  );
};

export default Header;