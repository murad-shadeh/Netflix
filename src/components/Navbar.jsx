import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
const NavElement = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="/"
          className="title"
          style={{ color: "darkred", fontSize: "30px" }}
        >
          Netflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className="nav-link"
              style={{
                fontSize: "21px",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/fav"
              className="nav-link"
              style={{
                fontSize: "21px",
              }}
            >
              Favourites
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavElement;
