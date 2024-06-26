

import { Link } from 'react-router-dom';
import './Nav.css'
import Header from '../Header/Header';

export default function Nav() {
  return (

    <nav className="navbar navbar-expand-lg ">
      <Header />
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <Link className="nav" to="/">
              About Me
            </Link>
            <Link className="nav" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav" to="/contact">
              Contact Me
            </Link>
            <Link className="nav" to="/resume">
              Resume
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
