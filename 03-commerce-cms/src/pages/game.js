import React from 'react';
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby';
function Game({ location }) {
  const { state } = location;
  console.log(state);
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          site(siteMetadata: {}) {
            siteMetadata {
              siteName
            }
          }
        }
      `}
      render={(data) => (
        <Layout site={data.site}>
          <h1>game page</h1>
        </Layout>
      )}
    />
  );
}

export default Game;
