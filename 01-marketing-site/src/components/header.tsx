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
  marginTop: '-2px'
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
  height: 40,
  borderRadius: '24px',
  backgroundColor: '#eee',
  border: '1px solid transparent',
  display: 'flex',
  transition: 'all .1s ease-in-out'

}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={headerStyles}
  >

    <nav style={navStyles}>
      <div style={firstChildDiv}><a style={anchorStyles} href="">Logo
        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px', whiteSpace: 'nowrap' }}
        ><span>NuSplash</span>

          <span>Photos for everyone</span>
        </div>
      </a>
        <div style={{ width: '100%', marginLeft: '18px' }}>
          <form style={formStyles}>
          <button title="Search NuSplash">
          <svg width="32" height="32" class="_3cOFI _2Jh5K _2_G8g" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
          </button>
          </form>
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
