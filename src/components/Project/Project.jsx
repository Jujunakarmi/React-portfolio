import password from "../../assets/password.png"
import weather from "../../assets/weather.png"
import workscheduler from "../../assets/workscheduler.png"
import quiz from "../../assets/quiz.png"
import texteditor from "../../assets/texteditor.png"
import furfile from "../../assets/furfile.png"

export default function Project() {

    return (
        <>
      <div>
        <h2>Bootcamp Portfolio</h2>
        <p>
          Applications created over the course of a 24-week Full-Stack Developer
          bootcamp. Starter code for several projects provided by the University
          of Oregon.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
        {/* Project 1 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={password}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> 
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
               A random password generator which will generate random password
               based on the selected criteria.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/Jujunakarmi/Password-generator"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://jujunakarmi.github.io/Password-generator/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>


        {/* Project 2 */}
        <div className="col">
          <div className="card h-100">
            { <img
              src={texteditor}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> }
            <div className="card-body">
              <h5 className="card-title">PWA Text Editor</h5>
              <p className="card-text">
              A web text editor where you can create a notes or even code snippets that runs in the browser, offline and can be installed locally to your machine.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> JavaScript, Node.js, Express, Webpack, Render</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/Jujunakarmi/PWA-text-editor"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://pwa-text-editor-2-x89n.onrender.com/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>


        {/* Project 3 */}
        <div className="col">
          <div className="card h-100">
            { <img
              src={furfile}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> }
            <div className="card-body">
              <h5 className="card-title">FurFile: Group Project</h5>
              <p className="card-text">
                An app to have the records of pets and which allows user to track and update their pets information online.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, Node.js, Express.js, Bcrypt, ESLint, Bootstrap, Heroku</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/jinkc21/furfile"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://immense-taiga-25334-d6b01512dabc.herokuapp.com/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>


        {/* Project 4 */}
        <div className="col">
          <div className="card h-100">
            { <img
              src={weather}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> }
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                A weather outlook application to aid the user in planning upcoming trips based on weather reports
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, Bootstrap</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/Jujunakarmi/Weather-dashboard"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://jujunakarmi.github.io/Weather-dashboard/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>


        {/* Project 5 */}
        <div className="col">
          <div className="card h-100">
            { <img
              src={workscheduler}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> }
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">
                A daily planner where the user can add important events to manage time effectively
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, Bootstrap, Google Fonts API, jQuery</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/Jujunakarmi/Scheduler-project"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://jujunakarmi.github.io/Scheduler-project/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>


        {/* Project 6 */}
        <div className="col">
          <div className="card h-100">
            { <img
              src={quiz}
              className="card-img-top"
              alt="screenshot of deployed website"
            /> }
            <div className="card-body">
              <h5 className="card-title">Coding Quiz Challenge</h5>
              <p className="card-text">
                A timed quiz on JavaScript fundamentals that stores high scores
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/Jujunakarmi/Quiz-project"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://jujunakarmi.github.io/Quiz-project/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}