import React from "react"

import Carouselnav from "./components/carousel.js"
import FeaturedWorks from "./components/featuredworks.js"
import NewestWorks from "./components/newestwork.js"
import OurClients from "./components/ourclients.js"
import WhatWeDo from "./components/whatwedo.js"
import MainHead from "./components/mainhead.js"
import Certified from "./components/uscertified.js"

import SEO from "../../seo"
import "./Index.scss"

const IndexPage = () => (
  <div>
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
  </div>
)

export default IndexPage
