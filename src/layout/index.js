import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./index.css";



export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer /> 
      </div>
    );
  }
}
