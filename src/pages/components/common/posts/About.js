import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layout"

import "../../pages.scss"
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const About = (props) => {
  return (
    <Layout>
      <div className="page-header">
        <div className="container">
          <p className="page-title">{props.data.markdownRemark.frontmatter.title}</p>
        </div>
      </div>
      <div className="pages">
        <div className="about">
          <div className="container">
		   <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
		  </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
