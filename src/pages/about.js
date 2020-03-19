import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import About from '../components/About'
import config from '../../data/SiteConfig'

const AboutPage = () => (
  <Layout>
    <main>
      <Helmet title={`About | ${config.siteTitle}`} />
      <About />
    </main>
  </Layout>
)

export default AboutPage
