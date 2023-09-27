import { Navbar, NavbarBrand } from "reactstrap";
import CoffeHubLogo from "../app/assets/img/coffee-hub-img1.jpg";

const Header = () => {
  return (
    <Navbar sticky="top" expand="md" className="navbar-color">
      <NavbarBrand href="/">
        <img src={CoffeHubLogo} alt="Coffee hub logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
