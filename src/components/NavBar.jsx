import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* aligned left */}
        <Navbar.Brand
          href="/"
          className="title"
          style={{ color: "darkred", fontSize: "30px" }}
        >
          Netflix
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* aligned right  usign ms-auto*/}
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontSize: "21px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/fav" style={{ fontSize: "21px" }}>
              Favourites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
