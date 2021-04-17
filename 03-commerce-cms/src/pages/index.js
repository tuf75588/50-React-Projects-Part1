import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../layouts/index';
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
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
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <div className="Product__image">
                  <Link to="/game" state={{ id: product.id }}>
                    <Img sizes={product.image.sizes} />
                  </Link>
                </div>{' '}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);
