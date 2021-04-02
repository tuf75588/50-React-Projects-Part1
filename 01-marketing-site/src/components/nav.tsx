import React from 'react';


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
            <li><a href="#"><span style={{fontWeight: 50}}>Editorial</span></a></li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="nav-items">
          <div className="inner-nav">
            <div className="chevron">
              <button className="chevron"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;