import Container from "react-bootstrap/Container";
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header></Header>
      <Container className="p-5">{props.children}</Container>
      <Footer></Footer>
    </>
  );
}

export default Layout;
