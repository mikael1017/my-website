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
    <div id="experience" style={{ height: 1000 }}>
      <h1>Experience</h1>

      <div>
        <b class="ex_title">QA Test Engineer</b>
        <h6>
          ● Using lab equipment(CMW/R&S), validate device application
          features/functionality as specified in AT&T’s requirement(10776 Lab)
          using different scenarios on simulator equipment{" "}
        </h6>
        <h6>
          ● Verify device behavior for IP Messaging Evolution (IPME)
          functionalities.
        </h6>
        <h6>
          ● Verify basic IMS functionality (including error cases), VoLTE (calls
          and supplementary services) and SMS-over-IP
        </h6>
        <h6>
          ● Verify basic IMS functionality (including error cases), VoLTE (calls
          and supplementary services) and SMS-over-IP
        </h6>
      </div>
      <div>
        <b class="ex_title">Math Tutor</b>
        <h6 id="tutorDescription">
          ● Tutored middle school students who struggled in math Examined what
          each student is having trouble with and helped each individual with
          their weaknesses Improved all of students’ grade{" "}
        </h6>
        <h6>
          ● Learned how to interact with people who don’t have much
          understanding in subject and learned how to transfer my knowledge to
          other people
        </h6>
      </div>

      <p>
        <a
          className="resume"
          href={Profile}
          target="_blank"
          rel="noopener noreferrer"
        >
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
