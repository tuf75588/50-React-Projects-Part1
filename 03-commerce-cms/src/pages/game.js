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

        return (
          <Layout site={data.site}>
            <div
              className="wrapper"
              style={{
                border: '1px solid black',
                display: 'flex',
                padding: '10px',

                justifyContent: 'space-between',
              }}
            >
              <div className="game-container">
                <Img
                  sizes={product[0].node.image.sizes}
                  style={{ height: 400, width: 300 }}
                />
              </div>
              <aside style={{ display: 'flex', flexDirection: 'column' }}>
                <h1
                  style={{
                    fontSize: '3.5rem',
                  }}
                >
                  {product[0].node.name}
                </h1>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Respawn Entertainment
                </p>
                <button
                  style={{
                    padding: '10px',
                    color: '#fff',
                    backgroundColor: 'rebeccapurple',
                    marginTop: '30px',
                  }}
                >
                  BUY NOW
                </button>
              </aside>
            </div>
          </Layout>
        );
      }}
    />
  );
}

export default Game;
