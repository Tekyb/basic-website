import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Card from 'react-bootstrap/Card';

import '../../../styles.scss';
import './item.scss';

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
  `);
  return (
    <div className="grid-container">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <div className="grid-item">
            <Card>
              <Card.Body>
                <div className="head-items">
                  <Card.Header style={{ color: 'white', fontSize: '16px' }}>
                    <div className="testImage">image</div>
                  </Card.Header>
                  <Card.Title className="card-title">{edge.node.frontmatter.title}</Card.Title>
                  <Card.Text className="card-content-text">{edge.node.excerpt}</Card.Text>
                  <Card.Text className="card-link">
                    <Link to={edge.node.frontmatter.link} className="card-link">
                      Read more
                    </Link>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default TestDataPic;
