

import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link text-light" to="/">
        About Me
      </Link>
      <Link className="nav-link text-light" to="/portfolio">
       Portfolio
      </Link>
      <Link className="nav-link text-light" to="/contact">
        Contact Me
      </Link>
      <Link className="nav-link text-light" to="/resume">
       Resume
      </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
