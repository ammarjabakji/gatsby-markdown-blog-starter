import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import "./index.css";
import Header from "../components/Header";



export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        {children}
        <Footer /> 
      </div>
    );
  }
}
