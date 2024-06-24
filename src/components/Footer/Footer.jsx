import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css"


export default function Footer() {

  return (
    <div className="socials">
      <a href="https://facebook.com/"> <FaFacebook size={50} /></a>
      <a href="https://instagram.com/"> <AiFillInstagram size={60} /></a>
      <a href="https://linkedin.com/"> <FaLinkedin size={50} /></a>
    </div>
  )
}