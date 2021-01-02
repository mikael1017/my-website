import React from "react";
import Profile from "./document/resume.pdf";
import "./experience.css";


function Experience() {
    return (
        <div id="experience" style={{height: 500}}>
            Experience
            <p>
                <a className="resume" href={Profile} target="_blank" rel="noopener noreferrer">
                    Click to see my resume
                    <i class="far fa-file-alt"></i>
                </a>
            </p>
        </div>
    )
}


export default Experience;