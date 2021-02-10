import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "../components/pages.scss"

import TestDataPic from "../components/index/dataPic"

const AboutPage = ({ location }) => (
  <Layout>
    <SEO title="About" />
    <div className="page-header">
      <div className="container">
        <p className="page-title">About</p>
      </div>
    </div>
    <div className="location">
      <div className="container">
        <Breadcrumb
          location={location}
          style={{ color: "#777" }}
          crumbLabel="About"
          crumbStyle={{ color: "#999" }}
          crumbActiveStyle={{ color: "#777" }}
          crumbWrapperStyle={{ border: "none", background: "none" }}
        />
      </div>
    </div>
    <div className="pages">
      <div className="about">
        <div className="container">
          <TestDataPic />
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
