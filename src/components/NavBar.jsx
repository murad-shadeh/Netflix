import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#141414",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderBottom: "2px solid #222",
      }}
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          style={{
            color: "#e50914",
            fontSize: "28px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
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
                fontSize: "18px",
                color: isActive ? "#e50914" : "#ffffff",
                marginRight: "20px",
              })}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/fav"
              style={({ isActive }) => ({
                fontSize: "18px",
                color: isActive ? "#e50914" : "#ffffff",
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
