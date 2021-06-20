import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/constants";
import "./NavBar.scss";
import { useStore } from "../../hooks/useStore";

export const NavBar = observer(() => {
  const history = useHistory();
  const { user } = useStore();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="dark" className="mb-3" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} className="navbar__brand">
          Buy device
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto navbar__links">
            <Button
              variant="outline-light mx-2"
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Admin Panel
            </Button>
            <Button variant="outline-light mx-2" onClick={() => logOut()}>
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto navbar__links">
            <Button
              variant="outline-light"
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
