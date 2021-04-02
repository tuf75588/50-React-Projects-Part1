import React from 'react'


const navStyles = {
  position: 'sticky',
  background: '#fff',
  zIndex: 2
}


function Nav(): JSX.Element {
  return (
    <div style={navStyles}>
      <div className="nav-container">
        <div className="editorial">
          <ul className="ul-editorial">
            <li><a href="#"><span style={{ fontWeight: 50 }}>Editorial</span></a></li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="nav-items">
          <div className="inner-nav">
            <div className="second-inner-nav-child">
              <div></div>
              <div className="shrink">
                <div className="shrink-child">
                  <ul className="shrink-ul">
                    <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Wallpapers</span>
                      </a>
                    </li>
                    <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Nature</span>
                      </a>
                    </li>
                    <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">People</span>
                      </a>
                    </li>        <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Architecture</span>
                      </a>
                    </li>
                    <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Current Events</span>
                      </a>
                    </li>        <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Business & Work</span>
                      </a>
                    </li>        <li className="shrink-ul-li">
                      <a className="shrink-ul-anchor" href="#">
                        <span className="shrink-ul-span">Fashion</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;


