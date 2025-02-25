import React from "react";
import "../styles/retro-game.css";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap pixel-border">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} className="pixel-image" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>[ {projects.title} ]</h5>
                  <p> {projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>==== SELECT QUEST ====</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;