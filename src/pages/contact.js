import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <main>
          <Helmet title={`About | ${config.siteTitle}`} />
          <h1>Contact us</h1>
        </main>
      </Layout>
    );
  }
}

export default AboutPage;
