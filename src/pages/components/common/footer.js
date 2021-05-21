import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "react-bootstrap"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="module">
      <div className="container">
        <Row>
          <Col>
            <p className="par1">ABOUT COMPANY</p>
            <p className="par2">
              Our clients range from FTSE companies, to large organisations and
              some small local businesses who are striving to expand.
            </p>
            <p className="par2">
              To see a detailed list of our works and the progress please see
              our project page.
            </p>
          </Col>
          <Col>
            <p className="par1">CONSTRUCTION OFFICE</p>
            <p className="par2">
              1600 Amphitheatre Parkway
              <br />
              Mountain View CA 94043
            </p>
            <p className="par2">1.800.451.128</p>
            <p className="par2">chicago@construction.com</p>
            <p className="par2">FAX: (123) 123-4567</p>
          </Col>
          <Col>
            <p className="par1">BUSINESS HOURS</p>
            <p className="par2">
              Our support available to help you 24 hours a day, seven days a
              week.
            </p>
            <div className="part2">
              <ul className="columnDays">
                <li style={{ padding: 0, paddingBottom: 6, paddingTop: 6 }}>
                  Monday-Friday:
                  <span className="right">9am to 5pm</span>
                </li>
                <li className="rowDays">
                  Saturday:
                  <span className="right">10am to 2pm</span>
                </li>
                <li className="rowDays">
                  Sunday:
                  <span className="right">Closed</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
