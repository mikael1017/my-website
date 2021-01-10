import React from "react";

function Portfolio() {
  return (
    <div id="portfolio" style={{ height: 500 }}>
      <h2>Portfolio</h2>
      <div>
        <b class="proj_title">Chess Game</b>
        <h6 class="description">- Used pygame library in Python</h6>
        <h6 class="description">
          - Written in Object Oriented Programming style
        </h6>
        <h6 class="description">
          - Came up with my own algorithm of moving a chess piece
        </h6>
      </div>
      <p>
        <a
          href="https://github.com/mikael1017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </p>
    </div>
  );
}

export default Portfolio;
