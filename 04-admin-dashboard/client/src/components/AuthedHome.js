import React from 'react';
import AuthPanels from './auth-panels';

import Sidebar from './side-bar';
function AuthedHome() {
  return (
    <React.Fragment>
      <div className="panels-container">
        <Sidebar />
        <AuthPanels />
      </div>
    </React.Fragment>
  );
}
export default AuthedHome;
