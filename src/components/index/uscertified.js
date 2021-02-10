import React from "react"

import "./uscertified.scss"

import "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const Certified = () => (
  <div className="items">
    <div className="container">
      <div className="item">
        <div className="items-head">
          <h2 className="item-title">U.S. Certified Contractors</h2>
          <span className="head-underline"></span>
        </div>
        <div className="item-content">
          <div className="grid-container">
            <div className="grid-item-certified">
              <FontAwesomeIcon
                icon={["fas", "university"]}
                style={{
                  color: "#777",
                  width: "70px",
                  height: "80",
                }}
              />
              <p className="certified-title">Government Building</p>
              <p className="certified-content">
                We understand you need a building that works for you and your
                organization, and it must function well.
              </p>
            </div>
            <div className="grid-item-certified">
              <FontAwesomeIcon
                icon={["fas", "hospital"]}
                style={{
                  color: "#777",
                  width: "70px",
                  height: "80",
                  textAlign: "center",
                }}
              />
              <p className="certified-title">Health Care Construction</p>
              <p className="certified-content">
                We are very familiar with the challenges of creating
                high-quality, cost-effective health care environments.
              </p>
            </div>
            <div className="grid-item-certified">
              <FontAwesomeIcon
                icon={["fas", "beer"]}
                style={{
                  color: "#777",
                  width: "70px",
                  height: "80",
                }}
              />
              <p className="certified-title">Water Treatment</p>
              <p className="certified-content">
                The most powerful things we do is help improve water quality for
                millions of people each year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Certified
