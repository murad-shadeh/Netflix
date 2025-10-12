import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          style={{ color: "darkred", fontSize: "30px" }}
        >
          Netflix
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              style={({ isActive }) => ({
                fontSize: "20px",
                color: isActive ? "darkred" : "black",
              })}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/fav"
              style={({ isActive }) => ({
                fontSize: "20px",
                color: isActive ? "darkred" : "black",
              })}
            >
              Favourites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
