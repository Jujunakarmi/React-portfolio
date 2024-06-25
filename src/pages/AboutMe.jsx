import pic from "../assets/juju-pic.jpg"
import "../index.css"

export default function AboutMe() {

  return (
    <div>

      <h2 id="about">About Me</h2>
      <img
        src={pic}
        className="img-thumbnail"
        alt="profile picture"
      ></img>
      
      <div id="about-me">
      <p>

        Hello, My name is Juju Nakarmi.<br />
        I am currently studing full stack development at UNC chapel hill
        as a bootcamp student. I am very passionate about web application development. "I have strong problem
        solving abilities, proven ability to collaborate effectively with cross-functional teams and
        stakeholders. <br />
        <br />
        Beyond coding, I'm an avid music enthusiast and a guitarist, finding inspiration in melodies
        and rhythms that parallel the intricacies of software development.I'm committed to continuous
        learning and growth, always seeking out newchallenges and opportunities to expand my skill set.


      </p>
      </div>
    </div>

  )
}
