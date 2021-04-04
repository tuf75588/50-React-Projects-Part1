import React from 'react';
import photoOne from '../images/one.jpg'
import photoTwo from '../images/two.jpg'
import photoThree from '../images/three.jpg'

function PhotoGrid() {
  return (
    <div className="grid-container">
      <div>
        <div>
          <div className="items">
            <div><img src={photoOne} alt="demo one" /></div>
            <div><img src={photoTwo} alt="demo two" /></div>
            <div><img src={photoThree} alt="demo three" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PhotoGrid