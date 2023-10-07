import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCFbzjqJTYQzfp3lDnI8hMYBt2A8frVELcSHZWVkG3iyrYTY-ulZDkJzsWL3-xXGHJcA&usqp=CAU";
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        
        <Image
          src={imageUrl}
          alt="Logo"
          className="me-2"
          style={{ width: "50px", height: "auto" }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={`NavLink-margin ${setActiveClass}`} to="/">
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              className={`NavLink-margin ${setActiveClass}`}
              to="/Pokemons"
            >
              {" "}
              Pokemones{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
