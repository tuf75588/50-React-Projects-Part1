import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

type HeaderProps = {
  siteTitle: string;
}

const headerStyles = {
  position: 'sticky',
  top: 0,
  zIndex: '3'
}
const navStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingRight: '20px',
  paddingLeft: '20px',
  backgroundColor: '#fff',
  height: '62px'
}


const anchorStyles = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '-2px',
  textDecoration: 'none',
}


const firstChildDiv = {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
}


const formStyles = {
  fontSize: '14px',
  position: 'relative',
  color: '#111',
  height: '40px',
  borderRadius: '24px',
  backgroundColor: '#eee',
  border: '1px solid transparent',
  display: 'flex',
  transition: 'all .1s ease-in-out'

}


const secondChildDiv = {
  paddingLeft: '36px',
  paddingRight: '36px',
  textAlign: 'center',
}

const unorderedListStyles = {
  display: 'inline-block',
  paddingLeft: 0,
  listStyle: 'none',
  marginTop: 0,
  marginBottom: 0,
}

const listStyle = {
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 500,
}

const linkAnchor = {
  padding: '20px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none'
}

const submitButtonContainer = {
  marginRight: '48px',
  display: 'inline-block'
}

const buttonStyles = {
  color: '#767676',
  backgroundColor: '#fff',
  borderColor: '#d1d1d1',
  height: '32px',
  padding: '0 11px',
  fontSize: '14px',
  lineHeight: '30px',
  display: 'inline-block',
  borderRadius: '4px',
  transition: 'all .1s ease-in-out',
  textAlign: 'center',
  fill: 'currentColor',
  textDecoration: 'none',


}



// 

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={headerStyles}
  >

    <nav style={navStyles}>
      <div style={firstChildDiv}><Link to='/' style={{ textDecoration: 'none' }}><a style={anchorStyles} href=""><svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', whiteSpace: 'nowrap' }}
        ><span><strong>{siteTitle}</strong></span>

          <span>Photos for everyone</span>
        </div>
      </a>
      </Link>
        <div style={{ width: '100%', marginLeft: '18px' }}>
          <form style={formStyles}>
            <button title="Search NuSplash" className="svg-button">
              <svg width="32" height="32" className="_3cOFI _2Jh5K _2_G8g" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
            </button>
          </form>
        </div>
      </div>
      <div style={secondChildDiv}>
        <ul style={unorderedListStyles}>
          <li style={listStyle}><a style={linkAnchor}>Explore</a></li>
          <li style={listStyle}><a style={linkAnchor}>Brands</a></li>
        </ul>
      </div>
      <div className="third-child-div">
        <div>
          <div style={{ marginRight: '48px', display: 'inline-block' }}>
            <button style={buttonStyles} className="submit">Submit</button>
          </div>
          <div className="login-join-container">
            <a href="#" className="login">Login</a>
            <Link to="/sign-up" className="join">Join free</Link>
          </div>
        </div>
      </div>
    </nav>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
