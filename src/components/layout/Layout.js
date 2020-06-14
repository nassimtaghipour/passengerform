import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <Link className="mainMenu" to="/">
                Fligh App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          </Navbar>
        </header>

        <main
          style={{
            paddingTop: "25px",
            paddingBottom: "50px",
            margin: "auto",
            width: "70%",
          }}
        >
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
