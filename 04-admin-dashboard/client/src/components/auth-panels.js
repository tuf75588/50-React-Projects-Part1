import React from 'react';
import ApplicationNavigation from './application-navigation';

function AuthPanels() {
  return (
    <div className="panel-container">
      <h4>application_name</h4>
      <ApplicationNavigation />
      <hr />
      <div className="panel-content">
        <div className="grid-container">
          <form noValidate>
            <legend className="legend">Basic Information</legend>
            <div className="outer">
              <div className="first-form-section">
                <div>
                  <label>Name</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin_dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Domain</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin-dashboards.us.auth0.com"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Client ID</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="l8LWMMP0DUVsWw434222f3oYMa1Ww2rt"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Client Secret</label>
                  <div>
                    <input
                      type="password"
                      className="form_control_input"
                      placeholder="••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"
                    />
                  </div>
                </div>
                <hr style={{ marginTop: '30px' }} />
              </div>
              <legend className="legend">Application Properties</legend>
              <div className="first-form-section">
                <div>
                  <label>Name</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin_dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Domain</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin_dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Client ID</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin_dashboard"
                    />
                  </div>
                </div>
              </div>
              <div className="first-form-section">
                <div>
                  <label>Client Secret</label>
                  <div>
                    <input
                      type="text"
                      className="form_control_input"
                      placeholder="admin_dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: '20px' }} />
          </form>
        </div>
      </div>
    </div>
  );
}
export default AuthPanels;
