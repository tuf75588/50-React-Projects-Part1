import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
function Hero() {
  return (
    <div className="hero-container" style={{ width: '100vw', padding: 0 }}>
      <StaticImage
        src="../images/hero.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  )
}

export default Hero;