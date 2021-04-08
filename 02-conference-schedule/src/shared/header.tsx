import React from 'react';
function Header() {
  return (
    <header className="header_home">
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
    </header>
  )
}

export default Header;