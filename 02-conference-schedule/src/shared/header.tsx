import React from 'react';
import mockLogo from '../images/mock_logo.png'
function Header() {
  return (
    <header className="header_home">
      <div className="blm_banner">Black Lives Matter</div>
      <div className="header-nav">
        <section>
          <ul>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/venue">Venue</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/conduct">Conduct</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </section>
        <section className="header-nav-social">
          <a href="http://" className="Icon" target="_blank" rel="noopener noreferrer">

          </a>
          <a href="http://" className="Icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i></a>
          <a href="http://" className="Icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i></a>
          <a href="http://" className="Icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i></a>
          <a href="http://" className="Button" target="_blank" rel="noopener noreferrer">Tickets</a>
        </section>
      </div>
      <div className="home_header">
        <div className="home_header_wrapper">
          <img src={mockLogo} alt="Mock conference logo" className="home_header_logo" />
          <div className="home_header_content">
            <h1>Awesome React Conf</h1>
            <h2>{new Date().toDateString()}</h2>
            <p>Awesome React Conf is a community conference about React and topics interesting to React developers. We focus on a friendly, welcoming atmosphere, engaging talks from new and established speakers, and plenty of hallway-track time to chat with interesting people.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;