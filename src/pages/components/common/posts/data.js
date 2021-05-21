import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import "../../../styles.scss"

const TestData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              excerpt
              frontmatter {
                title
                link
              }
            }
          }
        }
      }
    `
  )
  return (
    <div className="grid-container">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <div className="grid-item">
            <Card>
              <Card.Body>
                <Card.Header className="card-title">
                  {edge.node.frontmatter.title}
                </Card.Header>
                <Card.Text className="card-content">
                  {edge.node.excerpt}
                </Card.Text>
                <Card.Text className="card-link">
                  <Link to={edge.node.frontmatter.link} className="card-link">
                    Read more
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
export default TestData
