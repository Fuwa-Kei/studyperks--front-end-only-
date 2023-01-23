import React from 'react'
import './footer.css'
import discord from '../assets/icons8-discord-new.svg'
import facebook from '../assets/icons8-facebook.svg'
import instagram from '../assets/icons8-instagram.svg'
import twitter from '../assets/icons8-twitter.svg'

function Footer() {
  return (
    <div id="contact" className="footer">
    <div className="section">
        <div className="col">
            <div className="logo">StudyPerks</div>
        </div>
        <div className="col">
            <p><span>Contact information</span></p>
            <p>Telephone: xxxxxxxxxx</p>
            <p>Email: contact@studyperks.com</p>
            <a href="/">Online Chat</a>
            <a href="/">Contact form</a>
        </div>
        <div className="col">
        <div className="socials">
            <p><span>Follow us</span></p>
            <div className="social-icons">
                <img src={discord} alt="discord"/>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer