import React from "react";
import Profile from "./document/resume.pdf";
import "./experience.css";

function Experience() {
  function highlight(e) {
    e.target.className = "fas fa-file-alt";
  }

  function unhighlight(e) {
    e.target.className = "far fa-file-alt";
  }

  return (
    <div id="experience" style={{ height: 500 }}>
      Experience
      <p>
        <a
          className="resume"
          href={Profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <b>Math Tutor</b>
            <h5 id="tutorDescription">
              Tutored middle school students who struggled in math Examined what
              each student is having trouble with and helped each individual
              with their weaknesses Improved all of students’ grade Result:
              Learned how to interact with people who don’t have much
              understanding in subject and learned how to transfer my knowledge
              to other people
            </h5>
          </div>
          <i
            class="far fa-file-alt"
            onMouseEnter={highlight}
            onMouseLeave={unhighlight}
          ></i>
        </a>
      </p>
    </div>
  );
}

export default Experience;
