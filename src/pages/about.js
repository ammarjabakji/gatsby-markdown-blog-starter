import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <main>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </main>
      </Layout>
    );
  }
}

export default AboutPage;
