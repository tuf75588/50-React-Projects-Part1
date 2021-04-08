import React from 'react';

function Header() {
  return (
    <header className="header_home">
      <div className="header-nav">
        <section>
          <a href="/" className="home-link">Coolest React Conf</a>
          <ul>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/venue">Venue</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/conduct">Conduct</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </section>
        <div className="header-nav-social">
          <a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Tickets</a>
        </div>
      </div>
    </header>
  )
}

export default Header;