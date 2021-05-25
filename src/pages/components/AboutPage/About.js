import React from "react"

import SEO from "../../seo"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "./About.scss"

import TestDataPic from "../common/posts/datapic"

const AboutPage = ({ location }) => (
  <div>
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
  </div>
)

export default AboutPage
