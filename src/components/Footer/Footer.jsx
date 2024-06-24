import React from "react";
import {FaGithub,FaLinkedin } from "react-icons/fa";

import { ImStackoverflow } from "react-icons/im";
import "./Footer.css"


export default function Footer() {

  return (
    <div className="socials">
      
      <a href="https://github.com/Jujunakarmi/"> <FaGithub size={50} color="#344966" /></a>
      <a href="https://www.linkedin.com/in/juju-nakarmi-1a79a7181//"> <FaLinkedin size={50} color="#344966" /></a>
      <a href="https://stackoverflow.com/users/22967169/juju-nakarmi"> <ImStackoverflow size={50} color="#344966" /></a>
    </div>
  )
}