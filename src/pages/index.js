import React from "react"

import Layout from "../components/layout"

import "../components/index.scss"

import Carouselnav from "../components/index/carousel"
import FeaturedWorks from "../components/index/featuredworks"
import NewestWorks from "../components/index/newestwork"
import OurClients from "../components/index/ourclients"
import WhatWeDo from "../components/index/whatwedo"
import MainHead from "../components/index/mainhead"
import Certified from "../components/index/uscertified"

import SEO from "../components/seo"

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
