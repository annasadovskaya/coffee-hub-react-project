import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import CoffeHubLogo from "../app/assets/img/coffee-hub-img1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      light
      color="primary"
      sticky="top"
      expand="md"
      className="navbar-color"
    >
      <NavbarBrand href="/">
        <img
          src={CoffeHubLogo}
          alt="Coffee hub logo"
          className="float-start me-3"
        />
        <h1 className="mt-3 logo-heading">CoffeeHub</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <h5>Home</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/menu">
              <h5>Menu</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              <h5>Login</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <h5>Contact</h5>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link" to="/about">
              <h5>About</h5>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
