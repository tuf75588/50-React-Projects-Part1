import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loading } from './components';
import { Home, Profile, ExternalApi } from './views';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app">
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/external-api" component={ExternalApi} />
      </Switch>
    </div>
  );
};

export default App;
