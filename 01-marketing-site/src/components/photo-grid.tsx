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
            <div className="item">
              <img src={photoOne} alt="demo one" />
              <img src={photoTwo} alt="demo two" />
              <img src={photoThree} alt="demo three" />
            </div>
            <div className="item">
              <img src={photoTwo} alt="demo two" />
              <img src={photoThree} alt="demo three" />
              <img src={photoOne} alt="demo one" />
            </div>
            <div className="item">
              <img src={photoOne} alt="demo one" />
              <img src={photoThree} alt="demo three" />
              <img src={photoTwo} alt="demo two" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PhotoGrid