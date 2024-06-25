import React from 'react';
import resume from "../assets/resume.pdf"

export default function Resume() {
  return (
    <div>
      <h2 >Resume</h2>
      <p id ='header-resume'>
        Click <a href={resume} target="_blank" download>here</a> to view my resume.
        <h3>Front-End Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <h3>Back-End Proficiencies</h3>
        <ul className="skills">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
      </p>
    </div>
  );
}