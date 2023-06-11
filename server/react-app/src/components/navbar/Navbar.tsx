import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import AddToCart from "../../asserts/iconscart.png";
interface MyComponentProps {
  cardItem: object[]; // Specify the type of the array prop
}
const NavBar: React.FC<MyComponentProps> = ({ cardItem }) => {
  console.log({ cardItem })
  return <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark" style={{ backgroundColor: 'black' }}>
    <Container>
      <Navbar.Brand as={Link} to={'/'}>Webelight Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          <Nav.Link as={Link} to={'/history'}>History</Nav.Link>

        </Nav>
        <Nav style={{ position: "relative" }} >
          {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          <Nav.Link as={Link} to={'/shoping-cart'}> <img src={AddToCart} alt="" style={{ width: "2.6rem", height: "3rem" }} onClick={() => console.log(cardItem)} />
            <div style={{ position: "absolute", color: "#fff", top: "17%", right: "35%" }}>{cardItem?.length}</div></Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}
export default NavBar;