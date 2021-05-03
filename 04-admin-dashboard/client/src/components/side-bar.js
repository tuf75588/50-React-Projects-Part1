import React from 'react';
import Security, {
  Actions,
  Activity,
  Applications,
  Authentication,
  AuthPipeline,
  Branding,
  Monitoring,
  Organizations,
  UserManagement,
} from '../icons';
function Sidebar() {
  return (
    <div className="dash-login">
      <div className="sidebar drawer">
        <nav className="nav-column">
          <div role="list" className="div_links">
            <a
              class="MuiListItem-root jss76 MuiListItem-gutters Mui-selected jss79"
              role="listitem"
              href="/dashboard/us/admin-dashboards/"
            >
              <div class="MuiListItemIcon-root jss80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div class="MuiListItemText-root">
                <span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                  Getting Started
                </span>
              </div>
            </a>
            <Activity />
            <Applications />

            <Authentication />
            <Organizations />
            <UserManagement />
            <Branding />
            <Security />
            <Actions />
            <AuthPipeline />
            <Monitoring />
          </div>
          <div className="help" role="list">
            <a href="blank">Get Support</a>
            <a href="blank">Give Feedback</a>
            <a href="blank">Switch Back</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
