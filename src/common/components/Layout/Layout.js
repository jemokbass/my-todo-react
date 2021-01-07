import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "./blocks/Footer/Footer";
import Header from "./blocks/Header/Header";

const Layout = (props) => {
  const { children, withoutHeader, withoutFooter } = props;
  return (
    <Fragment>
      {!withoutHeader && <Header />}
      <main className="main">{children}</main>
      {!withoutFooter && <Footer />}
    </Fragment>
  );
};

Layout.defaultProps = {
  children: <>Main</>,
  withoutHeader: false,
  withoutFooter: false,
};

Layout.propTypes = {
  children: PropTypes.node,
  withoutHeader: PropTypes.bool,
  withoutFooter: PropTypes.bool,
};

export default Layout;
