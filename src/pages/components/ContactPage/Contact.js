import React from "react"

import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../../layout"
import SEO from "../../seo"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import "../pages.scss"

const ContactPage = ({ location }) => (
  <Layout>
    <SEO title="Contact" />
    <div className="contactus">
      <div className="page-header-image">
        <div className="container page-title-text">
          <div className="title-text">
            <p
              style={{
                fontSize: "45px",
                fontWeight: "700",
                fontFamily: "Montserrat",
                lineHeight: "1.3",
                textTransform: "uppercase",
                margin: "-5px 0 2px -2px",
                letterSpacing: "0",
              }}
            >
              GET IN TOUCH WITH US.
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
                fontFamily: "PT Sans",
              }}
            >
              Contact The Construction Company
            </p>
          </div>
        </div>
      </div>
      <div className="page-header">
        <div className="container">
          <p className="page-title">Contact Us</p>
        </div>
      </div>
      <div className="location">
        <div className="container">
          <Breadcrumb
            location={location}
            style={{ color: "#777" }}
            crumbLabel="Contact"
            crumbStyle={{ color: "#999" }}
            crumbActiveStyle={{ color: "#777" }}
            crumbWrapperStyle={{ border: "none", background: "none" }}
          />
        </div>
      </div>
      <div className="pages">
        <div className="contact">
          <div className="container">
            <div className="content">
              <div className="contact-message">
                <div className="contact-text">
                  <p className="info-content">
                    Call or submit our online form to request an estimate or for
                    general questions about U.S. Certified Contractors and our
                    services. We look forward to serving you!
                  </p>
                </div>
                <div className="form-body">
                  <Form>
                    <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control placeholder="Your Email" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Your Phone Number" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="Subject" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          as="textarea"
                          rows="5"
                          placeholder="Message"
                        />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="company-info">
                <div className="addresses">
                  <div className="info-inner">
                    <p className="info-title">MAILING ADDRESS</p>
                    <p className="info-content">
                      1600 Amphitheatre Parkway<br></br>
                      Mountain View CA 94043<br></br>
                      United States
                    </p>
                  </div>
                  <div className="info-inner">
                    <p className="info-title">CONTACT INFO</p>
                    <p className="info-content">
                      +1 (312) 380-6650<br></br>
                      contact@construction.com<br></br>
                      @construction_llc
                    </p>
                  </div>
                </div>
                <div className="gps-map">
                  <iframe
                    style={{ width: "100%", height: "100%", border: "0" }}
                    src=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
