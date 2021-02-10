import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

import "./item.scss"

const DataGaleria = () => {
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
    <div className="grid-container content-in-pictures">
      {data.allMarkdownRemark.edges.map(edge => {
        let title = edge.node.frontmatter.title
        let link = "http://localhost:8000/"+edge.node.frontmatter.link
        return (
          <div className="grid-item">
            <Card>
              <Card.Body>
                <div className="head-items">
                  <Card.Header style={{ color: "white", fontSize: "16px" }}>
                    <div className="card-image">
                      <div className="card-content">
                        <Card.Title className="card-title">{title}</Card.Title>
                        <Card.Text className="card-link">
                          <Link
                            to={link}
                            className="card-link"
                          >
                            Read more
                          </Link>
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Header>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
export default DataGaleria
