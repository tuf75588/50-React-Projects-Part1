import React from 'react';

const Hero = () => (
  <div className="flex-container">
    <div className="container">
      <div className="row">
        <span className="flex-item">
          <form className="form-control">
            <div>
              <label htmlFor="username">username</label>
            </div>
            <input type="text" placeholder="username" />
            <div>
              <label htmlFor="password">password</label>
            </div>
            <input type="password" placeholder="password" />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </span>
      </div>
    </div>
  </div>
);

export default Hero;
