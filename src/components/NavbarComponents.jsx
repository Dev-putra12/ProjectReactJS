import {useState,useEffect} from "react";
import {Container,Nav,Navbar} from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
const [changeColor,setChangeColor] = useState(false);

const changeBackgroundColor = () => {
    if (window.scrollY > 10 ) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
  changeBackgroundColor();

  window.addEventListener("scroll",changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">Hi-Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {/* untuk melakukan looping data dari navLinks */}
          {navLinks.map((link) => {
            return (
              <div className="nav-link" key={link.id}>
              <NavLink to={link.path} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}
              end>{link.text}
              </NavLink>
              </div>
              );
            })}
            {/* tutup untuk melakukan looping data dari navLinks */}
          </Nav>

          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">Join With US</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents