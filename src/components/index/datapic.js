import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import "./item.scss"

const TestDataPic = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            frontmatter {
              title
              date
              link
            }
          }
        }
      }
    }
  `)
  return (
    <div className="grid-container">
      {data.allMarkdownRemark.edges.map(edge => {
        let title = edge.node.frontmatter.title
        let links = edge.node.frontmatter.link
        let content = edge.node.excerpt
        return (
          <div className="grid-item">
            <Card>
              <Card.Body>
                <div className="head-items">
                  <Card.Header style={{ color: "white", fontSize: "16px" }}>
                    <div className="testImage">image</div>
                  </Card.Header>
                  <Card.Title className="card-title">{title}</Card.Title>
                  <Card.Text className="card-content-text">{content}</Card.Text>
                  <Card.Text className="card-link">
                    <Link to={links} className="card-link">
                      Read more
                    </Link>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
export default TestDataPic
