
import React, { Component } from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'
import Layout from "../layout"
import config from "../../data/SiteConfig"

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Helmet title={`404 | ${config.siteTitle}`} />
          <p>
            The page you are looking for does not exists.
          </p>
          <Link to='/'>Home</Link>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
