import React from 'react';
import AuthenticationButton from './authentication-button';
function AdminNavbar() {
  return (
    <header className="admin-nav">
      <h1 className="admin_header">Admin dashboard</h1>
      <span style={{ width: '10%', marginRight: '10px' }}>
        <AuthenticationButton />
      </span>
    </header>
  );
}

export default AdminNavbar;
