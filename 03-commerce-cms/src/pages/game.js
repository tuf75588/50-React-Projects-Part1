import React from 'react';
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
function Game(props) {
  const {
    location: { state: id },
  } = props;
  const { id: productId } = id;

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          products: allDatoCmsProduct {
            edges {
              node {
                id
                name
                price
                image {
                  url
                  sizes(
                    maxWidth: 300
                    maxHeight: 300
                    imgixParams: { fm: "jpg" }
                  ) {
                    ...GatsbyDatoCmsSizes
                  }
                }
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
        const product = data.products.edges.filter(
          ({ node }) => node.id === productId
        );
        console.log(product[0]);
        return (
          <Layout site={data.site}>
            <div
              className="game-container"
              style={{
                border: '1px solid black',
                textAlign: 'left',
                padding: '10px',
              }}
            >
              <h1>{product[0].node.name}</h1>
              <Img
                sizes={product[0].node.image.sizes}
                style={{ height: '100%', width: 300 }}
              />
            </div>
          </Layout>
        );
      }}
    />
  );
}

export default Game;
