import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
function Hero() {
  return (
    <div className="hero-container" style={{ width: '100vw', padding: 0, position: 'relative' }}>
      <div style={{ position: 'absolute', fontWeight: 700, zIndex: 1, top: '20%', left: '30%', fontSize: '2.5rem', color: '#fff' }}>
        <span>Nusplash</span>
      </div>
      <div style={{ position: 'absolute', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center', width: '19%', paddingRight: '12px', top: '-13%', left: '30%', color: '#fff' }}>
        <h1 style={{ fontSize: '18px', fontWeight: 400, }}>The internet’s source of freely-usable images.</h1>
      </div>
      <StaticImage
        src="../images/hero.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Nusplash hero"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  )
}

export default Hero;