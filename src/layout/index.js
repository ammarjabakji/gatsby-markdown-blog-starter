import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import config from "../../data/SiteConfig";
import styles from  './index.module.scss'



export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />  
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer /> 
      </div>
    );
  }
}
