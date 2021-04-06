import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
function Hero() {
  return (
    <div className="hero-container" style={{ padding: 0, position: 'relative' }}>

      <div className="flex-containe" style={{ position: 'absolute', display: 'flex', flexDirection: 'column', zIndex: '1', height: '70%', justifyContent: 'center', left: '30%', color: '#fff', width: '60%' }}>
        <h1 style={{ fontWeight: 700 }}>Nusplash</h1>
        <span className="subtext">The internet’s source of freely-usable images.</span>
        <p className="subtext">Powered by creators everywhere.</p>
        <input type="text" name="search" placeholder="Search images" style={{ padding: '20px', width: '60%', borderRadius: '5px', border: 0, marginLeft: '-3px' }} />
        <p>Trending: <span style={{
          color: 'hsla(0,0%,100%,.8)'
        }}>flower, wallpapers, backgrounds, happy, love</span></p>
      </div>
      <StaticImage
        src="../images/hero.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Nusplash hero"
        style={{ marginBottom: `1.45rem` }}
      />
    </div >
  )
}

export default Hero;


