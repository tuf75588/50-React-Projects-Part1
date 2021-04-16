import React from 'react';
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
function Game(props) {
  const {
    location: {
      state: { key },
    },
  } = props;
  console.log({ key });
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          datoCmsProduct {
            image {
              sizes(maxWidth: 300, maxHeight: 300) {
                ...GatsbyDatoCmsSizes
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
      render={(data) => {
        return (
          <Layout site={data.site}>
            <div
              className="game-container"
              style={{ border: '1px solid black' }}
            >
              <Img
                sizes={data.datoCmsProduct.image.sizes}
                style={{ height: 300, width: 300 }}
              />
            </div>
          </Layout>
        );
      }}
    />
  );
}

export default Game;
