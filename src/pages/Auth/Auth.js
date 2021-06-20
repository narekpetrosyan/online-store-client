import React from "react";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { login, registration } from "../../http/userApi";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/constants";

export const Auth = observer(() => {
  const { user } = useStore();
  const history = useHistory();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        setEmail("");
        setPassword("");
        history.push(SHOP_ROUTE);
      } else {
        data = await registration(email, password);
        setEmail("");
        setPassword("");
      }
      user.setUser(data);
      user.setIsAuth(true);
    } catch (error) {
      console.log(error.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authentication" : "Register"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-3"
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-3"
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 px-3">
            {isLogin ? (
              <div>
                Not registered?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Already registered? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});
