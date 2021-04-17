import React from 'react';
import Layout from '../layouts/index';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
function Game(props) {
  console.log(props);
  const {
    location: { state: id },
  } = props;
  const { id: productId } = id;
  React.useEffect(() => {
    console.log('i am re-rendering');
  });
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
                developer
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
        console.log(product);

        return (
          <Layout site={data.site} style={{ border: '1px solid black' }}>
            <main style={{ border: '1px solid black', padding: '10px' }}>
              <div
                className="wrapper"
                style={{
                  display: 'flex',

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
                    className="Product__name"
                  >
                    {product[0].node.name}
                  </h1>
                  <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
                    {product[0].node.developer}
                  </p>
                  <p
                    style={{ textAlign: 'right', fontWeight: 'bold' }}
                    className="Product__price"
                  >
                    ${product[0].node.price}
                  </p>
                  <button
                    style={{
                      padding: '10px',
                      color: '#fff',
                      backgroundColor: 'rebeccapurple',
                      marginTop: '30px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product[0].node.id}
                    data-item-price={product[0].node.price}
                    data-item-image={product[0].node.image.url}
                    data-item-name={product[0].node.name}
                    data-item-url="/"
                  >
                    BUY NOW
                  </button>
                </aside>
              </div>
              <div
                style={{
                  marginTop: '2em',
                  textAlign: 'center',
                }}
              >
                <h1 style={{ fontSize: '2rem', textDecoration: 'underline' }}>
                  More information
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae tempora voluptate perferendis! Autem, et?
                  Repellendus, sequi quos? Quasi veritatis, sed ea perferendis
                  magnam aliquam totam quisquam eaque rem, temporibus excepturi?
                </p>
              </div>
              <div
                style={{
                  marginTop: '2em',
                  textAlign: 'center',
                }}
              >
                <h1 style={{ fontSize: '2rem', textDecoration: 'underline' }}>
                  Reviews
                </h1>
                <ul
                  style={{
                    textAlign: 'left',
                    margin: '10px',
                    listStyle: 'square',
                  }}
                >
                  <li>The best game I have ever played!</li>
                  <li>This game changed my life!</li>
                  <li>I spent all day playing this and I regret nothing</li>
                  <li>I hated it! Would not recommend!</li>
                </ul>
              </div>
            </main>
          </Layout>
        );
      }}
    />
  );
}

export default Game;
