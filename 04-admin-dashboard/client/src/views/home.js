import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Hero, HomeContent, NavBar } from '../components';
import Header from '../components/header';
import AdminNavbar from '../components/admin-nav';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Fragment>
      {!isAuthenticated ? <NavBar /> : <AdminNavbar />}
      <Hero />
    </Fragment>
  );
};

export default Home;
