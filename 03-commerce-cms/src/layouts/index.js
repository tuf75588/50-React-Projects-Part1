import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../style/index.scss';

const Layout = ({ children, site }, style) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" style={{ ...style }}>
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">🛍 MY CART 🛍</div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap">{children}</div>
    </div>
  </div>
);

export default Layout;
