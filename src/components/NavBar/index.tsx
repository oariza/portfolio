import { NavLink } from "react-router-dom";

import * as Styled from "./styled";

function NavBar() {
  return (
    <Styled.NavBarContainer>
      <NavLink to="/">
        <h1>Omar Ariza</h1>
      </NavLink>

      <ul>
        <NavLink to="/about-me">
          <li>Acerca de mi</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Proyectos</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contacto</li>
        </NavLink>
      </ul>
    </Styled.NavBarContainer>
  );
}

export default NavBar;
