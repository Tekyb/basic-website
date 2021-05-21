import React from "react"

import Layout from "../../layout"

import Carouselnav from "./components/carousel.js"
import FeaturedWorks from "./components/featuredworks.js"
import NewestWorks from "./components/newestwork.js"
import OurClients from "./components/ourclients.js"
import WhatWeDo from "./components/whatwedo.js"
import MainHead from "./components/mainhead.js"
import Certified from "./components/uscertified.js"

import SEO from "../../seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main">
      <Carouselnav />
      <MainHead />
      <Certified />
      <WhatWeDo />
      <NewestWorks />
      <FeaturedWorks />
      <OurClients />
    </div>
  </Layout>
)

export default IndexPage
