import { Link } from "gatsby"
import React, { Component } from "react"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

import "./header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("nav")
      const top = window.scrollY < 30
      if (top) {
        nav.classList.remove("scrolled")
      } else {
        nav.classList.add("scrolled")
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    return (
      <header id="nav" onScroll={this.componentDidMount()}>
        <div className="container">
          <div className="head-line">
            <div className="header-logo">
              <h1 style={{ margin: 0 }}>
                <Link to="/" className="logo">
                  Egy cég
                </Link>
              </h1>
            </div>
            <div className="header-nav">
              <div className="head-number">
                <p
                  style={{
                    color: "#fab702",
                    fontSize: "18px",
                    textDecoration: "uppercase",
                    fontWeight: "lighter",
                  }}
                >
                  Tel: 99/ 999 9999
                </p>
              </div>
              <ul className="desktop-nav">
                <li>
                  <Link
                    to="/"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Our work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
              <DropdownButton
                id="dropdown-item-button"
                title={
                  <FontAwesomeIcon
                    icon={["fas", "bars"]}
                    style={{
                      color: "white",
                      width: "20px",
                      height: "22px",
                    }}
                  />
                }
                className="mobile-nav"
              >
                <Dropdown.Item as="button">
                  <Link
                    to="/"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <Link
                    to="/Service"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Services
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <Link
                    to="/About"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Who we are
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <Link
                    to="/Projects"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Our work
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <Link
                    to="/Contact"
                    className="links"
                    activeClassName="active-nav-item"
                  >
                    Contact us
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
