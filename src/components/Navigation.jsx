import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container maxWidth='sm'>
      <nav className='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </Container>
  );
};

export default Navigation;
