import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "react-bootstrap/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Img from "gatsby-image"

import "./carousel.scss"

const Carouselnav = () => {
  const data = useStaticQuery(graphql`
    query {
      construction: file(relativePath: { eq: "construction.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1903) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1903) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      modern: file(relativePath: { eq: "modern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1903) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="slider">
      <Carousel className="carouselNav">
        <Carousel.Item>
          <Img
            fluid={data.construction.childImageSharp.fluid}
            className="slider-image"
            style={{ position: "unset" }}
          />
          <Carousel.Caption>
            <div className="slider-title">Firth slider label</div>
            <div className="slider-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="slider-links">
              <button className="slider-button1">Button 1</button>
              <button className="slider-button2">Button 2</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={data.garden.childImageSharp.fluid}
            className="slider-image"
            style={{ position: "unset" }}
          />
          <Carousel.Caption>
            <div className="slider-title">Second slide label</div>
            <div className="slider-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="slider-links">
              <button className="slider-button1">Button 1</button>
              <button className="slider-button2">Button 2</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={data.modern.childImageSharp.fluid}
            className="slider-image"
            style={{ position: "unset" }}
          />
          <Carousel.Caption>
            <div className="slider-title">Third slide label</div>
            <div className="slider-text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </div>
            <div className="slider-links">
              <button className="slider-button1">Button 1</button>
              <button className="slider-button2">Button 2</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Carouselnav
