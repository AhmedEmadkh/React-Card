import React from "react";
import Footer from "./footer"
import img from "../imgs/happy-g4c335de22_1920.jpg"
export default function Content(){
  return(<div className="card">
    <div className="image-holder">
    <img src={img} alt="aaa" />
  </div>
  <div className="container">
      <h3>Ahmed Emad</h3>
      <h4>Frontend Developer</h4>
  <p>AhmedEM.website</p>
  <div className="buttons-holder">
  <button className="email"><i class="fa-solid fa-envelope"></i>  Email</button>
  <button className="linkdin"><i class="fa-brands fa-linkedin"></i>  LinkedIn</button>
  </div>
  <div className="about">
    <h4>About</h4>
    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
  </div>
  <div className="about">
    <h4>Intersers</h4>
    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
  </div>
  </div>
  <Footer />
  </div>
  )
}