import React from 'react';
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
function Game() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allDatoCmsProduct(filter: {}) {
            edges {
              node {
                image {
                  url
                  sizes(maxHeight: 300, maxWidth: 300) {
                    src
                    srcSet
                  }
                }
                id
              }
            }
          }
          site(siteMetadata: {}) {
            siteMetadata {
              siteName
            }
          }
        }
      `}
      render={(data) =>
        console.log(data) || (
          <Layout site={data.site}>
            <h1>game page</h1>
          </Layout>
        )
      }
    />
  );
}

export default Game;
