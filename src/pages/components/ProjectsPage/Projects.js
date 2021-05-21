import React from "react"

import Layout from "../../layout"
import SEO from "../../seo"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "../pages.scss"

import DataGaleria from "../common/posts/dataGaleria"

const ProjectsPage = ({ location }) => (
  <Layout>
    <SEO title="Projects" />
    <div className="page-header" id="Projects">
      <div className="container">
        <p className="page-title">Projects</p>
      </div>
    </div>
    <div className="location">
      <div className="container">
        <Breadcrumb
          location={location}
          style={{ color: "#777" }}
          crumbLabel="Projects"
          crumbStyle={{ color: "#999" }}
          crumbActiveStyle={{ color: "#777" }}
          crumbWrapperStyle={{ border: "none", background: "none" }}
        />
      </div>
    </div>
    <div className="pages">
      <div className="projects">
        <div className="container">
          <DataGaleria />
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
