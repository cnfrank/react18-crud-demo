import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Layout(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React API Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container className="p-5">{props.children}</Container>
    </>
  );
}

export default Layout;
